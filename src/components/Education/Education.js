import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import styles from './Education.module.css';



class Experience extends Component {
        state = {
                schoolName : " ",
                city : " ",
                state : " ",
                degree : " ",
                fieldOfStudy :  " ",
                graduationDate: " ",
                attendHereCheckbox : false,
        }
        render(){
            return(
                 <Aux>
                       <span className ={styles.EducationLabel}> EDUCATION </span>
                 </Aux>
            );
          }

 }


export default Experience;