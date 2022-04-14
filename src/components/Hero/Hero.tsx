import { FC } from 'react';
import background from '../../images/hero.jpg';
import styles from './Hero.module.css';

export const Hero: FC = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_content}>
                <h1 className={styles.hero_title}>Excursii religioase la mănăstiri!</h1>
                <p className={styles.hero_text}>Cu noi veți vizita locuri sfinte și vă veți putea ruga pentru cei dragi.</p>
            </div>
            <img src={background} alt="Hero" className={styles.hero_image} />
        </div>
)};