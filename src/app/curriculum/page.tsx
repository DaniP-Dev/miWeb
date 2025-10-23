'use client';

import React from 'react';

const CurriculumPage = () => {
    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/Daniel_Perez_CV.pdf';
        link.download = 'Daniel_Perez_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-light dark:bg-dark py-12 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Botón de Descarga */}
                <div className="mb-6 flex justify-end">
                    <button
                        onClick={handleDownloadPDF}
                        className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
                    >
                        ⬇ Descargar PDF
                    </button>
                </div>

                {/* Contenedor del CV */}
                <div className="bg-white text-gray-900 rounded-lg shadow-2xl p-4 sm:p-6 md:p-8 lg:p-12">
                    
                    {/* Encabezado */}
                    <div className="mb-6 border-b-2 border-gray-300 pb-4 text-center">
                        <p className="text-xs font-semibold text-gray-600 tracking-widest">DESARROLLADOR WEB / DESARROLLADOR APP</p>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-blue-600 mt-1">DANIEL PÉREZ</h1>
                        <p className="text-xs sm:text-sm text-gray-700 mt-1">DESARROLLADOR</p>
                        
                        <div className="mt-4 flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
                            <div className="flex items-center gap-1">
                                <span>✉️</span>
                                <a href="mailto:danidevcol@gmail.com" className="text-gray-700 hover:text-blue-600 truncate">
                                    danidevcol@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-1">
                                <span>📱</span>
                                <a href="tel:+573054641743" className="text-blue-600 hover:underline">
                                    +57 3054641743
                                </a>
                            </div>
                            <div className="hidden lg:flex items-center gap-1">
                                <span>🔗</span>
                                <span className="text-gray-700">LinkedIn GitHub</span>
                            </div>
                        </div>
                    </div>

                    {/* Sobre Mí */}
                    <section className="mb-8">
                        <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-lg font-bold uppercase tracking-wide">
                            Sobre Mí
                        </h3>
                        <p className="text-justify leading-relaxed text-sm text-gray-700">
                            Mi objetivo es colaborar en el desarrollo de aplicaciones web funcionales y optimizadas, aplicando buenas prácticas de programación. 
                            También puedo crear estructuras de código claras, documentación técnica y procedimientos eficientes para mejorar el flujo de trabajo. 
                            Me emociona sumar nuevos conocimientos y experiencia a mi vida profesional y a mis compañeros de trabajo.
                        </p>
                    </section>

                    {/* Grid de 2 columnas */}
                    <div className="cv-grid">
                        {/* COLUMNA IZQUIERDA */}
                        <div className="cv-left-col">
                            {/* Formación */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Formación
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>• Desarrollo web con Next.js</p>
                                    <p>• Terminal y Línea de Comandos</p>
                                    <p>• Fundamentos Python</p>
                                    <p>• Expresiones Regulares</p>
                                    <p>• Manejo de Datos, Estructuras y Funciones</p>
                                </div>
                            </section>

                            {/* Idiomas */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Idiomas
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>• Inglés Nivel B1</p>
                                    <p>• Español Nativo</p>
                                </div>
                            </section>

                            {/* Skills */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Skills
                                </h3>
                                <div className="space-y-2 text-sm text-gray-700">
                                    <p>• React.js</p>
                                    <p>• SQL - NoSQL</p>
                                    <p>• Tailwind CSS</p>
                                    <p>• Bootstrap</p>
                                    <p>• PHP</p>
                                    <p>• WordPress</p>
                                    <p>• Laravel</p>
                                    <p>• Shopify</p>
                                    <p>• Servidores Cpanel y Vercel</p>
                                    <p>• ISO 9001</p>
                                    <p>• CodeIgniter</p>
                                </div>
                            </section>

                            {/* Hobbies */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Hobbies
                                </h3>
                                <p className="text-sm text-gray-700">
                                    Jugar Baloncesto y conocer personas nuevas
                                </p>
                            </section>
                        </div>

                        {/* COLUMNA DERECHA */}
                        <div className="cv-right-col">
                            {/* Educación */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Educación
                                </h3>
                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-sm">Universidad de Barranquilla</h4>
                                    <p className="text-blue-600 font-medium text-sm">Mantenimiento de sistemas informáticos</p>
                                    <p className="text-gray-600 text-sm">2023</p>
                                </div>
                            </section>

                            {/* Experiencia */}
                            <section className="mb-8">
                                <h3 className="mb-4 border-b-2 border-blue-600 pb-2 text-base font-bold uppercase tracking-wide">
                                    Experiencia
                                </h3>
                                
                                <div className="mb-6 border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-sm">FreeLancer</h4>
                                    <p className="text-blue-600 font-medium text-sm">Independiente, 2023 a 2025</p>
                                    <ul className="mt-2 ml-2 space-y-1 text-xs text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Desarrollo y mantenimiento de sitios web</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Despliegue Proyectos en cPanel y Vercel</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Integración de dominios</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>SEO básico</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Optimización de rendimiento y estructura del código</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Documentación técnica y soporte a clientes</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="border-l-4 border-blue-600 pl-4">
                                    <h4 className="font-semibold text-sm">FullStack</h4>
                                    <p className="text-blue-600 font-medium text-sm">Oasis, 2022 a 2024</p>
                                    <ul className="mt-2 ml-2 space-y-1 text-xs text-gray-700">
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Maquetación de interfaces</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Componentes interactivos y animaciones</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Diseños para distintos dispositivos</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Colaboración con el equipo backend</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-blue-600">•</span>
                                            <span>Despliegue</span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                        </div>
                    </div>

                    {/* Nota ATS */}
                    <div className="mt-12 text-center text-xs text-gray-500">
                        Este currículum está optimizado para sistemas ATS (Applicant Tracking Systems)
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurriculumPage;