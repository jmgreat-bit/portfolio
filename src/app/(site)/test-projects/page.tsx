import { getProjects } from "@/lib/keystatic";

export default async function TestPage() {
    const projects = await getProjects();

    return (
        <div className="p-8 text-white">
            <h1 className="text-4xl mb-8">Test Page - Projects Data</h1>
            <p className="mb-4">Projects count: {projects.length}</p>

            <div className="space-y-4">
                {projects.map((project, i) => (
                    <div key={i} className="border border-white p-4 rounded">
                        <h2 className="text-2xl font-bold">{project.title}</h2>
                        <p className="text-sm text-gray-400">Status: {project.status}</p>
                        <p className="text-sm text-gray-400">Type: {project.type}</p>
                        <p className="mt-2">{project.description}</p>
                        <div className="flex gap-2 mt-2">
                            {project.tags.map((tag, j) => (
                                <span key={j} className="px-2 py-1 bg-blue-500 rounded text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
