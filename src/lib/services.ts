export type Service = {
	slug: string;
	title: string;
	summary: string;
	description?: string;
	features: string[];
	heroImage?: string; // Ruta dentro de /public
	cta?: { label: string; href: string };
	seoTitle?: string;
	seoDescription?: string;
	seoKeywords?: string[];
	schemaType?: string; // Ej: "Service"
};

export const services: Service[] = [
	{
		slug: "diseno-web",
		title: "Diseño Web",
		summary: "Sitios rápidos, modernos y accesibles.",
		description:
			"Creamos experiencias digitales enfocadas en conversión, SEO y performance.",
		features: ["UI responsiva", "Optimización Core Web Vitals", "SEO on-page"],
		// heroImage: "/images/services/diseno-web.jpg", // opcional si agregas la imagen
		cta: { label: "Cotizar", href: "/contacto?servicio=diseno-web" },
		seoTitle: "Diseño Web profesional y optimizado | DaniDev",
		seoDescription: "Servicio de diseño web moderno, rápido y optimizado para SEO y conversión. Mejora tu presencia digital con sitios accesibles y de alto rendimiento.",
		seoKeywords: ["diseño web", "sitios web", "SEO", "performance", "accesibilidad"],
		schemaType: "Service",
	},
	{
		slug: "tienda-online",
		title: "Tienda Online",
		summary: "E-commerce escalable con pasarelas de pago.",
		features: ["Carrito y checkout", "Admin de productos", "Integraciones"],
		seoTitle: "Tienda Online a medida | E-commerce escalable",
		seoDescription: "Desarrollo de tiendas online con carrito, checkout seguro y administración de productos. Soluciones e-commerce escalables y optimizadas.",
		seoKeywords: ["e-commerce", "tienda online", "carrito de compras", "checkout", "integraciones"],
		schemaType: "Service",
	},
	{
		slug: "seo",
		title: "SEO",
		summary: "Mejora tu visibilidad orgánica.",
		features: ["Auditoría técnica", "Keyword research", "Link building"],
		seoTitle: "SEO para tu web | Posicionamiento orgánico",
		seoDescription: "Servicio de SEO para mejorar el posicionamiento orgánico de tu web. Auditoría técnica, investigación de palabras clave y link building.",
		seoKeywords: ["SEO", "posicionamiento web", "palabras clave", "link building", "auditoría SEO"],
		schemaType: "Service",
	},
];

export function getServiceBySlug(slug: string) {
	return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
	return services.map((s) => s.slug);
}

