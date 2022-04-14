import { FC } from 'react';
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Cards } from '../Cards/Cards';
import { Features } from '../Features/Features';

export const App: FC = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Features />
        </div>
    );
};
