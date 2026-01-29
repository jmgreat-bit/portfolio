import { getInsights } from "@/lib/keystatic";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import IdeasClient from "@/components/IdeasClient";

export default async function IdeasPage() {
    const insights = await getInsights();

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <div className="fixed inset-0 z-[-1] bg-slate-950" />
            <WebGLBackground />
            <Header />
            <IdeasClient insights={insights} />
        </main>
    );
}
