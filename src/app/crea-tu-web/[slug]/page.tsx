import Image from "next/image";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, type Service } from "../../../lib/services";

// Pre-render estático de todas las páginas de servicio
export async function generateStaticParams() {
	return services.map((s) => ({ slug: s.slug }));
}

// SEO dinámico por servicio
export function generateMetadata({ params }: { params: { slug: string } }) {
	const s = getServiceBySlug(params.slug);
	if (!s) return {};
	return {
		title: `${s.title} | Crea tu web`,
		description: s.summary,
		alternates: { canonical: `/crea-tu-web/${s.slug}` },
		openGraph: {
			title: s.title,
			description: s.summary,
			images: s.heroImage ? [{ url: s.heroImage }] : [],
			url: `/crea-tu-web/${s.slug}`,
			type: "article",
		},
	} as const;
}

function ServiceTemplate({ service }: { service: Service }) {
	return (
		<main className="container mx-auto px-4 py-12">
			<header className="mb-8">
				<h1 className="text-3xl font-bold mb-2">{service.title}</h1>
				<p className="text-gray-600">{service.summary}</p>
			</header>

			{service.heroImage && (
				<div className="mb-10">
					<Image
						src={service.heroImage}
						alt={service.title}
						width={1280}
						height={640}
						className="rounded-lg object-cover w-full h-auto"
						priority
					/>
				</div>
			)}

			{service.description && (
				<p className="mb-6 text-lg leading-relaxed">{service.description}</p>
			)}

			<section className="mb-10">
				<h2 className="text-xl font-semibold mb-3">Características</h2>
				<ul className="list-disc pl-6 space-y-2">
					{service.features.map((f) => (
						<li key={f}>{f}</li>
					))}
				</ul>
			</section>

			{service.cta && (
				<a
					href={service.cta.href}
					className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
				>
					{service.cta.label}
				</a>
			)}
		</main>
	);
}

export default function Page({ params }: { params: { slug: string } }) {
	const service = getServiceBySlug(params.slug);
	if (!service) return notFound();
	return <ServiceTemplate service={service} />;
}

