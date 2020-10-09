import React from 'react';
import styles from './FrontPage.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';

const frontPage = (props) => (
    <div className = {styles.FrontPage}>
    <Toolbar/><nav>
               <p>Create your professional resume in just few minutes</p>
                    <Button ><a className= {styles.button} href="/personalInfo">Build My Resume</a></Button>

            </nav>

    </div>
);

export default frontPage;