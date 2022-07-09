import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import styles from './Review.module.css';
import SectionItem from '../../atoms/SectionItem/SectionItem';
import Skill from '../../atoms/Skill/Skill';
import Education from '../../atoms/Education/Education';
import Introduction from '../../atoms/Introduction/Introduction';
import Info from '../../atoms/Info/Info';
import Button from '../../atoms/Button/Button';

import Pdf from 'react-to-pdf';

export default function Review({ isDrawerOpen }) {
    const { template, resume: PROFILE } = useSelector(state => state.resume);
    const printRef = React.useRef();
    const [formatHeight, setFormatHeight] = useState(0);
    const [formatWidth, setFormatWidth] = useState(0);

    useEffect(() => {
        if(printRef.current) {
            setFormatHeight(printRef.current.clientHeight);
            setFormatWidth(printRef.current.clientWidth);
        } 
      }, [template]);

    let options = {
        orientation: 'portrait',
        unit: 'mm',
        // format: [210, 297*2]* 0.264583
        format: [formatWidth * 0.264583, formatHeight * 0.264583]  
    }

    const handleOnDownload = (toPdf) => {
        options.format = [printRef.current.clientHeight * 0.264583, printRef.current.clientWidth * 0.264583];
        toPdf();
    }

    return (
        <div className={`${styles.container} ${isDrawerOpen ? styles.open : ''}`}>
            <Pdf targetRef={printRef} filename="resume.pdf" options={options}>
                {({toPdf}) => <Button className={styles.btnDownload} text="Download Your Resume" onClick={() => handleOnDownload(toPdf)}  />}
            </Pdf>
            <div ref={printRef} className={`${styles.review} ${styles[template]}`}>
                <div className={styles.basicInfo}>
                    <section className={`${styles.section} ${styles.sectionProfile}`}>
                        <div className={styles.avatar}>
                            <img src={PROFILE.image} alt="avatar" />
                        </div>
                        <div className={styles.profile}>
                            <div className={styles.name}>{PROFILE.name}</div>
                            <div className={styles.profileList}>
                                <ul className={styles.infoList}>
                                    { PROFILE.info.map((info, index) => <Info key={index} info={info} />) }
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className={`${styles.section} ${styles.sectionAboutMe}`}>
                        <h4 className={styles.sectionTitle}><span>Introduction</span></h4>
                        { PROFILE.introduction.map((text, index) => <Introduction key={index} text={text.introduction} />) }
                    </section>

                    <section className={`${styles.section} ${styles.sectionEducation}`}>
                        <h4 className={styles.sectionTitle}><span>Education</span></h4>
                        <div>
                            { PROFILE.education.map((edu, index) => <Education key={index} edu={edu} />) }
                        </div>
                    </section>

                    <section className={`${styles.section} ${styles.sectionSkill}`}>
                        <h4 className={styles.sectionTitle}><span>Personal skills</span></h4>
                        { PROFILE.personalSkill.map((p, index) => <Skill key={index} skill={p} />) }
                    </section>

                    <section className={`${styles.section} ${styles.sectionSkill}`}>
                        <h4 className={styles.sectionTitle}><span>Other skills</span></h4>
                        { PROFILE.otherSkill.map((o, index) => <Skill key={index} skill={o} />) }
                    </section>
                </div>

                <div className={styles.mainInfo}>
                    <section className={styles.section}>
                        <h4 className={styles.sectionTitle}><span>Work experience</span></h4>
                        { PROFILE.workExperience.map((w, index) => <SectionItem key={index} item={w} />) }
                    </section>

                    <section className={styles.section}>
                        <h4 className={styles.sectionTitle}><span>Project experience</span></h4>
                        { PROFILE.projectExperience.map((p, index) => <SectionItem key={index} project item={p} />) }
                    </section>
                </div>
            </div>
        </div>
    )
}
