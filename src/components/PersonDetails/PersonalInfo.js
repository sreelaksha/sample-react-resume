import React, {Component} from 'react';
//import Aux from '../../hoc/Aux';
import styles from './PersonalInfo.module.css';
import Input from '../Input/Input';

class PersonalInfo extends Component {
        state = {
                personalInfo:{
                    firstName: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'Your First name'
                            },
                            value: ''
                     },
                    lastName: {
                            elementType: 'input',
                            elementConfig: {
                                type: 'text',
                                placeholder: 'Your Last name'
                            },
                            value: ''
                     }
                }
            }
                    /*address: ' ',
                    email: '',
                    phone: ' ',
                    city: ' ',
                    zipcode: ' ',
                    country: ' '*/



    inputChangeHandler = () => {
                //console.log(event);

                                /*address: event.target.value,
                                email: event.target.value,
                                phone: event.target.value,
                                city: event.target.value,
                                zipcode: event.target.value,
                                country: event.target.value*/
           }

    render(){
        const formElementArray = [];
                for(let key in this.state.personalInfo){
                    formElementArray.push({
                        id: key,
                        config : this.state.personalInfo[key]
                    });
                }

                let form = (
                    <form onSubmit = {this.orderConfirmedHandler}>
                            {formElementArray.map(formElement => (
                               <Input
                                    key = {formElement.id}
                                    elementType = {formElement.config.elementType}
                                    elementConfig = {formElement.config.elementConfig}
                                    value = {formElement.config.value}
                                    //changed = {(event) => this.inputChangeHandler(event, formElement.id)}/>
                                    changed = {this.inputChangeHandler}/>
                            ))}
                            <button> NEXT </button>
                    </form>
                );

    return(

    <div className = {styles.PersonalInfo}>
                        <h3> Enter your Personal info </h3>
                       {form}
                    </div>
        /*<div className = {styles.PersonDetails}>
            <p> First name : {props.firstName} </p>
            <input type = "text" onChange = {props.changed} />
            <p> Last name : {props.lastName} </p>
            <p> {props.children} </p>
            <input type = "text" onChange = {props.changed} />


         </div>*/
    );
   }
}

export default PersonalInfo;