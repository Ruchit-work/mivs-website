'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Footer() {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollOffset(window.scrollY);
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const drift = scrollOffset * 0.05;
    const glowY = 100 - Math.min(8, drift * 0.15);

    return (
        <footer className="relative text-[var(--foreground)] mt-20 border-t border-[var(--border)] bg-[var(--background)]">
            <div className="relative overflow-hidden">
                {/* Gradient layer – same effect as FooterGradient */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background: `
                            radial-gradient(ellipse 120% 70% at 50% ${glowY}%, rgba(254, 215, 170, 0.55) 0%, rgba(253, 186, 116, 0.3) 30%, rgba(254, 243, 199, 0.12) 50%, transparent 65%),
                            linear-gradient(180deg, #ffffff 0%, #f8fafc 15%, #f0f9ff 40%, #e0f2fe 75%, #fefce8 100%)
                        `,
                    }}
                />
                <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand + Summary */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image 
                                src="/images/mivs_black_2.png" 
                                alt="MIVS" 
                                width={200}
                                height={90}
                                className="h-12 lg:h-30 w-auto" 
                                priority
                            />
                        </div>
                        <p className="text-[var(--foreground-secondary)] leading-[1.6] mb-6 text-base">
                            Enterprise AI systems and automation. Strategy, architecture, delivery—built for scale.
                        </p>
                        <div className="flex space-x-4">
                            <a 
                                href="https://twitter.com/mivssoftware" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-[var(--border)] rounded-lg flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                aria-label="Follow us on Twitter"
                            >
                                <svg className="w-5 h-5 text-[var(--foreground-secondary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a 
                                href="https://www.linkedin.com/company/110551451" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-[var(--border)] rounded-lg flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                aria-label="Connect with us on LinkedIn"
                            >
                                <svg className="w-5 h-5 text-[var(--foreground-secondary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a 
                                href="https://github.com/mivs-software" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="w-10 h-10 border border-[var(--border)] rounded-lg flex items-center justify-center transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                aria-label="View our GitHub profile"
                            >
                                <svg className="w-5 h-5 text-[var(--foreground-secondary)] transition-colors" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-6 text-[var(--foreground)]">Quick Links</h3>
                        <ul className="space-y-3">
                            <li>
                                <a 
                                    href="/" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="Go to homepage"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/about" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="Learn about our company"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/services" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="View our services"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/industries" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="Explore industries we serve"
                                >
                                    Industries
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/case-studies" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="View our success stories"
                                >
                                    Case Studies
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/portfolio" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="AI Solutions"
                                >
                                    AI Solutions
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="/pricing" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] inline-block transition-colors"
                                    aria-label="Engagement models"
                                >
                                    Engagement Models
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-6 text-[var(--foreground)]">Capabilities</h3>
                        <ul className="space-y-3 text-[var(--foreground-secondary)]">
                            <li>
                                <a href="/services" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                    <span className="text-[var(--foreground-muted)]">▹</span>
                                    <span>Enterprise AI Systems</span>
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                    <span className="text-[var(--foreground-muted)]">▹</span>
                                    <span>LLM Integrations</span>
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                    <span className="text-[var(--foreground-muted)]">▹</span>
                                    <span>AI Automation Architecture</span>
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                    <span className="text-[var(--foreground-muted)]">▹</span>
                                    <span>Intelligent Workflows</span>
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                    <span className="text-[var(--foreground-muted)]">▹</span>
                                    <span>AI-Powered Decision Engines</span>
                                </a>
                            </li>
                            <li>
                                <a href="/services" className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors">
                                    <span className="text-[var(--foreground-muted)]">▹</span>
                                    <span>Enterprise Transformation</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-heading text-lg font-semibold mb-6 text-[var(--foreground)]">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <div className="w-8 h-8 bg-[var(--background-card)] border border-[var(--border)] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-[var(--foreground-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a 
                                    href="mailto:mivs.work.gpt@gmail.com" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors"
                                    aria-label="Send us an email"
                                >
                                    mivs.work.gpt@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3 group">
                                <div className="w-8 h-8 bg-[var(--background-card)] border border-[var(--border)] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-[var(--foreground-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a 
                                    href="tel:+916380541373" 
                                    className="text-[var(--foreground-secondary)] hover:text-[var(--accent)] transition-colors"
                                    aria-label="Call us on phone"
                                >
                                    +91 6380541373
                                </a>
                            </li>
                            <li className="flex items-start space-x-3 group">
                                <div className="w-8 h-8 bg-[var(--background-card)] border border-[var(--border)] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-[var(--foreground-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <address className="text-[var(--foreground-secondary)] not-italic text-sm">
                                    <div>Jay Ambe Society,</div>
                                    <div>Bardoli-394601, India</div>
                                </address>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[var(--border)] my-12" />

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-[var(--foreground-muted)] text-sm">
                        © {new Date().getFullYear()} MIVS. All rights reserved.
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm">
                        <a 
                            href="/privacy-policy" 
                            className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                            aria-label="Read our privacy policy"
                        >
                            Privacy Policy
                        </a>
                        <a 
                            href="/terms" 
                            className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                            aria-label="Read our terms of service"
                        >
                            Terms of Service
                        </a>
                        <a 
                            href="/contact" 
                            className="text-[var(--foreground-muted)] hover:text-[var(--accent)] transition-colors"
                            aria-label="Contact us"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
}


