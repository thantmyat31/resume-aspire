import React from 'react';
import styles from '../../modules/Review/Review.module.css';

export default function Education({ edu }) {
    return (
        <span className={styles.education}>
            <p className={styles.school}>{edu.school}</p>
            <p className={styles.years}><span>{edu.startYear}</span> - <span>{edu.endYear}</span></p>
        </span>
    )
}
