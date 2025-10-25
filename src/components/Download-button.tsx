'use client';

export const DownloadButton = () => {
    const handleDownloadPDF = () => {
        const link = document.createElement('a');
        link.href = '/Daniel_Perez_CV.pdf';
        link.download = 'Daniel_Perez_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownloadPDF}
            className="rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white hover:bg-blue-700 transition-colors"
        >
            ⬇ Descargar PDF
        </button>
    );
};
