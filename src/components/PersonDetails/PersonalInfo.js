import React, {Component} from 'react';
import Aux from '../../hoc/Aux';
import styles from './PersonalInfo.module.css';
import Input from '../Input/Input';
import { Router, Route, Switch } from "react-router";

class PersonalInfo extends Component {
        state = {
                firstName : " ",
                lastName : " ",
                address : " ",
                city : " ",
                zipCode : " ",
                country :  " ",
                email: " ",
                phone: " "
        }

        handleChange = (event) =>{
            const value = event.target.value;
              this.setState({
                ...this.state,
                [event.target.name]: value
              });
            }

        continuePersonalInfoHandler = () => {

        }

        render(){
            return(
                <Aux>
                <span className ={styles.PersonalInfoLabel}> PERSONAL INFO </span>
                <form className ={styles.PersonalInfo}>
                      <label className ={styles.Label}>
                        First name
                        <input
                          className ={styles.Input}
                          type="text"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label className ={styles.Label}>
                        Last name
                        <input
                          className ={styles.Input}
                          type="text"
                          name="lastName"
                          value={this.state.lastName}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label className ={styles.Label}>
                          Address
                          <textarea
                             className ={styles.Input}
                            type="text"
                            name="address"
                            value={this.state.address}
                            onChange={this.handleChange}
                          />
                        </label>
                        <label className ={styles.Label}>
                              City
                              <input
                                    className ={styles.Input}
                                    type="text"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleChange}
                                  />
                            </label>
                            <label className ={styles.Label}>
                                ZIP Code
                                <input
                                  className ={styles.Input}
                                  type="number"
                                  name="zipCode"
                                  value={this.state.zipCode}
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
                                Email
                                <input
                                  className ={styles.Input}
                                  type="email"
                                  name="email"
                                  value={this.state.email}
                                  onChange={this.handleChange}
                                />
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
                      <p> Your firstName is: {this.state.firstName}</p>
                      <p> Your lastName is: {this.state.lastName}</p>
                      <p> Your address is: {this.state.address}</p>
                      <p> Your city is: {this.state.city}</p>
                      <p> Your ZipCode is: {this.state.zipCode}</p>
                      <p> Your country is: {this.state.country}</p>
                      <p> Your email is: {this.state.email}</p>
                      <p> Your phone is: {this.state.phone}</p>
                      <button className ={styles.Button}> NEXT </button>
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