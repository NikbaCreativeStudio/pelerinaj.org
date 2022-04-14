import { FC } from "react";
import Container from "@mui/material/Container";
import styles from "./Features.module.css";

export const Features: FC = () => {
    return (
        <section className={styles.features}>
            <Container maxWidth="xl">
                <h1 className={styles.title}>Pelerinaje în Moldova și Externe</h1>
                <p className={styles.subtitle}>Ne-am specializat de-a lungul timpului pe organizarea pelerinajelor</p>
            </Container>
        </section>
)}