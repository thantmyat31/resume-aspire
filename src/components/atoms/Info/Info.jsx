import React from 'react';
import styles from '../../modules/Review/Review.module.css';

export default function Info({ info }) {
    return (
        <li className={styles.info}><span>{info.name}</span> {info.value}</li>
    )
}
