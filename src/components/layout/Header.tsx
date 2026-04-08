"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Ideas & Insights", path: "/ideas" },
    { name: "Projects", path: "/projects" },
    { name: "Public Progress", path: "/progress" },
    { name: "Work With Me", path: "/work" },
    { name: "Chat", path: "/chat" },
    { name: "Support", path: "/support" },
    { name: "About", path: "/about" },
];

export default function Header() {
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 md:px-6">
                <nav className="flex items-center gap-4 md:gap-8 px-5 md:px-8 py-3 md:py-4 bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl w-full max-w-[95vw] md:w-auto md:max-w-none">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 md:gap-3 mr-auto md:mr-4 group">
                        <span className="text-cyan-400 font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase">Studio</span>
                        <span className="text-white font-bold text-sm md:text-lg tracking-tight group-hover:text-cyan-200 transition-colors">The Great Web</span>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.path;
                            return (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    className={`text-sm font-medium transition-colors relative ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                                        }`}
                                >
                                    {link.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav-pill"
                                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-xl hover:bg-white/5 transition-colors"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-0.5 bg-white rounded-full origin-center"
                        />
                        <motion.span
                            animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className="block w-5 h-0.5 bg-white rounded-full"
                        />
                        <motion.span
                            animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                            className="block w-5 h-0.5 bg-white rounded-full origin-center"
                        />
                    </button>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-[#0a0e1a]/95 backdrop-blur-xl lg:hidden"
                    >
                        <motion.nav
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.05 }}
                            className="flex flex-col items-center justify-center h-full gap-1 px-6"
                        >
                            {navLinks.map((link, i) => {
                                const isActive = pathname === link.path;
                                return (
                                    <motion.div
                                        key={link.path}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.05 * i }}
                                    >
                                        <Link
                                            href={link.path}
                                            onClick={() => setMobileOpen(false)}
                                            className={`block text-center text-xl font-semibold py-3 px-8 rounded-2xl transition-all ${
                                                isActive
                                                    ? "text-cyan-400 bg-cyan-400/10"
                                                    : "text-slate-300 hover:text-white hover:bg-white/5"
                                            }`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </motion.nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
