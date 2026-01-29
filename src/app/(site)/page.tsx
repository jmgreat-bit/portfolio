import { getHomepageData, getProjects } from "@/lib/keystatic";
import Header from "@/components/layout/Header";
import WebGLBackground from "@/components/visuals/WebGLBackground";
import HomepageClient from "@/components/HomepageClient";

export default async function Home() {
  const homepageData = await getHomepageData();
  const projects = await getProjects();

  // Get the 3 most recent projects for the explorations section
  const recentProjects = projects.slice(0, 3);

  return (
    <main className="relative min-h-screen flex flex-col text-white overflow-hidden">
      <WebGLBackground />
      <Header />
      <HomepageClient homepageData={homepageData} recentProjects={recentProjects} />
    </main>
  );
}
