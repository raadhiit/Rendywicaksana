import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Stat = {
    number: string;
    label: string;
};


export default function HeaderSection({ stats, isVisible }: { stats: Stat[]; isVisible: boolean }) {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    return (
    <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-gray-700 sticky top-0">
        <nav className="container mx-auto px-8 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-100">Rendy Wicaksana</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
            {[
                { href: '#home', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#portfolio', label: 'Portfolio' },
                { href: '#expertise', label: 'Expertise' },
                { href: '#contact', label: 'Contact' },
            ].map((item) => (
                <a
                key={item.href}
                href={item.href}
                className="relative text-gray-400 hover:text-white transition after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-300"
                >
                {item.label}
                </a>
            ))}
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)} className="text-gray-100">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
            {showMobileMenu && (
            <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="fixed top-0 left-0 w-full bg-gray-900/95 backdrop-blur-sm shadow-md px-6 py-6 flex flex-col space-y-4 z-[99] md:hidden text-gray-100"
            >
                <button
                onClick={() => setShowMobileMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-100 focus:outline-none"
                >
                <X className="w-6 h-6" />
                </button>

                <a href="#home" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-300">Home</a>
                <a href="#about" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-300">About</a>
                <a href="#portfolio" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-300">Portfolio</a>
                <a href="#expertise" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-300">Expertise</a>
                <a href="#contact" onClick={() => setShowMobileMenu(false)} className="hover:text-gray-300">Contact</a>
            </motion.div>
            )}
        </AnimatePresence>
    </header>

    );
}
