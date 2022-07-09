import React from 'react';
import styles from '../../modules/AsideInputsList/AsideInputsList.module.css';

export default function InputText({label, type, name, value, placeholder, onChange, children}) {
    return (
        <div className={styles.group}>
            <label className={styles.label}>{label}</label>
            {children ? children : <input 
                name={name} 
                type={type?type:'text'} 
                placeholder={placeholder?placeholder:''}
                onChange={(e) => onChange(e.target.value)}
                value={value} />}
        </div>
    )
}