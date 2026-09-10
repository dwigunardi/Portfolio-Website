export type HighlightCard = {
    title: string;
    desc: string;
    video: string;
    poster: string;
};

export const HIGHLIGHT_CARDS: HighlightCard[] = [
    {
        title: "Development",
        desc: "React, Next.js, Vue",
        video: "/assets/highlights/development.mp4",
        poster: "/assets/highlights/development-poster.webp",
    },
    {
        title: "API Integration",
        desc: "REST, GraphQL",
        video: "/assets/highlights/api-integration.mp4",
        poster: "/assets/highlights/api-integration-poster.webp",
    },
    {
        title: "Version Control",
        desc: "Git, GitHub Actions",
        video: "/assets/highlights/version-control.mp4",
        poster: "/assets/highlights/version-control-poster.webp",
    },
    {
        title: "CI/CD",
        desc: "Docker, Deployment",
        video: "/assets/highlights/cicd.mp4",
        poster: "/assets/highlights/cicd-poster.webp",
    },
];