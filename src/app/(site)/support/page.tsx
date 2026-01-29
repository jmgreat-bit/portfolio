"use client";

import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import MagneticButton from "@/components/ui/MagneticButton";
import { useState } from "react";

export default function SupportPage() {
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

            <div className="flex-grow flex items-center justify-center px-6 pt-20 pb-10">
                <div className="max-w-2xl w-full text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        Support My Work
                    </motion.h1>
                    <p className="text-slate-400 mb-12 text-lg">
                        If my tools or content have helped you, consider fueling the next big idea.
                    </p>

                    <div className="grid gap-6">
                        {/* Buy Me a Coffee */}
                        <MagneticButton className="w-full">
                            <a
                                href="https://buymeacoffee.com"
                                target="_blank"
                                className="block w-full py-6 bg-[#FFDD00] text-black font-bold rounded-2xl hover:bg-[#FFEA00] transition-colors text-xl"
                            >
                                ☕ Buy Me a Coffee
                            </a>
                        </MagneticButton>

                        {/* Crypto Options */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                            <h3 className="text-xl font-bold mb-6">Crypto</h3>

                            <div className="space-y-4">
                                {/* ETH */}
                                <div
                                    onClick={() => copyToClipboard("0x123...abc", "ETH")}
                                    className="flex items-center justify-between p-4 bg-black/30 rounded-xl cursor-pointer hover:bg-black/50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center">Ξ</div>
                                        <div className="text-left">
                                            <div className="text-sm font-bold text-slate-300">Ethereum</div>
                                            <div className="text-xs text-slate-500 font-mono">0x123...abc</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {copied === "ETH" ? "COPIED!" : "COPY"}
                                    </div>
                                </div>

                                {/* BTC */}
                                <div
                                    onClick={() => copyToClipboard("bc1q...", "BTC")}
                                    className="flex items-center justify-between p-4 bg-black/30 rounded-xl cursor-pointer hover:bg-black/50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-500 flex items-center justify-center">₿</div>
                                        <div className="text-left">
                                            <div className="text-sm font-bold text-slate-300">Bitcoin</div>
                                            <div className="text-xs text-slate-500 font-mono">bc1q...</div>
                                        </div>
                                    </div>
                                    <div className="text-xs font-bold text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {copied === "BTC" ? "COPIED!" : "COPY"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
