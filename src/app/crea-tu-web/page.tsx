import CardStyleServices from '@/components/cards/cardStyle/CardStyleServices';
import Layout from '@/components/Layout';
import React from 'react';

const page = () => {
    return (
        <main className="flex w-full flex-col items-center justify-center dark:text-light">
            <article className="w-full">
                <Layout className="!pt-0">
                    <div className="flex flex-col w-full items-center justify-center py-10">
                        <div className="text-center mb-16">
                            <h1 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-4 capitalize">
                                Crea tu web
                            </h1>
                            <p className="text-lg md:text-base sm:text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                                Aquí puedes explorar nuestros servicios de diseño y desarrollo web personalizados para tu negocio.
                            </p>
                        </div>
                        <CardStyleServices />
                    </div>
                </Layout>
            </article>
        </main>
    );
};

export default page;