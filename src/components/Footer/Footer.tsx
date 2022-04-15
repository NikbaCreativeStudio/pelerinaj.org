import { FC } from "react";
import Container from "@mui/material/Container";

import styles from "./Footer.module.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Footer: FC = () => {
    return (
        <footer className={styles.footer} id="contacts">
            <Container maxWidth="xl">
                <ul className={styles.contact}>
                    <li>
                        <a href="https://api.whatsapp.com/send?phone=+37368333903" className={styles.whatsapp}>
                            <WhatsAppIcon /> WhatsApp
                        </a>
                    </li>
                    <li>
                        <a href="tel:+37368333903" className={styles.phone}>
                            <LocalPhoneIcon />  +373 68333903
                        </a>
                    </li>
                </ul>
                <div className={styles.copyright}>
                    <p>
                        Copyright &copy; 2022 Centrul de Pelerinaje | Elaborat de <a href="//nikba.com">Nikba Creative Studio</a>
                    </p>
                </div>
            </Container>
        </footer>
    );
};