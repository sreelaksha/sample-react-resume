import React from 'react';
//import Aux from '../../hoc/Aux';

const personDetails = (props) =>{
    return(
        <div>
            <p> First name : {props.name} </p>
            <p> {props.children} </p>
            <input type = "text" onChange = {props.changed}/>
         </div>
    );
}

export default personDetails;