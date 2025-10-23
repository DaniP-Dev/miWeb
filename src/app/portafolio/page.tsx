import CardsPortafolio from '@/components/cards/CardsPortafolio';
import React from 'react';

const page = () => {
    return (
        <div>
            <h1>Portafolio</h1>
            <p>Aquí puedes ver algunos de mis trabajos anteriores.</p>
            <CardsPortafolio/>
        </div>
    );
};

export default page;