import React from 'react';
import styles from './Button.module.css';

    const button = (props) => (
        <div className = {styles.ButtonDiv}>
            <button
                className = {styles.Button}
                onClick = {props.clicked} >
                {props.children}
            </button>
        </div>
    );

export default button;