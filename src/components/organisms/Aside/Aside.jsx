import React, {useState} from 'react';
import AsideIcon from '../../atoms/AsideIcon/AsideIcon';
import styles from './Aside.module.css';
import AsideInputsList from '../../modules/AsideInputsList/AsideInputsList';
import { FaUserAlt, FaStream, FaBookOpen, FaChartBar, FaChartPie, FaProjectDiagram, FaPager, FaWindowClose, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Aside({ onDrawerOpen, isDrawerOpen }) {
    const [currentCat, setCurrentCat] = useState({});

    const handleOnClickAsideIcon = (current, cat) => {
        if(current.name !== cat.name) {
            setCurrentCat(cat);
            onDrawerOpen(true);
        }
        else {
            setCurrentCat({});
            onDrawerOpen(false);
        }
    }

    const navigate = useNavigate();
    
    const CATEGORIES = [
        {name: 'Profile & Introduction', icon: <FaUserAlt />},
        {name: 'Education', icon: <FaBookOpen />},
        {name: 'Skills', icon: <FaChartBar />},
        {name: 'Work Experience', icon: <FaChartPie />},
        {name: 'Project Experience', icon: <FaProjectDiagram />},
        {name: 'Template', icon: <FaPager />},
    ]

    let backIcon = {name: 'Back', icon: <FaArrowLeft />}
    let menuIcon = {icon: <FaStream />};
    let hasCurrentCat = false;
    if(currentCat.name?.length) {
        menuIcon = {icon: <FaWindowClose />};
        hasCurrentCat = true;
    } 
    
    return (
        <div className={styles.aside}>
            <div className={styles.menu}>
                <AsideIcon
                    category={menuIcon} 
                    onClick={() => {
                        setCurrentCat(hasCurrentCat ? {} : CATEGORIES[0])
                        onDrawerOpen(!isDrawerOpen)
                    }} 
                />
                {CATEGORIES.map((cat, index) => (
                    <AsideIcon 
                        key={index} 
                        category={cat} 
                        onClick={() => handleOnClickAsideIcon(currentCat, cat)} 
                    />
                ))}
                <AsideIcon
                    category={backIcon} 
                    onClick={() => navigate(-1)} 
                />
            </div>
            {currentCat.name && <AsideInputsList category={currentCat} />}
        </div>
    )
}
