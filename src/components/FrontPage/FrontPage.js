import React from 'react';
import styles from './FrontPage.module.css';
import Toolbar from '../Toolbar/Toolbar';
import Button from '../Button/Button';
import Aux from '../../hoc/Aux';

const frontPage = (props) => (
    <Aux>
        <div className = {styles.FrontPage}>
            <Toolbar/>
                 <a>Create your professional resume in just few minutes</a>
                  <Button ><a className= {styles.button} href="/personalInfo">Build My Resume</a></Button>
        </div>
     </Aux>


);

export default frontPage;