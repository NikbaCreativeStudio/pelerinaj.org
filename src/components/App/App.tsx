import { FC, useEffect } from 'react';
import { useAppDispatch } from '../../services/hooks'
import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Cards } from '../Cards/Cards';
import { Features } from '../Features/Features';

import { getCards } from '../../services/actions/cards';

export const App: FC = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getCards());
    }, [dispatch]);

    

    return (
        <div>
            <Header />
            <Hero />
            <Cards />
            <Features />
        </div>
    );
};
