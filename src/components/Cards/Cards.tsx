import { FC } from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import { CardItem } from "./Card/Card";

import { useAppSelector } from '../../services/hooks'

import styles from "./Cards.module.css";

export const Cards: FC = () => {

    const { cards } = useAppSelector(state => state.cards);

    return (
        <Container maxWidth="xl">
            <h1 className={styles.title}>Descoperă locurile sfinte alături de noi</h1>
            <p className={styles.subtitle}>Transformăm visurile în călătorii de neuitat</p>

            <div className={styles.cards}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
                    {cards.map((card, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <CardItem card={card} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Container>
    );
};