import React from 'react';
import styles from './Button.module.css';

export default function Button({text, className, onClick, type}) {
  return (
    <button type={type} className={`${styles.button} ${className?className:''}`} onClick={onClick}>{text}</button>
  )
}
