export type Service = {
	slug: string;
	title: string;
	summary: string;
	description?: string;
	features: string[];
	heroImage?: string; // Ruta dentro de /public
	cta?: { label: string; href: string };
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
	},
	{
		slug: "tienda-online",
		title: "Tienda Online",
		summary: "E-commerce escalable con pasarelas de pago.",
		features: ["Carrito y checkout", "Admin de productos", "Integraciones"],
	},
	{
		slug: "seo",
		title: "SEO",
		summary: "Mejora tu visibilidad orgánica.",
		features: ["Auditoría técnica", "Keyword research", "Link building"],
	},
];

export function getServiceBySlug(slug: string) {
	return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
	return services.map((s) => s.slug);
}

