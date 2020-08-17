import React from 'react';
import styles from './FrontPage.module.css';

const frontPage = (props) => (
    <div className = {styles.FrontPage}>
    <nav>
               <p>Create your professional resume in just few minutes
                    <a href="/"> Build My Resume Now </a>
                </p>
            </nav>

    </div>
);

export default frontPage;