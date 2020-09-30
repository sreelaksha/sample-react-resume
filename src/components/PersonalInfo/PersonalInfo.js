import React, {Component} from 'react';
//import axios from "axios";
//import { Router, Route, Switch, Redirect, Link } from "react-router";

import Aux from '../../hoc/Aux';
import styles from './PersonalInfo.module.css';
import Button from '../Button/Button';
import PersonalInfoSummary from '../PersonalInfoSummary/PersonalInfoSummary';

class PersonalInfo extends Component {
        state = {
                    personalInfoForm: {
                            firstName: " ",
                            lastName : " ",
                            email: " ",
                            address : " ",
                            city : " ",
                            country :  " ",
                            phone: " ",
                     }
                }

    handleChange = (event, inputIdentifier) =>{
                console.log(inputIdentifier);
              const updatedForm = {
                          ...this.state.personalInfoForm
                      };
                      const updatedFormElement= {
                          ...updatedForm[inputIdentifier]
                      };
                      console.log(updatedFormElement);
                      updatedFormElement.value = event.target.value;
                      updatedFormElement.valid = this.checkValidity(updatedFormElement.value , updatedFormElement.validation )
                      updatedFormElement.touched = true;
                      //console.log(updatedFormElement);
                      updatedForm[inputIdentifier] = updatedFormElement ;

                      let formIsValid = true;
                      for(let inputIdentifier in updatedForm){
                          formIsValid = updatedForm[inputIdentifier].valid && formIsValid;
                      }
                      console.log(formIsValid);

                      this.setState({personalInfoForm: updatedForm , formIsValid : formIsValid})
           }


        formSubmitHandler = (event) => {
                event.preventDefault();
                this.setState({loading : true})
                console.log(this.state.loading);
                /*if(this.checkValidity()){
                           alert("Form submitted");
                        }else{
                           alert("Form has errors.")
                        }*/
        }
        //console.log(inputIdentifier);
                /*const updatedPersonalInfoForm = {
                        ...this.state.orderForm
                        };
                        const updatedFormElement= {
                            ...updatedOrderForm[inputIdentifier]
                        };
                        //console.log(updatedFormItems);
                        updatedFormElement.value = event.target.value;
                        updatedFormElement.valid = this.checkValidity(updatedFormElement.value , updatedFormElement.validation )
                        updatedFormElement.touched = true;
                        //console.log(updatedFormElement);
                        updatedOrderForm[inputIdentifier] = updatedFormElement ;

                        let formIsValid = true;
                        for(let inputIdentifier in updatedOrderForm){
                            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
                        }
                        console.log(formIsValid);

                        this.setState({orderForm: updatedOrderForm , formIsValid : formIsValid})
             }
*/



        handleButtonClick =(id) =>{
                           // this.props.history.push({pathname : '/posts' + id});
                             this.props.history.push('/experience/' +id );
                    }

        render(){

            const classes = [];
            if(this.state.personalInfoForm.length < 8){
                classes.push('red');
            }

            return(
                <Aux>
                <span className ={styles.PersonalInfoLabel}> PERSONAL INFO </span>
                <form className ={styles.PersonalInfo} onSubmit = {this.formSubmitHandler}>
                      <label className ={styles.Label}>
                                First name
                            <input
                              className ={styles.Input}
                              type="text"
                              name="firstName"
                              value={this.state.personalInfoForm.firstName}
                              onChange={(event)=>this.handleChange}
                            />
                      </label>

                      <label className ={styles.Label}>
                                Last name
                            <input
                              className ={styles.Input}
                              type="text"
                              name="lastName"
                              value={this.state.personalInfoForm.lastName}
                              onChange={this.handleChange}
                            />
                      </label>

                      <label className ={styles.Label}>
                                    Email
                              <input
                                className ={styles.Input}
                                type="email"
                                name="email"
                                value={this.state.personalInfoForm.email}
                                onChange={this.handleChange}
                              />
                      </label>

                      <label className ={styles.Label}>
                                    Address
                              <textarea
                                 className ={styles.Input}
                                type="text"
                                name="address"
                                value={this.state.personalInfoForm.address}
                                onChange={this.handleChange}
                              />
                        </label>

                        <label className ={styles.Label}>
                                    City
                              <input
                                    className ={styles.Input}
                                    type="text"
                                    name="city"
                                    value={this.state.personalInfoForm.city}
                                    onChange={this.handleChange}
                                  />
                            </label>

                            <label className ={styles.Label}>
                                        Country
                                   <select className ={styles.Input} name="country" onChange={this.handleChange} value={this.state.country}>
                                            <option value="Germany">Germany</option>
                                            <option value="India">India</option>
                                            <option value="USA">USA</option>
                                            <option value="Russia">Russia</option>
                                    </select>
                            </label>

                            <label className ={styles.Label}>
                                        Phone
                                    <input
                                      className ={styles.Input}
                                      type="number"
                                      name="phone"
                                      value={this.state.phone}
                                      onChange={this.handleChange}
                                    />
                             </label>
                      <PersonalInfoSummary/>
                      /*<p> Your First name is: {this.state.firstName}</p>
                      <p> Your Last name is: {this.state.lastName}</p>
                      <p> Your Email is: {this.state.email}</p>
                      <p> Your Address is: {this.state.address}</p>
                      <p> Your City is: {this.state.city}</p>
                      <p> Your Country is: {this.state.country}</p>
                      <p> Your Phone is: {this.state.phone}</p>

                      <p className={classes.join(' ')}> Some data missing </p>*/
                      <Button clicked = {this.handleButtonClick}> SAVE & NEXT </Button>
                    </form>
                 </Aux>
            );
        }
        }
                /*personalInfo:{
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
            }*/
                    /*address: ' ',
                    email: '',
                    phone: ' ',
                    city: ' ',
                    zipcode: ' ',
                    country: ' '*/



    /*inputChangeHandler = () => {
                //console.log(event);

                                *//*address: event.target.value,
                                email: event.target.value,
                                phone: event.target.value,
                                city: event.target.value,
                                zipcode: event.target.value,
                                country: event.target.value*//*
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
        *//*<div className = {styles.PersonDetails}>
            <p> First name : {props.firstName} </p>
            <input type = "text" onChange = {props.changed} />
            <p> Last name : {props.lastName} </p>
            <p> {props.children} </p>
            <input type = "text" onChange = {props.changed} />


         </div>*//*
    );
   }
}
*/
export default PersonalInfo;