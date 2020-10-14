import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../Logo/Logo';
import signInLogo from '../../assets/signin.png'

const navbar = (props) => (
        <header className = {styles.Navbar}>
            <Logo/>
            <nav>
                <img className = {styles.SignIn_image} src = {signInLogo} alt = "Sign-In"/>
            </nav>
        </header>
);

export default navbar;