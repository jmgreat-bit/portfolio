"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";

type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
    const [formState, setFormState] = useState<FormState>("idle");
    const [formData, setFormData] = useState<ContactPayload>({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("submitting");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormState("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setFormState("error");
            }
        } catch {
            setFormState("error");
        }
    };

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />

            <div className="flex-grow flex items-center justify-center px-4 sm:px-6 pt-24 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-lg bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">Let&apos;s Build the Future</h1>
                    <p className="text-slate-400 text-sm sm:text-base mb-6">Have a project in mind? I&apos;m ready to help.</p>

                    <AnimatePresence mode="wait">
                        {formState === "success" ? (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="py-10 flex flex-col items-center gap-4 text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-3xl">
                                    ✓
                                </div>
                                <p className="text-green-300 font-semibold text-lg">Message sent!</p>
                                <p className="text-slate-400 text-sm">I&apos;ll get back to you at <span className="text-cyan-400">{formData.email || "your email"}</span> soon.</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-2 text-sm text-slate-500 hover:text-white transition-colors underline underline-offset-4"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                onSubmit={onSubmit}
                                className="space-y-4"
                            >
                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/60 transition-colors placeholder:text-slate-600"
                                        placeholder="James Great"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/60 transition-colors placeholder:text-slate-600"
                                        placeholder="you@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1.5">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-cyan-500/60 transition-colors placeholder:text-slate-600 resize-none"
                                        placeholder="Tell me about your project or idea..."
                                    />
                                </div>

                                {formState === "error" && (
                                    <p className="text-red-400 text-sm text-center">Something went wrong. Try again or message me directly on Telegram.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={formState === "submitting"}
                                    className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                                >
                                    {formState === "submitting" ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : "Send Message"}
                                </button>

                                <p className="text-center text-xs text-slate-600 pt-1">
                                    Messages are stored securely in your backend.
                                </p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
}
