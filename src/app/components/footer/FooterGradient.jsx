'use client';

import { useState, useEffect } from 'react';

export default function FooterGradient() {
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
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background: `
                    radial-gradient(ellipse 120% 70% at 50% ${glowY}%, rgba(254, 215, 170, 0.55) 0%, rgba(253, 186, 116, 0.3) 30%, rgba(254, 243, 199, 0.12) 50%, transparent 65%),
                    linear-gradient(180deg, #ffffff 0%, #f8fafc 15%, #f0f9ff 40%, #e0f2fe 75%, #fefce8 100%)
                `,
            }}
        />
    );
}
