import React from 'react';
import styles from './Footer.module.css';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    
    return (
        <footer className={styles.footer}>
            <p>
                <a href="https://github.com/thantmyat31"><FaGithub className={styles.icon} /> 
                THANTMYAT </a>
                <span className={styles.pipe}></span> 
                <a href="https://github.com/thantmyat31/resume-aspire" className={styles.source}>Source</a>
            </p>
        </footer>
    )
}
