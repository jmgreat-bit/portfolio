"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import Link from "next/link";
import { useState } from "react";

export default function ChatPage() {
    const [copied, setCopied] = useState(false);

    const copyEmail = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent mailto if used as href
        navigator.clipboard.writeText("jgreat20005@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    // Array of contact methods for clean mapping and staggered animation
    const contacts = [
        {
            name: "Telegram",
            href: "https://t.me/TheGreatjm",
            icon: (
                <svg className="w-7 h-7 group-hover:text-white transition-colors text-[#0088cc]" fill="currentColor" viewBox="0 0 24 24"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" /></svg>
            ),
            description: "Fastest way to reach me for quick ideas.",
            colorClass: "hover:border-[#0088cc]/50 hover:bg-[#0088cc]/10",
            glowColor: "group-hover:shadow-[0_0_30px_rgba(0,136,204,0.3)]",
            isAction: false,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/james-great-89574028b",
            icon: (
                <svg className="w-7 h-7 group-hover:text-white transition-colors text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            ),
            description: "For professional networking & collaborations.",
            colorClass: "hover:border-[#0077B5]/50 hover:bg-[#0077B5]/10",
            glowColor: "group-hover:shadow-[0_0_30px_rgba(0,119,181,0.3)]",
            isAction: false,
        },
        {
            name: copied ? "Email Copied!" : "Copy Email Address",
            href: "#",
            icon: (
                <svg className={`w-7 h-7 transition-colors ${copied ? "text-green-400" : "text-white/70 group-hover:text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {copied ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    )}
                </svg>
            ),
            description: "jgreat20005@gmail.com",
            colorClass: copied ? "border-green-500/50 bg-green-500/10" : "hover:border-white/40 hover:bg-white/5",
            glowColor: copied ? "shadow-[0_0_30px_rgba(74,222,128,0.2)]" : "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]",
            isAction: true,
            onClick: copyEmail
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />

            <div className="flex-grow flex flex-col px-4 sm:px-6 pt-32 md:pt-40 pb-20 relative z-10 w-full max-w-2xl mx-auto">
                <div className="w-full text-center">
                    
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-12"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                            Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Dialogue</span>
                        </h1>
                        <p className="text-slate-400 text-lg">
                            Whether you have an ambitious project or just want to explore ideas, I'm always open to discussing new frontiers.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                        className="grid gap-5"
                    >
                        {contacts.map((contact, index) => {
                            const innerContent = (
                                <>
                                    <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-black/40 border border-white/5 group-hover:scale-110 transition-transform duration-300">
                                        {contact.icon}
                                    </div>
                                    <div className="ml-6 text-left flex-grow">
                                        <h3 className={`text-xl font-bold mb-1 transition-all ${contact.isAction && copied ? 'text-green-400' : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300'}`}>
                                            {contact.name}
                                        </h3>
                                        <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                                            {contact.description}
                                        </p>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                        {contact.isAction ? (
                                            <svg className={`w-6 h-6 ${copied ? "text-green-400" : "text-white/50 group-hover:text-white"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                {copied ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>}
                                            </svg>
                                        ) : (
                                            <svg className="w-6 h-6 text-white/50 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                        )}
                                    </div>
                                </>
                            );

                            const className = `group relative flex items-center p-6 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md transition-all duration-300 ${contact.colorClass} ${contact.glowColor} w-full text-left`;

                            return (
                                <motion.div key={index} variants={itemVariants}>
                                    {contact.isAction ? (
                                        <button onClick={contact.onClick} type="button" className={className}>
                                            {innerContent}
                                        </button>
                                    ) : (
                                        <Link href={contact.href} target="_blank" rel="noreferrer" className={className}>
                                            {innerContent}
                                        </Link>
                                    )}
                                </motion.div>
                            );
                        })}
                    </motion.div>
                    
                </div>
            </div>
        </main>
    );
}
