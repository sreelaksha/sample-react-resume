import React from 'react';
import resumeLogo from '../../assets/resumeLogo.png';
import styles from './Logo.module.css';

const logo = () => (
        <div className = {styles.Logo}>
            <img src = {resumeLogo} alt = "MyResumeBuilder"/>
        </div>
);

export default logo;