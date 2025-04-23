import { ProgrammingTags } from '../types/enums';

export const projects = [
    {
        name: "garnet",
        url: "https://github.com/Maddoxx88/garnet",
        role: "co-creator and maintainer",
        description: "a truly open source key-value store built in golang. redis compatible, highly available, and super fast drop-in replacement of redis.",
        tags: [
            ProgrammingTags.Go,
        ],
    },
    {
        name: "microregex",
        url: "https://microregex.netlify.app/",
        role: "co-creator and maintainer",
        description: "open source containing highly curated catalog of regular expression patterns",
        tags: [
            ProgrammingTags.React,
            ProgrammingTags.PostgreSQL,
            ProgrammingTags.ChakraUI,
            ProgrammingTags.GraphQL
        ],
    },
    {
        name: "digital wallet payment system",
        url: "https://github.com/Maddoxx88/wallet-payment-network",
        role: "creator",
        description: "features include managing accounts, sending and requesting money, and analyzing transaction data. project created as final deliverable for CS631 (db and sys design)",
        tags: [
            ProgrammingTags.Python,
            ProgrammingTags.SQLite
        ],
    },
    {
        name: "laptop component knowledge base & QA system",
        url: "https://github.com/Maddoxx88/laptopkb-and-query",
        role: "creator",
        description: "an interactive app that classifies laptop components from images. developed a dynamic QA system leveraging a knowledge base",
        tags: [
            ProgrammingTags.Python,
            ProgrammingTags.Streamlit,
            ProgrammingTags.Flask,
            ProgrammingTags.ML
        ],
    },
    {
        name: "infinity camera for noise reduction",
        url: "https://github.com/Maddoxx88/vkpro",
        role: "co-creator",
        description: "smart camera mobile app for android which minimizes noise reduction in the post processing of a photo using renderscript api (gpu)",
        tags: [
            ProgrammingTags.Kotlin,
            ProgrammingTags.Renderscript,
            ProgrammingTags.Android
        ],
    },
    {
        name: "excalidraw libraries",
        url: "https://github.com/Maddoxx88/excalidraw-libraries",
        role: "contributor",
        description: "contributed various libraries to the repo",
        tags: [
            ProgrammingTags.React,
            ProgrammingTags.Vite,
            ProgrammingTags.GraphQL,
            ProgrammingTags.Docker,
        ],
    },
    {
        name: "cpu scheduing algos",
        url: "https://github.com/Maddoxx88/cpu-scheduling-algos",
        role: "creator",
        description: "various cpu scheduing algos visualized. used sveltekit.",
        tags: [ProgrammingTags.SvelteKit],
    },
    {
        name: "ifsc validator",
        url: "https://github.com/Maddoxx88/ifsc-validator",
        role: "creator",
        description: "mobile app to validate ifsc codes using razorpay api",
        tags: [ProgrammingTags.Flutter, ProgrammingTags.Dart, ProgrammingTags.Android, ProgrammingTags.REST],
    },
    {
        name: "wishing well",
        url: "https://wishingwell-ai.vercel.app/",
        role: "co-creator and developer",
        description: "ai gift generator",
        tags: [ProgrammingTags.NextJS, ProgrammingTags.TailwindCSS, ProgrammingTags.Vercel, ProgrammingTags.OpenAI]
    },
];
