"use client";

import { motion } from "framer-motion";
import { Project } from "@/types/project";
import ProjectCard from "@/components/ui/ProjectCard";
import Link from "next/link";

type ProjectFilterProps = {
    projects: Project[];
};

const domainLabels: Record<string, string> = {
    "information-intelligence": "Information Intelligence",
    "artificial-intelligence": "Artificial Intelligence",
    "commerce-finance": "Commerce & Finance",
    "space-scientific": "Space & Scientific Computing",
    "productivity": "Productivity",
    "utilities": "Utilities",
};

export default function ProjectFilter({ projects }: ProjectFilterProps) {
    const featuredProjects = projects.filter(p => p.featured);
    const experimentalProjects = projects.filter(p => !p.featured);

    const groupedExperiments = experimentalProjects.reduce((acc, project) => {
        const domain = project.domain || "utilities";
        if (!acc[domain]) acc[domain] = [];
        acc[domain].push(project);
        return acc;
    }, {} as Record<string, Project[]>);

    return (
        <div className="space-y-24">
            {/* Featured Projects */}
            {featuredProjects.length > 0 && (
                <section>
                    <h2 className="text-sm font-bold text-cyan-400 uppercase tracking-[0.2em] mb-8 border-b border-white/10 pb-4">
                        Featured Research & Products
                    </h2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {featuredProjects.map((project) => (
                            <ProjectCard key={project.title.name} className="flex flex-col h-full bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-colors">
                                <div className="flex items-center justify-between text-sm text-white/60">
                                    <span className={`uppercase tracking-[0.2em] text-xs px-2 py-1 rounded-md border ${
                                        project.maturity === 'live' ? 'border-green-500/50 text-green-400' :
                                        project.maturity === 'production' ? 'border-blue-500/50 text-blue-400' :
                                        'border-orange-500/50 text-orange-400'
                                    }`}>
                                        {project.maturity}
                                    </span>
                                    <span className="text-xs text-slate-400">{domainLabels[project.domain] || project.domain}</span>
                                </div>
                                <div className="mt-4 flex-grow space-y-3">
                                    <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title.name}</h3>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">{project.description}</p>
                                </div>
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="mt-6 inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors font-semibold"
                                >
                                    Read Case Study <span className="ml-2">→</span>
                                </Link>
                            </ProjectCard>
                        ))}
                    </div>
                </section>
            )}

            {/* Experimental R&D grouped by Domain */}
            {Object.keys(groupedExperiments).length > 0 && (
                <section>
                    <h2 className="text-sm font-bold text-purple-400 uppercase tracking-[0.2em] mb-12 border-b border-white/10 pb-4">
                        Experimental R&D
                    </h2>
                    
                    <div className="space-y-16">
                        {Object.entries(groupedExperiments).map(([domainKey, domainProjects]) => (
                            <div key={domainKey}>
                                <h3 className="text-xl font-bold text-slate-200 mb-6 flex items-center gap-3">
                                    <div className="w-8 h-[1px] bg-white/20"></div>
                                    {domainLabels[domainKey] || domainKey}
                                </h3>
                                <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
                                    {domainProjects.map((project) => (
                                        <Link key={project.title.name} href={`/projects/${project.slug}`} className="block group">
                                            <div className="flex flex-col h-full p-6 rounded-2xl bg-white/5 border border-white/5 group-hover:border-purple-500/30 group-hover:bg-white/10 transition-all duration-300">
                                                <div className="flex items-center justify-between mb-4">
                                                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">{project.title.name}</h4>
                                                    <span className="text-[10px] uppercase tracking-wider text-slate-400 border border-slate-700 px-2 py-0.5 rounded-full">
                                                        {project.maturity}
                                                    </span>
                                                </div>
                                                <p className="text-slate-400 text-sm flex-grow">{project.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );
}
