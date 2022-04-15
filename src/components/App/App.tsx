import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../services/hooks'
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Cards } from '../Cards/Cards';
import { Features } from '../Features/Features';
import { Footer } from '../Footer/Footer';
import { About } from '../About/About';

import { getCards } from '../../services/actions/cards';
import { getPage } from '../../services/actions/page';

export const App: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCards());
        dispatch(getPage('1'));
    }, [dispatch]);

    
    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Features />
            <About />
            <Footer />
        </div>
    );
};
