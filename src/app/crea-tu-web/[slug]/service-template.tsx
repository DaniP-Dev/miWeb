"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { type Service } from "../../../lib/services";

export default function ServiceTemplate({ service }: { service: Service }) {
	return (
		<main className="w-full">
			{/* Hero Section con imagen */}
			<section className="relative h-80 sm:h-64 xs:h-56 w-full overflow-hidden">
				{service.heroImage && (
					<Image
						src={service.heroImage}
						alt={service.title}
						fill
						className="object-cover"
						priority
					/>
				)}
				<div className="absolute inset-0 bg-black/40" />
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="absolute inset-0 flex flex-col items-center justify-center text-center px-3 sm:px-4"
				>
					<h1 className="text-3xl sm:text-2xl xs:text-xl font-bold text-white drop-shadow-lg mb-2">
						{service.title}
					</h1>
					<p className="text-base sm:text-sm xs:text-xs text-gray-100 drop-shadow-md max-w-2xl">
						{service.summary}
					</p>
				</motion.div>
			</section>

			{/* Contenido Principal */}
			<div className="max-w-5xl mx-auto px-3 sm:px-4 py-12 sm:py-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					{/* Columna izquierda - Descripción */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="lg:col-span-2"
					>
						{service.description && (
							<div className="mb-8 sm:mb-10">
								<h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-light mb-3 sm:mb-4">Descripción</h2>
								<p className="text-base sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
									{service.description}
								</p>
							</div>
						)}

						{/* Características */}
						<section className="mb-8 sm:mb-10">
							<h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-light mb-4 sm:mb-6">
								Características principales
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
								{service.features.map((f, idx) => (
									<motion.div
										key={f}
										initial={{ opacity: 0, x: -10 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{ duration: 0.4, delay: idx * 0.05 }}
										viewport={{ once: true }}
										className="flex items-start gap-2 sm:gap-3 p-3 sm:p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-600"
									>
										<span className="text-blue-600 font-bold text-lg flex-shrink-0">✓</span>
										<span className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{f}</span>
									</motion.div>
								))}
							</div>
						</section>
					</motion.div>

					{/* Columna derecha - Card resumen */}
					<motion.aside
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
						className="lg:col-span-1"
					>
						<div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/20 p-5 sm:p-8 rounded-2xl shadow-lg lg:sticky lg:top-20">
							<h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-light mb-4 sm:mb-6">
								Resumen del servicio
							</h3>

							{/* Resumen rápido */}
							<div className="mb-4 sm:mb-6 space-y-3">
								<div className="pb-2 sm:pb-3 border-b border-blue-200 dark:border-blue-700">
									<p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-1">
										Descripción rápida
									</p>
									<p className="text-gray-900 dark:text-light text-xs sm:text-sm">
										{service.summary}
									</p>
								</div>
								<div>
									<p className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase mb-2">
										Incluye
									</p>
									<p className="text-gray-900 dark:text-light text-sm">
										{service.features.length} características principales
									</p>
								</div>
							</div>

							{/* CTA */}
							{service.cta && (
								<motion.a
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									href={service.cta.href}
									className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-3 sm:px-4 rounded-lg transition-colors mb-3 sm:mb-4 text-sm sm:text-base"
								>
									{service.cta.label} →
								</motion.a>
							)}

							<Link
								href="/crea-tu-web"
								className="w-full block text-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold py-2 px-3 border-2 border-blue-200 dark:border-blue-700 rounded-lg transition-colors text-sm sm:text-base"
							>
								Volver a servicios
							</Link>
						</div>
					</motion.aside>
				</div>
			</div>

			{/* Sección CTA final */}
			<section className="bg-gradient-to-r from-blue-600 to-blue-800 py-12 sm:py-16 mt-12 sm:mt-20">
				<div className="max-w-4xl mx-auto px-3 sm:px-4 text-center">
					<h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
						¿Te interesa este servicio?
					</h2>
					<p className="text-blue-100 text-sm sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto">
						Contacta con nosotros para obtener más información y un presupuesto personalizado
					</p>
					<Link
						href="/contact"
						className="inline-block bg-white text-blue-600 font-bold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base"
					>
						Solicitar información
					</Link>
				</div>
			</section>
		</main>
	);
}
