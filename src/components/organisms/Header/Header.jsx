import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/image/logo.png';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.container}>
            <Link className={styles.logo} to="/">
                <img src={Logo} alt="logo" />
            </Link>
            <nav className={styles.nav}>
                <Link to="/resume">Create Resume</Link>
                <a href="https://github.com/thantmyat31" target="_blank" rel='noreferrer'>Source</a>
            </nav>
        </div>
    </header>
  )
}
