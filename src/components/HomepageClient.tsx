"use client";

import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import Image from "next/image";

interface HomepageData {
    readonly tagline: string;
    readonly headline: string;
    readonly subheadline: string;
    readonly available: boolean;
    readonly ctaButtons: readonly { readonly label: string; readonly link: string; readonly style: string }[];
    readonly stats: readonly { readonly value: string; readonly label: string }[];
    readonly explorationsTagline: string;
    readonly explorationsHeadline: string;
    readonly explorationsDescription: string;
}

interface Project {
    readonly slug: string;
    readonly title: { readonly name: string };
    readonly description?: string | null;
    readonly image?: string | null;
    readonly status: string;
}

interface HomepageClientProps {
    homepageData: HomepageData;
    recentProjects: Project[];
}

export default function HomepageClient({ homepageData, recentProjects }: HomepageClientProps) {
    return (
        <div className="flex-grow flex flex-col px-4 sm:px-6 pt-24 md:pt-48 pb-20 max-w-[1400px] mx-auto w-full z-10">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-start">

                {/* Left Column: Headline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase mb-6">
                        {homepageData.tagline}
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold leading-[1.15] mb-6 md:mb-8 tracking-tight">
                        {homepageData.headline}
                    </h1>
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-xl leading-relaxed max-w-2xl mb-8 md:mb-10">
                        {homepageData.subheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start">
                        {homepageData.ctaButtons?.map((button, index) => (
                            <MagneticButton key={index}>
                                <Link
                                    href={button.link}
                                    className={
                                        button.style === 'primary'
                                            ? "inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-bold text-white shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] transition-shadow"
                                            : "inline-flex justify-center items-center px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border border-white/10 rounded-full font-bold hover:bg-white/10 transition-colors"
                                    }
                                >
                                    {button.label}
                                </Link>
                            </MagneticButton>
                        ))}
                    </div>
                </motion.div>

                {/* Right Column: Signal Board */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="flex justify-center lg:justify-end"
                >
                    <div className="w-full max-w-md bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-5 sm:p-8 shadow-2xl">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">
                            Signal Board
                        </div>

                        <div className="space-y-6 sm:space-y-8">
                            {homepageData.stats?.map((stat, index) => (
                                <div key={index}>
                                    <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-slate-400 text-[11px] sm:text-xs md:text-sm">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Decorative elements */}
                        <div className="mt-12 h-32 bg-gradient-to-t from-cyan-500/5 to-transparent rounded-xl border border-white/5 relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Core Disciplines Section (Intelligence & Innovation) */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-16 md:mt-32 relative"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 blur-3xl -z-10 rounded-[100px]"></div>
                
                <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
                    <div className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                        Cognitive Domains
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 tracking-tight">Beyond Traditional Engineering</h2>
                    <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                        This platform isn't just a portfolio; it's a living archive of my evolving intelligence. By merging deep research and data analytics with creative innovation, I build systems that don't just work—they pioneer new frontiers.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        {
                            title: "Deep Research",
                            description: "Investigating emerging technologies and theoretical frameworks to stay ahead of the curve, ensuring every project is backed by profound understanding.",
                            icon: (
                                <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            ),
                            colorClass: "hover:border-cyan-500/50 hover:bg-cyan-500/5",
                        },
                        {
                            title: "Advanced Analytics",
                            description: "Transforming raw noise into actionable intelligence. Leveraging complex data to uncover hidden patterns and drive precision decision-making.",
                            icon: (
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                            ),
                            colorClass: "hover:border-blue-500/50 hover:bg-blue-500/5",
                        },
                        {
                            title: "Creative Innovation",
                            description: "Bridging the gap between raw logic and human experience. Crafting highly aesthetic, intuitive, and dynamic digital environments.",
                            icon: (
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            ),
                            colorClass: "hover:border-purple-500/50 hover:bg-purple-500/5",
                        }
                    ].map((domain, i) => (
                        <div key={i} className={`group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 ${domain.colorClass}`}>
                            <div className="w-16 h-16 rounded-2xl bg-black/40 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                {domain.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-white">{domain.title}</h3>
                            <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-300 transition-colors">
                                {domain.description}
                            </p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* Bottom Section: Recent Explorations */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="mt-32"
            >
                <div className="text-cyan-400 font-bold tracking-[0.2em] text-xs uppercase mb-4">
                    {homepageData.explorationsTagline}
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-4">{homepageData.explorationsHeadline}</h2>
                <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-12">{homepageData.explorationsDescription}</p>

                {/* Recent Projects Grid */}
                {recentProjects.length > 0 && (
                    <div className="grid md:grid-cols-3 gap-6">
                        {recentProjects.map((project) => (
                            <Link
                                key={project.slug}
                                href={`/projects/${project.slug}`}
                                className="group block p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
                            >
                                {project.image && (
                                    <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
                                        <Image
                                            src={project.image}
                                            alt={project.title.name}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                )}
                                <h3 className="font-bold text-base sm:text-lg mb-2 group-hover:text-cyan-400 transition-colors">
                                    {project.title.name}
                                </h3>
                                {project.description && (
                                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2">{project.description}</p>
                                )}
                            </Link>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    );
}
