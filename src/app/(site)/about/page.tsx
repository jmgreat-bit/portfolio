import { getAboutData } from "@/lib/keystatic";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import AboutClient from "@/components/AboutClient";

export default async function AboutPage() {
    const aboutData = await getAboutData();

    return (
        <main className="relative min-h-screen flex flex-col text-white">
            <WebGLBackground />
            <Header />
            <AboutClient aboutData={aboutData} />
        </main>
    );
}
