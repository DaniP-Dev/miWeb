
'use client';

import React, { useState, useRef } from 'react';

export const DownloadButton = () => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Cierra el dropdown si se hace click fuera
    React.useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [open]);

    const handleDownload = (lang: 'es' | 'en') => {
        const file = lang === 'es' ? '/cv/Daniel_Perez_CV_es.pdf' : '/cv/Daniel_Perez_CV_en.pdf';
        const link = document.createElement('a');
        link.href = file;
        link.download = file.split('/').pop() || '';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setOpen(false);
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => setOpen((v) => !v)}
                className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
            >
                ⬇ Descargar PDF
            </button>
            {open && (
                <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <button
                        onClick={() => handleDownload('es')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                        📄 Descargar en Español
                    </button>
                    <button
                        onClick={() => handleDownload('en')}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                    >
                        📄 Download in English
                    </button>
                </div>
            )}
        </div>
    );
};
