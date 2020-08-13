import React from 'react';
import styles from './FrontPage.module.css';

const frontPage = (props) => (
    <div className = {styles.FrontPage}>
        <p>  Create your professional resume in just few minutes</p>
        <button
                    className = {styles.OrderButton}
                    onClick = {props.ordered}> Build My Resume Now </button>
    </div>
);

export default frontPage;