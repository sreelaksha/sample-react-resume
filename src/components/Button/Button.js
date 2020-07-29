import React from 'react';
import styles from './Button.module.css';

    const button = (props) => (
        <button
                type="button"
                className = {styles.Button}
                onClick = {props.clicked} >
                {props.children}
            </button>
     );

export default button;