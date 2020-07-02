import React from 'react';
//import Aux from '../../hoc/Aux';
import styles from './PersonDetails.module.css';

const personDetails = (props) =>{
    return(
        <div className = {styles.PersonDetails}>
            <p> First name : {props.firstName} </p>
            <input type = "text" onChange = {props.changed}/>
            <p> Last name : {props.lastName} </p>
            <p> {props.children} </p>
            <input type = "text" onChange = {props.changed}/>
         </div>
    );
}

export default personDetails;