import React from 'react';
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import signInLogo from '../../assets/signin.png'

const toolbar = (props) => (
        <header className = {styles.Toolbar}>
            <Logo/>
            <nav>
                <img className = {styles.SignIn_image} src = {signInLogo} alt = "Sign-In"/>
            </nav>
        </header>
);

export default toolbar;