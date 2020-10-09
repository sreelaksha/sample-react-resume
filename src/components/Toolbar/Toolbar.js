import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import signInLogo from '../../assets/signin.png'

const toolbar = (props) => (
        <header className = {styles.Toolbar}>
            <Logo/>
            <div>MENU</div>
            <nav>
                <img src = {signInLogo} alt = "Sign-In"/>
            </nav>
        </header>
);

export default toolbar;