import React from 'react';
//import Aux from '../../hoc/Aux';
import styles from './PersonDetails.module.css';

const personDetails = (props) =>{
    return(
        <div className = {styles.PersonDetails}>
            <p> First name : {props.name} </p>
            <p> {props.children} </p>
            <input type = "text" onChange = {props.changed}/>
         </div>
    );
}

export default personDetails;