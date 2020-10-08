import React from 'react';
import styles from './FrontPage.module.css';
import Toolbar from '../Toolbar/Toolbar';

const frontPage = (props) => (
    <div className = {styles.FrontPage}>
    <Toolbar/><nav>
               <p>Create your professional resume in just few minutes
                    <a href="/personalInfo">Build My Resume</a>
                </p>
            </nav>

    </div>
);

export default frontPage;