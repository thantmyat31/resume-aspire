import React from 'react';
import styles from '../../modules/Review/Review.module.css';

export default function SectionItem({ project, item }) {
     
    return (
        <div className={styles.sectionItem}>
            <div className={styles.info}>
                <b className={styles.name}>{item.name}</b>
                {
                    !project && 
                    <span className={styles.time}>
                        <small className={styles.start}>{item.startDate}</small> - <small className={styles.end}>{item.endDate}</small>
                    </span>
                }
            </div>
            {!project && <span className={styles.position}>{item.position}</span>}
            <p className={styles.description}>{item.description}</p>
            {
                project && 
                <>
                    <p className={styles.link}>{item.sourceCode}</p>
                    <p className={styles.link}>{item.viewLive}</p>
                </>
            }
        </div>
    )
}
