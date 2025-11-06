import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "../../../lib/services";
import ServiceTemplate from "./service-template";

type Props = {
	params: Promise<{ slug: string }>;
};

export async function generateMetadata(
	{ params }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const { slug } = await params;
	const service = getServiceBySlug(slug);

	if (!service) {
		return {
			title: "Servicio no encontrado",
		};
	}

	return {
		title: service.seoTitle || service.title,
		description: service.seoDescription || service.summary,
		keywords: service.seoKeywords || [],
		openGraph: {
			title: service.seoTitle || service.title,
			description: service.seoDescription || service.summary,
			type: "website",
			images: service.heroImage ? [{ url: service.heroImage }] : [],
		},
	};
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const service = getServiceBySlug(slug);

	if (!service) {
		notFound();
	}

	return <ServiceTemplate service={service} />;
}

