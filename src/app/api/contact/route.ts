import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from 'fs';
import path from 'path';

// Ensure this route runs on the Node.js runtime (required for nodemailer)
export const runtime = 'nodejs';
// Avoid caching and ensure fresh execution for form submissions
export const dynamic = 'force-dynamic';

export async function GET() {
  // Return which env vars are present (do NOT include actual values)
  const EMAIL_USER = !!process.env.EMAIL_USER;
  const EMAIL_PASS = !!process.env.EMAIL_PASS;
  const EMAIL_FROM = !!process.env.EMAIL_FROM;
  const EMAIL_TO = !!process.env.EMAIL_TO;

  // Diagnostics: cwd and .env.local existence
  const cwd = process.cwd();
  const envPath = path.join(cwd, '.env.local');
  const envLocalExists = fs.existsSync(envPath);

  // List which EMAIL_* keys are present in process.env
  const envKeys = Object.keys(process.env).filter((k) => k.startsWith('EMAIL_'));

  return NextResponse.json({
    EMAIL_USER,
    EMAIL_PASS,
    EMAIL_FROM,
    EMAIL_TO,
    cwd,
    envLocalExists,
    envKeys,
  });
}

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

    // Check if environment variables are set with detailed diagnostics
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_FROM = process.env.EMAIL_FROM;
    const EMAIL_TO = process.env.EMAIL_TO;

    const missingVars: string[] = [];
    if (!EMAIL_USER) missingVars.push('EMAIL_USER');
    if (!EMAIL_PASS) missingVars.push('EMAIL_PASS');

    if (missingVars.length > 0) {
      console.error("Missing email configuration variables:", missingVars);
      return NextResponse.json(
        { message: `Email service is not configured. Missing: ${missingVars.join(', ')}` },
        { status: 500 }
      );
    }

    // Create transporter with more specific Gmail config
    // Primary transporter (STARTTLS on 587)
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use STARTTLS
      auth: {
        user: EMAIL_USER!,
        pass: EMAIL_PASS!,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Email content
    // Use EMAIL_FROM if set, otherwise use EMAIL_USER with a display name
    const fromAddress = EMAIL_FROM 
      ? EMAIL_FROM 
      : `"MIVS Contact Form" <${EMAIL_USER}>`;
    
    const mailOptions = {
      from: fromAddress, // Sender display name and email
      replyTo: `"${firstName} ${lastName}" <${email}>`, // User's email with name for replies
      to: EMAIL_TO || EMAIL_USER,
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
    try {
      await transporter.verify();
    } catch (verifyError: unknown) {
      const e = verifyError as { message?: string; code?: string; response?: string; responseCode?: number };
      console.error("SMTP verify failed on 587 STARTTLS:", e);
      // If connection issue, retry with SMTPS on 465
      if (e.code === 'ECONNECTION' || e.code === 'ETIMEDOUT') {
        try {
          transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // SMTPS
            auth: {
              user: EMAIL_USER!,
              pass: EMAIL_PASS!,
            },
            tls: {
              rejectUnauthorized: false
            }
          });
          await transporter.verify();
        } catch (verifyError465: unknown) {
          const e465 = verifyError465 as { message?: string; code?: string; response?: string; responseCode?: number };
          console.error("SMTP verify failed on 465 SMTPS:", e465);
          return NextResponse.json(
            {
              message: "Failed to connect to email server. Please verify SMTP credentials.",
              error: e465.message,
              code: e465.code,
              response: e465.response,
              responseCode: e465.responseCode,
            },
            { status: 500 }
          );
        }
      } else {
        return NextResponse.json(
          {
            message: "Failed to connect to email server. Please verify SMTP credentials.",
            error: e.message,
            code: e.code,
            response: e.response,
            responseCode: e.responseCode,
          },
          { status: 500 }
        );
      }
    }
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
