import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../organisms/Header/Header';
import Section from '../../modules/Section/Section';
import Footer from '../../organisms/Footer/Footer';

import styles from './NotFoundPage.module.css';

export default function NotFoundPage() {
    
    return (
        <div>
            <Header />
            <main>
                <Section className={styles.notFound}>
                    <h2>The page you are looking for not found. <br/>Please go back to <Link to="/">Home</Link> page.</h2>
                </Section>
            </main>
            <Footer />
        </div>
    )
}
