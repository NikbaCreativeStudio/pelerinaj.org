import { FC } from "react";
import Container from "@mui/material/Container";
import styles from "./About.module.css";
import Grid from '@mui/material/Grid';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Spinner } from "../Spinner/Spinner";
import { useAppSelector } from '../../services/hooks'

const itemData = [
    {
        img: require("../../images/gal_1.png"),
        title: 'Excursii la mănăstire',
    },
    {
        img: require("../../images/gal_2.png"),
        title: 'Excursii la mănăstire',
    },
    {
        img: require("../../images/gal_3.png"),
        title: 'Excursii la mănăstire',
    },
    {
        img: require("../../images/gal_4.png"),
        title: 'Excursii la mănăstire',
    },
    {
        img: require("../../images/gal_5.png"),
        title: 'Excursii la mănăstire',
    },
    {
        img: require("../../images/gal_6.png"),
        title: 'Excursii la mănăstire',
    },
  ];

export const About: FC = () => {

    const { page, isLoading } = useAppSelector(state => state.page);

    if (!page || isLoading) {
        return <Spinner />;
    }

    return (
        <Container maxWidth="xl">
            <div className={styles.about}>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <ImageList  cols={3} >
                            {itemData.map((item) => (
                                <ImageListItem key={item.img}>
                                    <img
                                        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <h3 className={styles.title}>{page.title}</h3>
                        <div className={styles.text} dangerouslySetInnerHTML={{ __html: page.text }} />
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
};