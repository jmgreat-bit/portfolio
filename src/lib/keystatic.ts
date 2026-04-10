import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

const reader = createReader(process.cwd(), keystaticConfig);

// Projects
export async function getProjects() {
    const projects = await reader.collections.projects.all();
    return projects.map((project) => ({
        slug: project.slug,
        ...project.entry,
        status: (project.entry.status as "live" | "building" | "idea") || "building",
        title: typeof project.entry.title === 'string' ? { name: project.entry.title } : project.entry.title,
        tags: (project.entry.tags || []) as readonly string[],
        link: project.entry.link || undefined,
        image: project.entry.image || undefined,
        videoUrl: project.entry.videoUrl || undefined,
        gallery: project.entry.gallery || [],
    }));
}

// Insights (Blog/Ideas)
export async function getInsights() {
    const insights = await reader.collections.insights.all();
    return insights.map((insight) => ({
        slug: insight.slug,
        title: typeof insight.entry.title === 'string' ? { name: insight.entry.title } : insight.entry.title,
        date: insight.entry.date,
        tags: (insight.entry.tags || []) as readonly string[],
        featuredImage: insight.entry.featuredImage || undefined,
        videoUrl: insight.entry.videoUrl || undefined,
        // Note: content is excluded here as it's a function that can't be passed to client components
    }));
}


export async function getInsight(slug: string) {
    const insight = await reader.collections.insights.read(slug);
    if (!insight) return null;
    return {
        ...insight,
        tags: (insight.tags || []) as readonly string[],
    };
}

// Public Progress
export async function getPublicProgress() {
    const updates = await reader.collections.progress.all();
    return updates.map((update) => ({
        slug: update.slug,
        title: typeof update.entry.title === 'string' ? { name: update.entry.title } : update.entry.title,
        date: update.entry.date,
        status: update.entry.status || 'in-progress',
        image: update.entry.image || undefined,
        videoUrl: update.entry.videoUrl || undefined,
        // Note: content is excluded here as it's a function that can't be passed to client components
    }));
}


// Homepage
export async function getHomepageData() {
    const homepage = await reader.singletons.homepage.read();
    if (!homepage) {
        return {
            tagline: 'APPLIED PHYSICS STUDENT & AI BUILDER',
            headline: 'Building intelligent systems, AI-driven tools, and infrastructure for society.',
            subheadline: 'I combine physics-based logic with rapid AI prototyping to explore the intersection of technology and human inclusion. From writing my first line of code to training LLMs and competing globally in under two years.',
            available: true,
            ctaButtons: [
                { label: 'Explore Projects', link: '/work', style: 'primary' },
                { label: 'Ideas & Insights', link: '/ideas', style: 'secondary' },
                { label: 'Support My Work', link: '/support', style: 'secondary' },
            ],
            stats: [
                { value: '12', label: 'Active prototypes' },
                { value: '08', label: 'Collabs this year' },
                { value: '90+', label: 'Stories captured' },
            ],
            explorationsTagline: 'Ideas in Motion',
            explorationsHeadline: 'Active Endeavors & R&D',
            explorationsDescription: 'A sampling of live projects, R&D experiments, and cinematic web builds.',
        };
    }
    return homepage;
}

// About
export async function getAboutData() {
    const about = await reader.singletons.about.read();
    if (!about) {
        return {
            pageTitle: 'The Story',
            story: null,
            skills: [] as readonly string[],
            profileImage: undefined,
            timeline: [
                { year: 'August 2024', title: 'Zero to Global', description: 'Wrote my first line of code. Within 60 days, learned Python, automation, and API integration to build a multi-signal news platform from scratch.' },
                { year: 'Late 2025', title: 'Deep Learning & AI', description: 'Transitioned into AI architecture, competing in a Google DeepMind hackathon to build custom LLM trainers and stress-test reasoning models.' },
                { year: 'Early 2026', title: 'Global Competitions', description: 'Handled complex, unstructured data in the Kaggle Akkadian Translation challenge and built an AI-driven orbital analyzer for a global Space Copilot challenge.' },
                { year: 'Present', title: 'The Physics of Trust', description: 'Merging my Applied Physics studies with software to build infrastructure for financial inclusion and critical societal systems.' },
            ] as const,
        };
    }
    return about;
}

// Site Settings
export async function getSiteSettings() {
    const settings = await reader.singletons.siteSettings.read();
    if (!settings) {
        return {
            siteTitle: 'The Great Web',
            siteDescription: 'Creative Technologist & Director',
            logo: undefined,
            socialLinks: {
                twitter: undefined,
                github: undefined,
                linkedin: undefined,
                youtube: undefined,
                instagram: undefined,
            },
        };
    }
    return settings;
}

// Contact
export async function getContactData() {
    const contact = await reader.singletons.contact.read();
    if (!contact) {
        return {
            headline: 'Get in Touch',
            description: 'Have a project in mind? Let\'s discuss.',
            email: '',
            calendlyUrl: undefined,
        };
    }
    return contact;
}
