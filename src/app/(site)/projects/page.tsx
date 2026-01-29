import { getProjects } from "@/lib/keystatic";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import ProjectFilter from "@/components/work/ProjectFilter";

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />

            <div className="flex-grow pt-32 px-6 pb-20 max-w-7xl mx-auto w-full">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Selected Works</h1>
                    <p className="text-slate-400 max-w-xl text-lg">
                        A collection of experiments, tools, and visual explorations.
                    </p>
                </div>

                <ProjectFilter projects={projects} />
            </div>
        </main>
    );
}
