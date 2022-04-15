import { FC } from "react";
import styles from "./Spinner.module.css";

export const Spinner: FC = () => {
    return (
        <div className={styles.spinner}>
            <div className={styles.loader}></div>
        </div>
)};