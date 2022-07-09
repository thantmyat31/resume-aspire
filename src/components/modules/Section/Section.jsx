import React, {useEffect, useRef} from 'react';
import styles from './Section.module.css';
import { useDispatch } from 'react-redux';
import { updateDimension } from '../../../redux/resume/resume.reducer';

export default function Section({ className, children, ref }) {
    const sectionRef = useRef();
    
    const dispatch = useDispatch();
    useEffect(() => {
        let width = sectionRef.current.clientWidth;
        let height = sectionRef.current.clientHeight;
        dispatch(updateDimension({ width, height }));
    },[dispatch]);

    window.addEventListener('resize', () => {
        if(sectionRef.current) {
            dispatch(updateDimension({ width: sectionRef.current.clientWidth, height: sectionRef.current.clientHeight }));
        } 
        window.removeEventListener('resize', () => dispatch(updateDimension({ width: sectionRef.current.clientWidth, height: sectionRef.current.clientHeight })));
    });

    return (
        <section ref={sectionRef} className={`${styles.section} ${className ? className : ''}`}>
            {children}
        </section>
    )
}
