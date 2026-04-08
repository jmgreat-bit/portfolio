"use client";

import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import { useState } from "react";
import Image from "next/image";

type Tab = "binance" | "bank";

export default function SupportPage() {
    const [activeTab, setActiveTab] = useState<Tab>("binance");
    const [copied, setCopied] = useState("");

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopied(label);
        setTimeout(() => setCopied(""), 2000);
    };

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />

            <div className="flex-grow flex flex-col px-4 pt-32 md:pt-40 pb-12 w-full max-w-4xl mx-auto items-center">
                <div className="w-full flex-grow flex flex-col items-center">
                    
                    {/* Header */}
                    <div className="text-center mb-8 md:mb-12">
                        <motion.h1 
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 tracking-tight"
                        >
                            Support My Work
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto font-light"
                        >
                            Fuel the next big idea. Choose a platform below to contribute to the
                            ongoing experiments and open-source tools.
                        </motion.p>
                    </div>

                    {/* Interactive Terminal Interface */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                        className="w-full max-w-2xl bg-[#0a0a0c]/80 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative"
                    >
                        {/* Glow effect matching active tab */}
                        <div 
                            className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[2px] blur-sm transition-colors duration-500 ${
                                activeTab === 'binance' ? 'bg-[#FCD535]' : 
                                activeTab === 'bank' ? 'bg-cyan-400' : 'bg-[#FFDD00]'
                            }`}
                        />
                        
                        {/* Tab Selector */}
                        <div className="flex border-b border-white/10 px-2 pt-2">
                            <TabButton 
                                id="binance" 
                                active={activeTab} 
                                onClick={() => setActiveTab("binance")}
                                label="Binance Pay"
                                icon={<svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M16.624 13.9202L12 18.5442L7.37604 13.9202L4.60004 16.6962L12 24.0962L19.4 16.6962L16.624 13.9202ZM7.37596 10.08L12 5.45601L16.624 10.08L19.4 7.30401L12 -0.095993L4.60001 7.30401L7.37596 10.08ZM12 15.696L14.8 12.896L12 10.096L9.20005 12.896L12 15.696ZM4.60002 9.22401L1.82402 12.0001L4.60002 14.7761L7.37602 12.0001L4.60002 9.22401ZM19.4 9.22401L16.624 12.0001L19.4 14.7761L22.176 12.0001L19.4 9.22401Z" /></svg>}
                            />
                            <TabButton 
                                id="bank" 
                                active={activeTab} 
                                onClick={() => setActiveTab("bank")}
                                label="Mobile & Bank"
                                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>}
                            />
                        </div>

                        {/* Content Area */}
                        <div className="p-6 sm:p-10 min-h-[480px] relative overflow-hidden flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                {activeTab === "binance" && (
                                    <motion.div 
                                        key="binance"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-full flex-col flex items-center"
                                    >
                                        <div className="flex flex-col items-center w-full">
                                            {/* Beautiful wrapper for the provided image */}
                                            <div className="w-full max-w-[280px] sm:max-w-[320px] bg-transparent rounded-3xl p-1 shadow-2xl relative overflow-hidden mb-8 transform transition-transform hover:scale-105 duration-500 border border-white/10 group">
                                                <div className="absolute inset-0 bg-gradient-to-tr from-[#FCD535]/10 to-transparent pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                                <div className="rounded-2xl overflow-hidden relative">
                                                    <Image 
                                                        src="/binance.jpg" 
                                                        alt="Binance Pay QR Code" 
                                                        width={600}
                                                        height={800}
                                                        className="w-full h-auto object-contain relative z-0 block"
                                                        priority
                                                        unoptimized
                                                    />
                                                </div>
                                            </div>

                                            <div className="w-full max-w-[340px] mt-4">
                                                <div 
                                                    onClick={() => copyToClipboard("1041200996", "BINANCE")}
                                                    className="flex justify-between items-center bg-white/5 backdrop-blur-sm px-6 py-4 rounded-xl cursor-pointer border border-white/5 hover:border-[#FCD535]/40 hover:bg-[#FCD535]/5 transition-all group shadow-lg"
                                                >
                                                    <span className="text-slate-400 text-sm font-medium transition-colors group-hover:text-slate-300">Copy Binance ID</span>
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-white text-lg font-bold tracking-wider group-hover:text-[#FCD535] transition-colors">1041200996</span>
                                                        <div className="relative flex items-center">
                                                            <svg className="w-5 h-5 text-slate-500 transition-colors group-hover:text-[#FCD535]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                                            {copied === "BINANCE" && (
                                                                <motion.span 
                                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                                    animate={{ opacity: 1, scale: 1 }}
                                                                    className="absolute -top-12 -right-2 bg-[#FCD535] text-black text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl shadow-black/50 whitespace-nowrap"
                                                                >
                                                                    Copied ID!
                                                                </motion.span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {activeTab === "bank" && (
                                    <motion.div 
                                        key="bank"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="w-full flex-col flex items-center justify-center text-center pb-8"
                                    >
                                        <div className="w-24 h-24 bg-cyan-400/5 rounded-full flex items-center justify-center mb-8 border border-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
                                            <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        </div>
                                        <h3 className="text-3xl font-bold mb-4 text-white">Bank & Mobile Money</h3>
                                        <p className="text-slate-400 max-w-sm mb-10 leading-relaxed">
                                            Painless direct local transfers and mobile money network support (Momo/etc) are currently being set up.
                                        </p>
                                        <span className="px-6 py-2.5 bg-white/5 text-slate-300 rounded-full border border-white/10 font-medium tracking-wide">
                                            Status: Coming Soon
                                        </span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                </div>
            </div>
        </main>
    );
}

function TabButton({ id, active, onClick, label, icon }: { id: Tab, active: Tab, onClick: () => void, label: string, icon: React.ReactNode }) {
    const isActive = active === id;
    
    return (
        <button
            onClick={onClick}
            className={`flex-1 flex items-center justify-center gap-2 md:gap-3 py-5 px-2 tracking-wide font-medium text-sm sm:text-base border-b-2 transition-all relative outline-none hover:bg-white/5 ${
                isActive 
                    ? id === 'binance' ? "text-[#FCD535] border-[#FCD535]" : 
                      "text-cyan-400 border-cyan-400"
                    : "text-slate-400 border-transparent hover:text-white"
            }`}
        >
            {icon}
            {label}
        </button>
    );
}
