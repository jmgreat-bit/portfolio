"use client";

import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import MagneticButton from "@/components/ui/MagneticButton";

type ContactPayload = {
    name: string;
    email: string;
    message: string;
};

export default function ContactPage() {
    const { register, handleSubmit, reset, formState: { isSubmitting, isSubmitSuccessful } } = useForm<ContactPayload>();

    const onSubmit = async (data: ContactPayload) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form Submitted:", data);
        reset();
    };

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />

            <div className="flex-grow flex items-center justify-center px-4 sm:px-6 pt-24 md:pt-20 pb-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Let's Build the Future</h1>
                    <p className="text-slate-400 text-sm sm:text-base mb-6 md:mb-8">Have a project in mind? I'm ready to help.</p>

                    {isSubmitSuccessful ? (
                        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-200 text-center">
                            Message sent successfully! I'll be in touch soon.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                <input
                                    {...register("name", { required: true })}
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                <textarea
                                    {...register("message", { required: true })}
                                    rows={4}
                                    className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <MagneticButton className="w-full">
                                <div className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-shadow">
                                    {isSubmitting ? "Sending..." : "Send Message"}
                                </div>
                            </MagneticButton>
                        </form>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
