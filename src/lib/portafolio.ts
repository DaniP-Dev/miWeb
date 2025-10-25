export type PortfolioItem = {
    slug: string;
    title: string;
    summary: string;
    description?: string;
    tags?: string[]; // aspectos destacables
    tech?: string[]; // stack tecnológico
    images?: string[]; // rutas dentro de /public
    year?: number;
    client?: string;
    role?: string;
    links?: { label: string; href: string }[]; // demo, repo, case study, etc.
    seoTitle?: string;
    seoDescription?: string;
    seoKeywords?: string[];
    schemaType?: string; // Ej: "CreativeWork" o "Project"
};

export const portfolio: PortfolioItem[] = [
    {
        slug: "landing-producto-saas",
        title: "Landing para SaaS de productividad",
        summary: "Landing page optimizada para conversión y captación de leads.",
        description:
            "Desarrollo de landing responsive con foco en performance, pruebas A/B y optimización para formularios de contacto. Incluye integración con CRM y seguimiento de eventos.",
        tags: ["Landing", "Conversion rate", "A/B testing"],
        tech: ["TypeScript", "SvelteKit", "Vite", "Node.js"],
        images: ["/images/portfolio/saas-landing-01.jpg"],
        year: 2024,
        client: "ProductiveCo",
        role: "Frontend & Integraciones",
        links: [
            { label: "Ver demo", href: "https://productiveco.example" },
            { label: "Caso de estudio", href: "/portfolio/landing-producto-saas/case-study" }
        ],
        seoTitle: "Landing SaaS de productividad | Caso real | DaniDev",
        seoDescription: "Landing page para SaaS enfocada en conversión, performance y captación de leads. Integración con CRM y eventos. Caso real de éxito.",
        seoKeywords: ["landing page", "SaaS", "conversión", "CRM", "A/B testing"],
        schemaType: "CreativeWork",
    },
    {
        slug: "tienda-decoracion-online",
        title: "Tienda online de decoración",
        summary: "E-commerce con catálogo dinámico y pasarela de pagos.",
        description:
            "Implementación de plataforma de comercio electrónico con gestión de productos, carrito, checkout y panel administrativo. Optimizada para SEO y rendimiento móvil.",
        tags: ["E-commerce", "SEO", "Performance"],
        tech: ["Next.js", "Stripe", "Prisma", "Postgres"],
        images: [
            "/images/portfolio/decor-shop-01.jpg",
            "/images/portfolio/decor-shop-02.jpg"
        ],
        year: 2023,
        client: "DecoraStore",
        role: "Fullstack",
        links: [{ label: "Tienda", href: "https://decorastore.example" }],
        seoTitle: "Tienda online de decoración | E-commerce moderno | DaniDev",
        seoDescription: "E-commerce de decoración con catálogo dinámico, pagos seguros y panel de administración. Optimizado para SEO y rendimiento móvil.",
        seoKeywords: ["e-commerce", "tienda online", "decoración", "SEO", "checkout"],
        schemaType: "CreativeWork",
    },
    {
        slug: "dashboard-analitica",
        title: "Dashboard de analítica para operaciones",
        summary: "Dashboard interactivo para visualización y filtrado de KPIs.",
        description:
            "Producto interno para monitoreo de métricas operativas en tiempo real, con gráficos interactivos, exportes y alertas. Arquitectura basada en microservicios y WebSockets para datos en vivo.",
        tags: ["Dashboard", "Realtime", "Visualización"],
        tech: ["React", "TypeScript", "D3", "GraphQL"],
        images: ["/images/portfolio/analytics-dashboard-01.png"],
        year: 2022,
        client: "InHouse",
        role: "Lead Frontend",
        links: [{ label: "Caso de estudio", href: "/portfolio/dashboard-analitica/case-study" }],
        seoTitle: "Dashboard analítica operaciones | Visualización KPIs | DaniDev",
        seoDescription: "Dashboard interactivo para monitoreo de KPIs en tiempo real, gráficos y alertas. Arquitectura moderna y visualización avanzada.",
        seoKeywords: ["dashboard", "KPIs", "analítica", "visualización", "microservicios"],
        schemaType: "CreativeWork",
    },
];

export function getProjectBySlug(slug: string) {
    return portfolio.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
    return portfolio.map((p) => p.slug);
}
