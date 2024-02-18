'use client';

import React, { MouseEvent, useEffect, useRef } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const ScrollToTop: React.FC = () => {
    const btn = useRef<HTMLButtonElement>(null);
    const scrollToTop = (e: MouseEvent) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', _ => {
            if (window.scrollY > 300) {
                btn.current!.style.opacity = '1';
                btn.current!.style.visibility = 'visible';
            }
            else {
                btn.current!.style.opacity = '0';
                btn.current!.style.visibility = 'hidden';
            }
        });
    }, []);

    return (
        <button ref={btn} type="button" className="btn btn-primary scroll-to-top" onClick={scrollToTop}>
            <FaChevronUp />
        </button>
    )
}

export default ScrollToTop;