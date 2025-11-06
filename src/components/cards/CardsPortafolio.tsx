import Link from "next/link";
import Image from "next/image";
import type { PortfolioItem } from "../../lib/portafolio";
import { portfolio as defaultPortfolio } from "../../lib/portafolio";

type CardsPortafolioProps = {
	items?: PortfolioItem[]; // Por defecto usa todo el portafolio
	hrefBase?: string; // Base del enlace, p.ej. "/portafolio"
	title?: string; // Título opcional de sección
	className?: string;
	showSummary?: boolean;
	showImage?: boolean;
	maxTags?: number; // Número de tags a mostrar por card
};

function PortfolioCard({
	item,
	href,
	showSummary,
	showImage,
	maxTags,
}: {
	item: PortfolioItem;
	href: string;
	showSummary: boolean;
	showImage: boolean;
	maxTags: number;
}) {
	const cover = item.images?.[0];
	const tags = (item.tags ?? []).slice(0, maxTags);
		return (
			<li className="group relative overflow-hidden rounded-xl border border-zinc-200 bg-white transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
				{showImage && (
					<div className="aspect-[16/9] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
						<span className="text-zinc-400 dark:text-zinc-600 text-lg">{item.title}</span>
					</div>
				)}
				<div className="p-5">
					<h3 className="text-lg font-semibold tracking-tight">
						<Link href={href} className="after:absolute after:inset-0">
							{item.title}
						</Link>
					</h3>
					{showSummary && item.summary && (
						<p className="mt-2 line-clamp-3 text-sm text-zinc-600 dark:text-zinc-300">
							{item.summary}
						</p>
					)}

					{(tags.length > 0 || item.year) && (
						<div className="mt-4 flex flex-wrap items-center gap-2">
							{item.year && (
								<span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200">
									{item.year}
								</span>
							)}
							{tags.map((t) => (
								<span
									key={t}
									className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
								>
									{t}
								</span>
							))}
						</div>
					)}

					<div className="mt-5">
						<Link
							href={href}
							className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
							aria-label={`Ver ${item.title}`}
						>
							Ver proyecto
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

export default function CardsPortafolio({
	items = defaultPortfolio,
	hrefBase = "/portafolio",
	title,
	className = "",
	showSummary = true,
	showImage = true,
	maxTags = 3,
}: CardsPortafolioProps) {
	const list = items;
	return (
		<section className={className}>
			{title && (
				<h2 className="mb-6 text-2xl font-bold tracking-tight">{title}</h2>
			)}
			<ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
				{list.map((p) => (
					<PortfolioCard
						key={p.slug}
						item={p}
						href={`${hrefBase}/${p.slug}`}
						showSummary={showSummary}
						showImage={showImage}
						maxTags={maxTags}
					/>
				))}
			</ul>
		</section>
	);
}

