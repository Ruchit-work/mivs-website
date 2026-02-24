
'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ServicesMegaMenu from './ServicesMegaMenu';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const pathname = usePathname();
    const [showServicesMenu, setShowServicesMenu] = useState(false);
    const [servicesExiting, setServicesExiting] = useState(false);
    let servicesTimerRef;

    const baseLinkClasses = 'px-3 py-2 text-base font-medium transition-all duration-200 relative group text-[var(--foreground-secondary)]';
    const desktopLink = (href, text) => (
        <Link 
            href={href}
            className={`${pathname === href ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'} ${baseLinkClasses}`}
        >
            {text}
            <span className={`absolute bottom-0 left-0 w-full h-px bg-[var(--foreground)] transform transition-transform duration-200 ${pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
        </Link>
    );
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;
        
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
    }, [isClient, isMenuOpen, lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Static initial class so server and client render identical HTML (avoids hydration mismatch)
    const initialNavClass = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform will-change-transform bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)] translate-y-0";
    const navClassName = mounted
        ? `fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform will-change-transform ${
            isScrolled ? "bg-[var(--background)]/95 border-b border-[var(--border)] backdrop-blur-sm" : "bg-[var(--background)]/90 backdrop-blur-sm border-b border-[var(--border)]"
          } ${isVisible ? "translate-y-0" : "-translate-y-full"}`
        : initialNavClass;

    return (
        <nav className={navClassName} suppressHydrationWarning>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="flex items-center">
                                <Image 
                                    src="/images/mivs_black_2.png" 
                                    alt="MIVS" 
                                    width={200}
                                    height={90}
                                    className="h-30 lg:h-30 w-auto"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {desktopLink('/', 'Home')}
                            {desktopLink('/about', 'About')}
                            <div className="relative"
                                onMouseEnter={() => {
                                    if (servicesTimerRef) clearTimeout(servicesTimerRef);
                                    setServicesExiting(false);
                                    setShowServicesMenu(true);
                                }}
                                onMouseLeave={() => {
                                    servicesTimerRef = setTimeout(() => {
                                        setServicesExiting(true);
                                        setTimeout(() => setShowServicesMenu(false), 180);
                                    }, 120);
                                }}
                            >
<Link 
                                    href="/services"
                                    className={`${pathname === '/services' ? 'text-[var(--foreground)]' : 'hover:text-[var(--foreground)]'} ${baseLinkClasses} flex items-center gap-1`}
							>
								<span>Services</span>
                                    <svg className={`w-3.5 h-3.5 ml-0.5 transition-transform duration-200 ${showServicesMenu && !servicesExiting ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9l6 6 6-6" />
                                    </svg>
								<span className={`absolute bottom-0 left-0 w-full h-px bg-[var(--foreground)] transform transition-transform duration-200 ${pathname === '/services' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
							</Link>
                                {showServicesMenu && (
                                    <div className="absolute left-1/2 -translate-x-1/2">
                                        <ServicesMegaMenu 
                                            onMouseEnter={() => {
                                                if (servicesTimerRef) clearTimeout(servicesTimerRef);
                                                setServicesExiting(false);
                                                setShowServicesMenu(true);
                                            }}
                                            onMouseLeave={() => {
                                                servicesTimerRef = setTimeout(() => {
                                                    setServicesExiting(true);
                                                    setTimeout(() => setShowServicesMenu(false), 180);
                                                }, 120);
                                            }}
                                            isExiting={servicesExiting}
                                        />
                                    </div>
                                )}
                            </div>
                            {desktopLink('/industries', 'Industries')}
                            {desktopLink('/case-studies', 'Case Studies')}
                            {desktopLink('/portfolio', 'AI Solutions')}
                            {/* {desktopLink('/pricing', 'Pricing')} */}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <Link 
                            href="/contact" 
                            className="btn-primary inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium focus:outline-none rounded-lg"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)] focus:outline-none transition-colors duration-200"
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
                    ? 'max-h-[600px] opacity-100' 
                    : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[var(--background)] border-t border-[var(--border)]">
                    <Link 
                        href="/" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        Home
                    </Link>
                    <Link 
                        href="/about" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/about' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        About
                    </Link>
                    <Link 
                        href="/services" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/services' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        Services
                    </Link>
                    <Link 
                        href="/industries" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/industries' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        Industries
                    </Link>
                    <Link 
                        href="/case-studies" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/case-studies' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        Case Studies
                    </Link>
                    <Link 
                        href="/portfolio" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/portfolio' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        AI Solutions
                    </Link>
                    <Link 
                        href="/process" 
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/process' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        Process
                    </Link>
                    
                    {/*
                    <a 
href="/pricing"
                        className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${pathname === '/pricing' ? 'text-[var(--accent)] bg-[var(--background-card)]' : 'text-[var(--foreground-secondary)] hover:text-[var(--accent)] hover:bg-[var(--background-card)]'}`}
                        onClick={closeMenu}
                    >
                        Pricing
                    </a>
                    */}
                    <div className="pt-4 border-t border-[var(--border)] flex flex-col gap-2">
                        <Link 
                            href="/contact" 
                            className="btn-primary block text-center px-4 py-3 text-base font-medium rounded-lg"
                            onClick={closeMenu}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
        </div>
        </nav>
    );
}