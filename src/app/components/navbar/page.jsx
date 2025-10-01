
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    const baseLinkClasses = 'px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2';
    const desktopLink = (href, text) => (
        <a 
            href={href}
            className={`${pathname === href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'} ${href === '/' ? 'text-gray-900' : ''} ${baseLinkClasses}`}
        >
            {text}
        </a>
    );
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
                : 'bg-transparent'
        } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center space-x-3">
                            <div className="flex items-center">
                                <img 
                                    src="/images/logo.png" 
                                    alt="MIVS Software Development" 
                                    className="h-40 w-auto"
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

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <a 
                            href="/contact" 
                            className="relative inline-flex items-center justify-center px-6 py-2 text-sm font-semibold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-[0_10px_25px_-10px_rgba(59,130,246,0.8)] hover:shadow-[0_15px_35px_-10px_rgba(79,70,229,0.9)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                            <span>Contact Us</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors duration-200"
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
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200">
                    <a 
                        href="/" 
                        className={`block px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2 ${pathname === '/' ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'}`}
                        onClick={closeMenu}
                    >
                        Home
                    </a>
                    <a 
                        href="/about" 
                        className={`block px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2 ${pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        onClick={closeMenu}
                    >
                        About
                    </a>
                    <a 
                        href="/services" 
                        className={`block px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2 ${pathname === '/services' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        onClick={closeMenu}
                    >
                        Services
                    </a>
                    <a 
                        href="/portfolio" 
                        className={`block px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2 ${pathname === '/portfolio' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        onClick={closeMenu}
                    >
                        Our Work
                    </a>
                    <a 
                        href="/process" 
                        className={`block px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2 ${pathname === '/process' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        onClick={closeMenu}
                    >
                        Process
                    </a>
                    
                    <a 
                        href="/pricing" 
                        className={`block px-3 py-2 text-base font-semibold transition-colors duration-200 hover:underline underline-offset-8 decoration-2 ${pathname === '/contact' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                        onClick={closeMenu}
                    >
                        Pricing
                    </a>
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <a 
                            href="/contact" 
                            className="block text-center px-4 py-3 text-base font-semibold text-white rounded-xl transition-all duration-300 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 shadow-[0_10px_25px_-10px_rgba(59,130,246,0.8)] hover:shadow-[0_15px_35px_-10px_rgba(79,70,229,0.9)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
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