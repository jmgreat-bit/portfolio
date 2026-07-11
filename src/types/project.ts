export type Project = {
    readonly title: { readonly name: string };
    readonly description: string;
    readonly tags: readonly string[];
    readonly link?: string;
    readonly domain: string;
    readonly maturity: string;
    readonly featured: boolean;
    readonly image?: string;
    readonly slug: string;
};
