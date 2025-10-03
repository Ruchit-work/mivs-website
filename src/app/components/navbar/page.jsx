
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const pathname = usePathname();

    const baseLinkClasses = 'px-3 py-2 text-base font-semibold transition-all duration-200 relative group';
    const desktopLink = (href, text) => (
        <a 
            href={href}
            className={`${pathname === href ? 'text-purple-400' : 'text-slate-300 hover:text-white'} ${baseLinkClasses}`}
        >
            {text}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transform transition-transform duration-300 ${pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </a>
    );
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Initialize theme from localStorage on component mount
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'light');
        } else if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
            setIsDarkMode(true);
            document.documentElement.removeAttribute('data-theme');
        }
    }, []);

    // Theme toggle function
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        
        if (newTheme) {
            // Dark mode
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            // Light mode
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;
            setIsScrolled(currentY > 10);

            // Hide on scroll down, show on scroll up. Keep visible if menu is open.
            if (!isMenuOpen) {
                if (currentY < 10) {
                    setIsVisible(true);
                } else if (currentY > lastScrollY) {
                    setIsVisible(false);
                } else if (currentY < lastScrollY) {
                    setIsVisible(true);
                }
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen, lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform will-change-transform ${
            isScrolled 
                ? 'glass border-b border-purple-500/20 shadow-lg shadow-purple-500/10' 
                : 'bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-3">
                            <div className="flex items-center">
                                <Image 
                                    src="/images/MIVS_1.png" 
                                    alt="MIVS Software Development" 
                                    width={200}
                                    height={90}
                                    className="h-30 lg:h-30 w-auto"
                                    priority
                                />
                            </div>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {desktopLink('/', 'Home')}
                            {desktopLink('/about', 'About')}
                            {desktopLink('/services', 'Services')}
                            {desktopLink('/portfolio', 'Our Work')}
                            {desktopLink('/process', 'Process')}
                            {desktopLink('/pricing', 'Pricing')}
                        </div>
                    </div>

                    {/* Theme Toggle Button */}
                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2.5 glass border border-purple-500/30 rounded-lg hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-500 group"
                            aria-label="Toggle theme"
                            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                        >
                            {isDarkMode ? (
                                // Sun icon for switching to light mode
                                <svg className="w-5 h-5 text-slate-300 group-hover:text-yellow-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                // Moon icon for switching to dark mode
                                <svg className="w-5 h-5 text-slate-700 group-hover:text-purple-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        
                        {/* CTA Button */}
                        <a 
                            href="/contact" 
                            className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <span className="relative z-10">Contact Us</span>
                            <div className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-colors duration-200"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${
                isMenuOpen 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass border-t border-purple-500/20">
                    <a 
                        href="/" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${pathname === '/' ? 'text-purple-400 bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/10'}`}
                        onClick={closeMenu}
                    >
                        Home
                    </a>
                    <a 
                        href="/about" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${pathname === '/about' ? 'text-purple-400 bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/10'}`}
                        onClick={closeMenu}
                    >
                        About
                    </a>
                    <a 
                        href="/services" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${pathname === '/services' ? 'text-purple-400 bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/10'}`}
                        onClick={closeMenu}
                    >
                        Services
                    </a>
                    <a 
                        href="/portfolio" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${pathname === '/portfolio' ? 'text-purple-400 bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/10'}`}
                        onClick={closeMenu}
                    >
                        Our Work
                    </a>
                    <a 
                        href="/process" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${pathname === '/process' ? 'text-purple-400 bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/10'}`}
                        onClick={closeMenu}
                    >
                        Process
                    </a>
                    
                    <a 
                        href="/pricing" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-all duration-200 ${pathname === '/pricing' ? 'text-purple-400 bg-purple-500/20' : 'text-slate-300 hover:text-white hover:bg-purple-500/10'}`}
                        onClick={closeMenu}
                    >
                        Pricing
                    </a>
                    {/* Theme Toggle for Mobile */}
                    <div className="pt-4 border-t border-purple-500/20">
                        <button
                            onClick={() => {
                                toggleTheme();
                                closeMenu();
                            }}
                            className="w-full flex items-center justify-center gap-3 px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 glass border border-purple-500/30 hover:bg-purple-500/20 mb-3"
                        >
                            {isDarkMode ? (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="text-slate-300">Switch to Light Mode</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                    <span className="text-slate-700">Switch to Dark Mode</span>
                                </>
                            )}
                        </button>
                        <a 
                            href="/contact" 
                            className="block text-center px-4 py-3 text-base font-semibold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
        </div>
        </nav>
    );
}