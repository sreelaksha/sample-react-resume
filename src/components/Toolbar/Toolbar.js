import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';

const toolbar = (props) => (
        <header className = {styles.Toolbar}>
            <Logo/>
            <div>MENU</div>
            <nav>
                ...
            </nav>
        </header>
);

export default toolbar;