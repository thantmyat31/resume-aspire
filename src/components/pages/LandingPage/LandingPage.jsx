import React from 'react';
import Header from './../../organisms/Header/Header';
import Section from './../../modules/Section/Section';
import styles from './LandingPage.module.css';
import Button from './../../atoms/Button/Button';
import Canvas from '../../organisms/Canvas/Canvas';
import { useNavigate } from 'react-router-dom';

import IconFree from '../../../assets/image/free.svg';
import IconOk from '../../../assets/image/ok.svg';
import IconClock from '../../../assets/image/clock.svg';
import IconNotebook from '../../../assets/image/notebook.svg';
import IconGithub from '../../../assets/image/github.svg';
import Footer from '../../organisms/Footer/Footer';

export default function LandingPage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <Header />
            <main>
                <Section className={styles.mainVisual}>
                    <Canvas className={styles.canvas} />
                    <div className={styles.row}>
                        <div className={styles.col}>
                            <h2>Nobody knows <br/>Who you are</h2>
                            <p>Prepare your resume and let them know</p>
                            <Button text="Build My Resume" className={styles.button} onClick={() => navigate('/resume')} />
                        </div>
                        <div className={`${styles.col} ${styles.colSecond}`}>
                            <span className={styles.info}><img src={IconFree} alt="100% free" /> 100% Free</span>
                            <span className={styles.info}><img src={IconOk} alt="Easy" /> Easy to use</span>
                            <span className={styles.info}><img src={IconClock} alt="clock" /> It take a minute</span>
                            <span className={styles.info}><img src={IconNotebook} alt="notebook" /> No need to register</span>
                            <span className={styles.info}><img src={IconGithub} alt="github" /> Open-source</span>
                        </div>
                    </div>
                </Section>
            </main>
            <Footer />
        </div>
    )
}
