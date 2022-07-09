import React, {useState} from 'react';
import styles from './AsideInputsList.module.css';
import Button from './../../atoms/Button/Button';
import InputText from './../../atoms/InputText/InputText';
import { useDispatch, useSelector } from 'react-redux';
import { changeTemplate, updateResume } from '../../../redux/resume/resume.reducer';
import { FaTrash } from 'react-icons/fa';

export default function AsideInputList({ category }) {
    const { template, resume } = useSelector(state => state.resume);

    const [name, setName] = useState(resume.name);
    const [image, setImage] = useState(resume.image);
    const [info, setInfo] = useState([...resume.info]);
    const infoInit = {name: '', value: ''};

    const [introduction, setIntroduction] = useState([...resume.introduction]);
    const introInit = {introduction: ''};

    const [education, setEducation] = useState([...resume.education]);
    const eduInit = {school: '', startYear: '', endYear: ''};

    const [personalSkill, setPersonalSkill] = useState([...resume.personalSkill]);
    const personalSkillInit = {name: '', percent: ''};

    const [otherSkill, setOtherSkill] = useState([...resume.otherSkill]);
    const otherSkillInit = {name: '', percent: ''};

    const [workExperience, setWorkExperience] = useState([...resume.workExperience]);
    const workExperienceInit = {name: '', startDate: '', endDate: '', position: '', description: ''};

    const [projectExperience, setProjectExperience] = useState([...resume.projectExperience]);
    const projectExperienceInit = { name: '', description: '', sourceCode: '', viewLive: ''};

    const dispatch = useDispatch();

    const handleOnChange = (e, index, values, setValues) => {
        const { name, value } = e.target;
        let list = [...values];
        let searchedItem = {...list[index]};
        searchedItem[name] = value;
        list[index] = searchedItem;
        setValues(list);
    }

    const handleOnDelete = (index, values, setValue) => {
        let list = [...values];
        list.splice(index, 1);
        setValue(list);
    }

    const handleOnSubmit = (data) => {
        dispatch(updateResume(data));
    }
    
    return (  
        <div className={styles.list}>
            <div>
                <h2 className={styles.title}>{category.name}</h2>
                <div className={styles.inputContainer}>
                    {category.name === 'Profile & Introduction' && (
                        <div>
                            <InputText label="Full Name" name="name" value={name} onChange={setName} />
                            <InputText label="Image link" name="image" value={image} onChange={setImage} />
                            <div className={styles.iterate}>
                                { info && info.map((i, index) => (
                                    <div key={index} className={styles.group}>
                                        <label className={`${styles.label} ${styles.hasDelete}`}>
                                            {`Contact info ${index + 1}`} 
                                            <span 
                                                className={styles.delete} 
                                                onClick={() => handleOnDelete(index, info, setInfo)}
                                            ><FaTrash /></span>
                                        </label>
                                        <div>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                onChange={(e) => handleOnChange(e, index, info, setInfo)} 
                                                value={i.name} />
                                            <input 
                                                type="text" 
                                                name="value" 
                                                placeholder="Value" 
                                                onChange={(e) => handleOnChange(e, index, info, setInfo)} 
                                                value={i.value} />
                                        </div>
                                    </div>
                                ))}
                                <Button 
                                    type="button" 
                                    text="Add more" 
                                    onClick={() => setInfo([...info, infoInit])} />
                            </div>
                            
                            <div className={styles.iterate}>
                                { introduction && introduction.map((intro, index) => (
                                    <div key={index} className={styles.group}>
                                        <label className={`${styles.label} ${styles.hasDelete}`}>
                                            {`Introduction ${index + 1}`} 
                                            <span 
                                                className={styles.delete} 
                                                onClick={() => handleOnDelete(index, introduction, setIntroduction)}
                                            ><FaTrash /></span>
                                        </label>
                                        <div>
                                            <textarea 
                                                type="text" 
                                                rows={4} name="introduction" 
                                                placeholder="About you" 
                                                onChange={(e) => handleOnChange(e, index, introduction, setIntroduction)} 
                                                value={intro.introduction}></textarea>
                                        </div>
                                    </div>
                                )) }
                                <Button 
                                    type="button" 
                                    text="Add more" 
                                    onClick={() => setIntroduction([...introduction, introInit])} />
                            </div>
                            <div className={styles.btnSubmitWrapper}>
                                <Button 
                                    className={styles.btnSubmit} 
                                    type="button" 
                                    text="Submit Profile" 
                                    onClick={() => handleOnSubmit({name, image, info, introduction})} />
                            </div>
                        </div>
                    )}

                    {category.name === 'Education' && (
                        <div className={styles.iterate}>
                            { education && education.map((edu, index) => (
                                <div key={index} className={styles.group}>
                                    <label className={`${styles.label} ${styles.hasDelete}`}>
                                        {`Education ${index + 1}`} 
                                        <span 
                                            className={styles.delete} 
                                            onClick={() => handleOnDelete(index, education, setEducation)}
                                        ><FaTrash /></span>
                                    </label>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="school" 
                                            placeholder="Degree / Diploma name" 
                                            onChange={(e) => handleOnChange(e, index, education, setEducation)} 
                                            value={edu.school} />
                                        <input 
                                            type="text" 
                                            name="startYear" 
                                            placeholder="2008" 
                                            onChange={(e) => handleOnChange(e, index, education, setEducation)} 
                                            value={edu.startYear} />
                                        <input 
                                            type="text" 
                                            name="endYear" 
                                            placeholder="2012" 
                                            onChange={(e) => handleOnChange(e, index, education, setEducation)} 
                                            value={edu.endYear} />
                                    </div>
                                </div>
                            )) }
                            <Button 
                                type="button" 
                                text="Add more" 
                                onClick={() => setEducation([...education, eduInit])} />
                            <div className={styles.btnSubmitWrapper}>
                                <Button 
                                    className={styles.btnSubmit} 
                                    type="button" 
                                    text="Submit Profile" 
                                    onClick={() => handleOnSubmit({ education })} />
                            </div>
                        </div>
                    )}

                    {category.name === 'Skills' && (
                        <div>
                            <div className={styles.iterate}>
                                { personalSkill && personalSkill.map((item, index) => (
                                    <div key={index} className={styles.group}>
                                        <label className={`${styles.label} ${styles.hasDelete}`}>
                                            {`Personal Skill ${index + 1}`} 
                                            <span 
                                                className={styles.delete} 
                                                onClick={() => handleOnDelete(index, personalSkill, setPersonalSkill)}
                                            ><FaTrash /></span>
                                        </label>
                                        <div>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Language" 
                                                onChange={(e) => handleOnChange(e, index, personalSkill, setPersonalSkill)} 
                                                value={item.name} />
                                            <input 
                                                type="number" 
                                                name="percent" 
                                                placeholder="70"
                                                onChange={(e) => handleOnChange(e, index, personalSkill, setPersonalSkill)} 
                                                value={item.percent} />
                                        </div>
                                    </div>
                                )) }
                                <Button 
                                    type="button" 
                                    text="Add more" 
                                    onClick={() => setPersonalSkill([...personalSkill, personalSkillInit])} />
                            </div>

                            <div className={styles.iterate}>
                                { otherSkill && otherSkill.map((item, index) => (
                                    <div key={index} className={styles.group}>
                                        <label className={`${styles.label} ${styles.hasDelete}`}>
                                            {`Other Skill ${index + 1}`} 
                                            <span 
                                                className={styles.delete} 
                                                onClick={() => handleOnDelete(index, otherSkill, setOtherSkill)}
                                            ><FaTrash /></span>
                                        </label>
                                        <div>
                                            <input 
                                                type="text" 
                                                name="name" 
                                                placeholder="Language" 
                                                onChange={(e) => handleOnChange(e, index, otherSkill, setOtherSkill)} 
                                                value={item.name} />
                                            <input 
                                                type="number" 
                                                name="percent" 
                                                placeholder="70"
                                                onChange={(e) => handleOnChange(e, index, otherSkill, setOtherSkill)} 
                                                value={item.percent} />
                                        </div>
                                    </div>
                                )) }
                                <Button type="button" text="Add more" onClick={() => setOtherSkill([...otherSkill, otherSkillInit])} />
                            </div>
                            <div className={styles.btnSubmitWrapper}>
                                <Button 
                                    className={styles.btnSubmit} 
                                    type="button" 
                                    text="Submit Profile" 
                                    onClick={() => handleOnSubmit({ personalSkill, otherSkill })} />
                            </div>
                        </div>
                    )}

                    {category.name === 'Work Experience' && (
                        <div className={styles.iterate}>
                            { workExperience && workExperience.map((item, index) => (
                                <div key={index} className={styles.group}>
                                    <label className={`${styles.label} ${styles.hasDelete}`}>
                                        {`Work Experience ${index + 1}`} 
                                        <span 
                                            className={styles.delete} 
                                            onClick={() => handleOnDelete(index, workExperience, setWorkExperience)}
                                        ><FaTrash /></span>
                                    </label>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Name of company" 
                                            onChange={(e) => handleOnChange(e, index, workExperience, setWorkExperience)} 
                                            value={item.name} />
                                        <input 
                                            type="text" 
                                            name="startDate" 
                                            placeholder="2016"
                                            onChange={(e) => handleOnChange(e, index, workExperience, setWorkExperience)} 
                                            value={item.startDate} />
                                        <input 
                                            type="text" 
                                            name="endDate" 
                                            placeholder="2019"
                                            onChange={(e) => handleOnChange(e, index, workExperience, setWorkExperience)} 
                                            value={item.endDate} />
                                        <input 
                                            type="text" 
                                            name="position" 
                                            placeholder="Senior Developer"
                                            onChange={(e) => handleOnChange(e, index, workExperience, setWorkExperience)} 
                                            value={item.position} />
                                        <textarea 
                                            type="text" 
                                            rows={4}
                                            name="description" 
                                            placeholder="Enter your job description"
                                            onChange={(e) => handleOnChange(e, index, workExperience, setWorkExperience)} 
                                            value={item.description}></textarea>
                                    </div>
                                </div>
                            )) }
                            <Button type="button" text="Add more" onClick={() => setWorkExperience([...workExperience, workExperienceInit])} />
                            <div className={styles.btnSubmitWrapper}>
                                <Button 
                                    className={styles.btnSubmit} 
                                    type="button" 
                                    text="Submit Profile" 
                                    onClick={() => handleOnSubmit({ workExperience })} />
                            </div>
                        </div>
                    )}

                    {category.name === 'Project Experience' && (
                        <div className={styles.iterate}>
                            { projectExperience && projectExperience.map((item, index) => (
                                <div key={index} className={styles.group}>
                                    <label className={`${styles.label} ${styles.hasDelete}`}>
                                        {`Project Experience ${index + 1}`} 
                                        <span 
                                            className={styles.delete} 
                                            onClick={() => handleOnDelete(index, projectExperience, setProjectExperience)}
                                        ><FaTrash /></span>
                                    </label>
                                    <div>
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Name of project" 
                                            onChange={(e) => handleOnChange(e, index, projectExperience, setProjectExperience)} 
                                            value={item.name} />
                                        <textarea 
                                            type="text" 
                                            rows={4}
                                            name="description" 
                                            placeholder="Short explaination about your project"
                                            onChange={(e) => handleOnChange(e, index, projectExperience, setProjectExperience)} 
                                            value={item.description}></textarea>
                                        <input 
                                            type="text" 
                                            name="sourceCode" 
                                            placeholder="Link to the source code"
                                            onChange={(e) => handleOnChange(e, index, projectExperience, setProjectExperience)} 
                                            value={item.sourceCode} />
                                        <input 
                                            type="text" 
                                            name="viewLive" 
                                            placeholder="http://example.com"
                                            onChange={(e) => handleOnChange(e, index, projectExperience, setProjectExperience)} 
                                            value={item.viewLive} />
                                    </div>
                                </div>
                            )) }
                            <Button type="button" text="Add more" onClick={() => setProjectExperience([...projectExperience, projectExperienceInit])} />
                            <div className={styles.btnSubmitWrapper}>
                                <Button 
                                    className={styles.btnSubmit} 
                                    type="button" 
                                    text="Submit Profile" 
                                    onClick={() => handleOnSubmit({ projectExperience })} />
                            </div>
                        </div>
                    )}

                    {category.name === 'Template' && (
                        <div className={styles.template}>
                            <div 
                                className={`${template === 'review1_template' ? styles.active : ''}`} 
                                onClick={() => dispatch(changeTemplate('review1_template'))}>Template 1</div>
                            <div 
                                className={`${template === 'review2_template' ? styles.active : ''}`}  
                                onClick={() => dispatch(changeTemplate('review2_template'))}>Template 2</div>
                        </div>
                    )}
                </div>
            </div>
        </div> 
    )
}
