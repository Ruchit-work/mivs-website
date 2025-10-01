import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, company, service, budget, message } = body;

    // Validate required fields
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("Missing email configuration");
      return NextResponse.json(
        { message: "Email service is not configured. Please contact support." },
        { status: 500 }
      );
    }

    // Create transporter with more specific Gmail config
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    // Use EMAIL_FROM if set, otherwise use EMAIL_USER with a display name
    const fromAddress = process.env.EMAIL_FROM 
      ? process.env.EMAIL_FROM 
      : `"MIVS Contact Form" <${process.env.EMAIL_USER}>`;
    
    const mailOptions = {
      from: fromAddress, // Sender display name and email
      replyTo: `"${firstName} ${lastName}" <${email}>`, // User's email with name for replies
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Service:</strong> ${service || "N/A"}</p>
        <p><strong>Budget:</strong> ${budget || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "N/A"}
Service: ${service || "N/A"}
Budget: ${budget || "N/A"}
Message: ${message}
      `,
    };

    // Test connection first
    console.log("Testing SMTP connection...");
    await transporter.verify();
    console.log("SMTP connection verified successfully");

    // Send email
    console.log("Sending email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: unknown) {
    const emailError = error as { 
      message?: string; 
      code?: string; 
      command?: string; 
      response?: string; 
      responseCode?: number;
    };
    
    console.error("Detailed email error:", {
      message: emailError.message,
      code: emailError.code,
      command: emailError.command,
      response: emailError.response,
      responseCode: emailError.responseCode,
    });
    
    // Provide more specific error messages
    let userMessage = "Failed to send email. ";
    if (emailError.code === "EAUTH") {
      userMessage += "Email authentication failed. Please check your App Password.";
    } else if (emailError.code === "ECONNECTION" || emailError.code === "ETIMEDOUT") {
      userMessage += "Could not connect to email server. Please check your internet connection.";
    } else if (emailError.responseCode === 535) {
      userMessage += "Invalid email credentials. Please verify your App Password.";
    } else {
      userMessage += emailError.message || "Unknown error occurred.";
    }

    return NextResponse.json(
      { 
        message: userMessage,
        error: emailError.message,
        code: emailError.code
      },
      { status: 500 }
    );
  }
}
