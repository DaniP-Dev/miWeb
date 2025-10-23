import Link from "next/link";
import Image from "next/image";
import type { Service } from "../../lib/services";
import { services as defaultServices } from "../../lib/services";

type CardsServicesProps = {
	items?: Service[]; // Por defecto usa todos los servicios
	hrefBase?: string; // Base del enlace, p.ej. "/crea-tu-web"
	title?: string; // Título opcional de la sección
	className?: string;
	showSummary?: boolean;
	showImage?: boolean;
};

function ServiceCard({ service, href }: { service: Service; href: string }) {
	return (
		<li className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
			{service.heroImage && (
				<div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
					<Image
						src={service.heroImage}
						alt={service.title}
						width={640}
						height={360}
						className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
						priority={false}
					/>
				</div>
			)}
			<div className="p-5">
				<h3 className="text-lg font-semibold tracking-tight">
					<Link href={href} className="after:absolute after:inset-0">
						{service.title}
					</Link>
				</h3>
				{service.summary && (
					<p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
						{service.summary}
					</p>
				)}
				<div className="mt-4">
					<Link
						href={href}
						className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
						aria-label={`Ver ${service.title}`}
					>
						Ver más
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className="h-4 w-4"
						>
							<path
								fillRule="evenodd"
								d="M4.5 12a.75.75 0 0 1 .75-.75h12.19l-3.22-3.22a.75.75 0 1 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H5.25A.75.75 0 0 1 4.5 12Z"
								clipRule="evenodd"
							/>
						</svg>
					</Link>
				</div>
			</div>
		</li>
	);
}

export default function CardsServices({
	items = defaultServices,
	hrefBase = "/crea-tu-web",
	title,
	className = "",
	showSummary = true,
	showImage = true,
}: CardsServicesProps) {
	const list = items;
	return (
		<section className={className}>
			{title && (
				<h2 className="mb-6 text-2xl font-bold tracking-tight">{title}</h2>
			)}
			<ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{list.map((s) => (
					<ServiceCard
						key={s.slug}
						service={{
							...s,
							summary: showSummary ? s.summary : "",
							heroImage: showImage ? s.heroImage : undefined,
						}}
						href={`${hrefBase}/${s.slug}`}
					/>
				))}
			</ul>
		</section>
	);
}

