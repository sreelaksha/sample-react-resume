import React from 'react';
import styles from './FrontPage.module.css';
import Navbar from '../Navbar/Navbar';
import Button from '../Button/Button';
import {FaEdit} from 'react-icons/fa';
import Aux from '../../hoc/Aux';

const frontPage = (props) => (
    <Aux>
        <div className = {styles.FrontPage}>
            <Navbar/>
                 <a>Create your professional resume in just few minutes</a>
                  <div><Button ><FaEdit /> <a className= {styles.button} href="/personalInfo">Build My Resume</a></Button></div>
        </div>
     </Aux>


);

export default frontPage;