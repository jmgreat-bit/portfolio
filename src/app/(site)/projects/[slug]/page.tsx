import { getProject } from "@/lib/keystatic";
import { notFound } from "next/navigation";
import Image from "next/image";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Link from "next/link";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";

export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = await getProject(params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="relative min-h-screen flex flex-col text-white overflow-hidden pb-32">
            <WebGLBackground />
            <Header />

            <div className="flex-grow pt-32 px-6 max-w-4xl mx-auto w-full">
                <Link href="/work" className="inline-block mb-8 text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-[0.2em] text-xs font-bold">
                    ← Back to Projects
                </Link>

                <header className="mb-16">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs font-bold uppercase tracking-wider">
                            {project.status}
                        </span>
                        <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs font-medium uppercase tracking-wider">
                            {project.type}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
                        {project.title.name}
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-3xl">
                        {project.description}
                    </p>

                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-slate-200 transition-colors"
                        >
                            View Live Project →
                        </a>
                    )}
                </header>

                {project.image && (
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden border border-white/10 mb-16 shadow-2xl">
                        <Image
                            src={project.image}
                            alt={project.title.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-12">
                    <article className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight prose-a:text-cyan-400 hover:prose-a:text-cyan-300 prose-img:rounded-2xl prose-img:border prose-img:border-white/10">
                        {project.content ? (
                            <DocumentRenderer document={await project.content()} />
                        ) : (
                            <p className="text-slate-400 italic">Detailed case study coming soon.</p>
                        )}
                    </article>

                    <aside className="space-y-8">
                        {project.tags && project.tags.length > 0 && (
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">Technologies</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </aside>
                </div>
            </div>
        </main>
    );
}
