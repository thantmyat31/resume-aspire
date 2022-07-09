import React from 'react';
import styles from './AsideIcon.module.css';

export default function AsideIcon({category, onClick}) {
    return (
        <div className={styles.icon} onClick={onClick}>
            {category.icon}
            {category.name?.length ? <span className={styles.tooltip}>{category.name}</span> : null}    
        </div>
    )
}
