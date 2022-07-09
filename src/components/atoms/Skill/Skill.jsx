import React from 'react';
import styles from '../../modules/Review/Review.module.css';

export default function Skill({ skill }) {
    let percent = 0;
    if(skill.percent < 0) percent = 0;
    else if(skill.percent > 100) percent = 100;
    else percent = skill.percent;

    return (
        <div className={styles.skill}>
            <b className={styles.name}>{skill.name}</b> 
            <span className={styles.progress}>
                <b className={styles.bar} style={{width: percent + '%'}}></b>
            </span>
        </div>
    )
}
