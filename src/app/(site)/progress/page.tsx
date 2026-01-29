import { getPublicProgress } from "@/lib/keystatic";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import ProgressClient from "@/components/ProgressClient";

export default async function ProgressPage() {
    const updates = await getPublicProgress();

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />
            <ProgressClient updates={updates} />
        </main>
    );
}
