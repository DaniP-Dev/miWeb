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
	
	// --- Servicios para webs existentes ---
	{
		slug: "mantenimiento-mensual",
		title: "Plan Mantenimiento Mensual",
		summary: "Mantén tu web estable, actualizada y sin errores.",
		description: "Para quienes quieren mantener su web estable, actualizada y sin errores. Incluye actualización de plugins y CMS, revisión y corrección de errores menores, copias de seguridad mensuales, revisión básica de seguridad y soporte por correo o WhatsApp. Beneficio especial: micro ajustes gratuitos cada mes y descuento en renovaciones.",
		features: [
			"Actualización de plugins y CMS",
			"Revisión y corrección de errores menores",
			"Copias de seguridad mensuales",
			"Revisión básica de seguridad",
			"Soporte por correo o WhatsApp",
			"Micro ajustes gratuitos cada mes",
			"Descuento en trabajos de renovación"
		],
		cta: { label: "Solicitar mantenimiento", href: "/contacto?servicio=mantenimiento-mensual" },
		seoTitle: "Mantenimiento web mensual | DaniDev",
		seoDescription: "Plan de mantenimiento mensual para tu web: actualizaciones, soporte, copias de seguridad y micro ajustes incluidos.",
		seoKeywords: ["mantenimiento web", "actualización web", "soporte web", "copias de seguridad", "micro ajustes"],
		schemaType: "Service",
	},
	{
		slug: "renovacion-optimiza",
		title: "Plan Renovación y Optimización",
		summary: "Moderniza el diseño y mejora el rendimiento de tu web.",
		description: "Para quienes desean modernizar el diseño y mejorar el rendimiento sin rehacer todo el sitio. Incluye todo lo del Plan Mantenimiento, cambio de front, ediciones con Elementor o CSS, optimización de carga y velocidad, revisión básica de SEO.",
		features: [
			"Todo lo del Plan Mantenimiento",
			"Cambio de front (mejoras visuales y de estructura)",
			"Ediciones con Elementor o ajustes en CSS",
			"Optimización de carga y velocidad",
			"Revisión básica de SEO"
		],
		cta: { label: "Solicitar renovación", href: "/contacto?servicio=renovacion-optimiza" },
		seoTitle: "Renovación y optimización web | DaniDev",
		seoDescription: "Moderniza el diseño y mejora el rendimiento de tu web sin rehacerla. Incluye optimización, SEO y mejoras visuales.",
		seoKeywords: ["renovación web", "optimización web", "mejorar diseño web", "mejorar velocidad web"],
		schemaType: "Service",
	},
	{
		slug: "micro-ajustes",
		title: "Plan Micro Ajustes",
		summary: "Modificaciones puntuales y rápidas en tu web.",
		description: "Para quienes solo necesitan modificaciones puntuales o rápidas, sin mantenimiento continuo. Cambios de color, tamaño, fuente, ajustes en botones, menús, íconos, sliders, alineaciones, espaciados o pequeñas ediciones de diseño.",
		features: [
			"Cambios de color, tamaño o fuente",
			"Ajustes en botones, menús o íconos",
			"Modificación de dropdowns o sliders",
			"Corrección de alineaciones o espaciados",
			"Ediciones pequeñas en diseño o estructura"
		],
		cta: { label: "Solicitar micro ajuste", href: "/contacto?servicio=micro-ajustes" },
		seoTitle: "Micro ajustes web rápidos | DaniDev",
		seoDescription: "Realiza modificaciones puntuales y rápidas en tu web sin mantenimiento continuo. Ideal para retoques y pequeños cambios.",
		seoKeywords: ["micro ajustes web", "cambios rápidos web", "modificaciones web", "retoques web"],
		schemaType: "Service",
	},
	// --- Servicios para nuevos sitios web ---
	{
		slug: "presencia-web",
		title: "Plan Presencia Web",
		summary: "Tu primera página en línea, fácil y profesional.",
		description: "Ideal para emprendedores o negocios pequeños que necesitan tener su primera página en línea. Incluye landing page, diseño adaptable, botones de redes sociales y WhatsApp, formulario de contacto, configuración de dominio y hosting básico.",
		features: [
			"Página tipo landing (inicio, información y contacto)",
			"Diseño adaptable a celulares y tablets",
			"Botones de redes sociales y WhatsApp",
			"Formulario de contacto funcional",
			"Configuración de dominio y hosting básico"
		],
		cta: { label: "Solicitar presencia web", href: "/contacto?servicio=presencia-web" },
		seoTitle: "Plan presencia web para emprendedores | DaniDev",
		seoDescription: "Tu primera página en línea con diseño profesional, contacto y redes sociales. Ideal para emprender y ganar visibilidad.",
		seoKeywords: ["presencia web", "landing page", "web para emprendedores", "web básica"],
		schemaType: "Service",
	},
	{
		slug: "plan-profesional",
		title: "Plan Profesional",
		summary: "Web completa, moderna y optimizada para negocios.",
		description: "Pensado para negocios que quieren una web completa, con varias secciones y una imagen más sólida. Hasta 5 secciones, diseño personalizado, conexión con redes sociales y Google Maps, optimización SEO básica, dominio y hosting por 1 año, blog incluido.",
		features: [
			"Hasta 5 secciones (Inicio, Servicios, Blog, Nosotros, Contacto)",
			"Diseño personalizado con enfoque en marca y estilo",
			"Conexión con redes sociales y Google Maps",
			"Optimización SEO básica",
			"Dominio y hosting por 1 año",
			"Implementación de blog"
		],
		cta: { label: "Solicitar web profesional", href: "/contacto?servicio=plan-profesional" },
		seoTitle: "Plan web profesional para empresas | DaniDev",
		seoDescription: "Web moderna y optimizada para empresas: varias secciones, blog, SEO, dominio y hosting incluidos.",
		seoKeywords: ["web profesional", "web para empresas", "web moderna", "web optimizada", "blog corporativo"],
		schemaType: "Service",
	},

];

export function getServiceBySlug(slug: string) {
	return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs() {
	return services.map((s) => s.slug);
}

