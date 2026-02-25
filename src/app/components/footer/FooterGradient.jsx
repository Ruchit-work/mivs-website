'use client';

import { useState, useEffect } from 'react';

export default function FooterGradient() {
    const [scrollOffset, setScrollOffset] = useState(0);

    useEffect(() => {
        let rafId;
        const handleScroll = () => {
            rafId = requestAnimationFrame(() => setScrollOffset(window.scrollY));
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    const drift = scrollOffset * 0.04;
    const glowY = 50 + Math.min(20, drift * 0.2);
    const zoom = Math.min(1.4, 1 + scrollOffset * 0.0004);

    return (
        <div
            className="absolute inset-0 pointer-events-none overflow-hidden"
            style={{
                transition: 'transform 400ms cubic-bezier(0.33, 1, 0.68, 1)',
                willChange: 'transform',
                transform: `scale(${zoom})`,
            }}
        >
            <div
                className="absolute -left-[25%] -top-[25%] w-[150%] h-[150%]"
                style={{
                    backgroundImage: `
                        radial-gradient(ellipse 80% 80% at 50% ${glowY}%, rgba(254, 215, 170, 0.5) 0%, rgba(253, 186, 116, 0.35) 25%, rgba(199, 210, 254, 0.2) 50%, rgba(186, 230, 253, 0.15) 70%, transparent 85%),
                        radial-gradient(ellipse 100% 60% at 80% 80%, rgba(254, 243, 199, 0.25) 0%, rgba(254, 215, 170, 0.12) 40%, transparent 70%),
                        radial-gradient(ellipse 60% 100% at 20% 30%, rgba(224, 242, 254, 0.3) 0%, rgba(199, 210, 254, 0.15) 50%, transparent 75%),
                        linear-gradient(180deg, #ffffff 0%, #fafbff 8%, #f8fafc 18%, #f0f9ff 35%, #e0f2fe 55%, #fefce8 80%, #fef9c3 100%)
                    `,
                    backgroundSize: '100% 100%',
                }}
            />
        </div>
    );
}
