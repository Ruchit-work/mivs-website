import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-br from-[#1e3a5f] via-[#2563eb] to-[#06b6d4] text-white mt-20 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/30 rounded-lg rotate-45 animate-spin-slow"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-cyan-400/40 rounded-full animate-float"></div>
                <div className="absolute top-1/2 left-1/3 w-20 h-20 border-2 border-white/20 rotate-12 animate-spin-slow-reverse"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand + Summary */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <Image 
                                src="/images/logo.png" 
                                alt="MIVS" 
                                width={80}
                                height={80}
                                className="h-20 w-auto" 
                            />
                        </div>
                        <p className="text-blue-100 leading-relaxed mb-6">
                            Transforming ideas into powerful software solutions. Your trusted partner in digital innovation.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors backdrop-blur-sm">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors backdrop-blur-sm">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors backdrop-blur-sm">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="/" className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">→ Home</a></li>
                            <li><a href="/about" className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">→ About Us</a></li>
                            <li><a href="/services" className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">→ Services</a></li>
                            <li><a href="/portfolio" className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">→ Our Work</a></li>
                            <li><a href="/process" className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">→ Process</a></li>
                            <li><a href="/pricing" className="text-blue-100 hover:text-white hover:translate-x-1 inline-block transition-all">→ Pricing</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">Top Services</h3>
                        <ul className="space-y-3 text-blue-100">
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">▹</span>
                                <span>Web Development</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">▹</span>
                                <span>Mobile Apps</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">▹</span>
                                <span>Cloud Solutions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">▹</span>
                                <span>AI/ML Solutions</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="text-cyan-400">▹</span>
                                <span>DevOps</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white">Get In Touch</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3 group">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <a href="mailto:admin@mivs.in" className="text-blue-100 hover:text-white transition-colors">admin@mivs.in</a>
                            </li>
                            <li className="flex items-start space-x-3 group">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <a href="tel:+916380541373" className="text-blue-100 hover:text-white transition-colors">+91 6380541373</a>
                            </li>
                            <li className="flex items-start space-x-3 group">
                                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                                    <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="text-blue-100">
                                    <div>Jay Ambe Society,</div>
                                    <div>Bardoli-394601, India</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider with gradient */}
                <div className="relative my-12">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-white/20"></div>
                    </div>
                    <div className="relative flex justify-center">
                        <span className="px-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-[#1e3a5f] text-xs font-semibold rounded-full py-1">
                            MIVS Software Development
                        </span>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="text-blue-100 text-sm">
                        © {new Date().getFullYear()} MIVS Software Development. All rights reserved.
                    </div>

                    <div className="flex flex-wrap gap-6 text-sm">
                        <a href="/privacy-policy" className="text-blue-100 hover:text-white transition-colors hover:underline underline-offset-4">Privacy Policy</a>
                        <a href="/terms" className="text-blue-100 hover:text-white transition-colors hover:underline underline-offset-4">Terms of Service</a>
                        <a href="/support" className="text-blue-100 hover:text-white transition-colors hover:underline underline-offset-4">Support</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}


