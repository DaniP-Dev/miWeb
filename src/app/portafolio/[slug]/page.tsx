import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
	portfolio,
	getProjectBySlug,
	type PortfolioItem,
} from "../../../lib/portafolio";

// Generación estática de todas las páginas de portafolio
export async function generateStaticParams() {
	return portfolio.map((p) => ({ slug: p.slug }));
}

// SEO dinámico por proyecto
export function generateMetadata({ params }: { params: { slug: string } }) {
	const project = getProjectBySlug(params.slug);
	if (!project) return {};
	const ogImage = project.images?.[0];
	return {
		title: `${project.title} | Portafolio` 
			+ (project.year ? ` ${project.year}` : ""),
		description: project.summary,
		alternates: { canonical: `/portafolio/${project.slug}` },
		openGraph: {
			title: project.title,
			description: project.summary,
			url: `/portafolio/${project.slug}`,
			type: "article",
			images: ogImage ? [{ url: ogImage }] : [],
		},
	} as const;
}

function PortfolioTemplate({ project }: { project: PortfolioItem }) {
	return (
		<main className="container mx-auto px-4 py-12">
			<header className="mb-8">
				<h1 className="text-3xl font-bold mb-2">{project.title}</h1>
				<p className="text-zinc-600 dark:text-zinc-300">{project.summary}</p>
				<div className="mt-3 flex flex-wrap gap-3 text-sm text-zinc-500">
					{project.year && <span>Año: {project.year}</span>}
					{project.client && <span>Cliente: {project.client}</span>}
					{project.role && <span>Rol: {project.role}</span>}
				</div>
			</header>

			{project.images && project.images.length > 0 && (
				<div className="mb-8 grid gap-4 sm:grid-cols-2">
					{project.images.map((src) => (
						<div key={src} className="overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800">
							<Image
								src={src}
								alt={project.title}
								width={1200}
								height={675}
								className="h-auto w-full object-cover"
							/>
						</div>
					))}
				</div>
			)}

			{project.description && (
				<section className="prose prose-zinc dark:prose-invert max-w-none">
					<p>{project.description}</p>
				</section>
			)}

			{(project.tags?.length || project.tech?.length) && (
				<section className="mt-8 grid gap-6 sm:grid-cols-2">
					{project.tags && project.tags.length > 0 && (
						<div>
							<h2 className="text-lg font-semibold mb-2">Aspectos</h2>
							<ul className="flex flex-wrap gap-2">
								{project.tags.map((t) => (
									<li
										key={t}
										className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
									>
										{t}
									</li>
								))}
							</ul>
						</div>
					)}
					{project.tech && project.tech.length > 0 && (
						<div>
							<h2 className="text-lg font-semibold mb-2">Tecnologías</h2>
							<ul className="flex flex-wrap gap-2">
								{project.tech.map((t) => (
									<li
										key={t}
										className="rounded-full bg-blue-50 px-3 py-1 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
									>
										{t}
									</li>
								))}
							</ul>
						</div>
					)}
				</section>
			)}

			{project.links && project.links.length > 0 && (
				<section className="mt-10">
					<h2 className="text-lg font-semibold mb-3">Enlaces</h2>
					<ul className="flex flex-wrap gap-3">
						{project.links.map((l) => (
							<li key={l.href}>
								<Link
									href={l.href}
									className="inline-flex items-center gap-1 rounded border border-zinc-300 px-3 py-1 text-sm hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-800"
								>
									{l.label}
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="h-4 w-4"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6 13.5-13.5m0 0V8.25m0-5.25H15.75"
										/>
									</svg>
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</main>
	);
}

export default function Page({ params }: { params: { slug: string } }) {
	const project = getProjectBySlug(params.slug);
	if (!project) return notFound();
	return <PortfolioTemplate project={project} />;
}

