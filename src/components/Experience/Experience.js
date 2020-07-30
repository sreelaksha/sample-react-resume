import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import styles from './Experience.module.css';
import Button from '../Button/Button';


class Experience extends Component {

        state = {
                employer : " ",
                jobTitle : " ",
                city : " ",
                state : " ",
                startDate : " ",
                endDate :  " ",
                jobDescription: " ",
                workHereCheckbox: false,
                validation:{
                    required: true,
                    valid: false,
                    touched: false,
                },
                loading: false,
                formIsValid: false
        }

        componentDidMount(){
                console.log(this.props);
        }

        /*checkValidity(value, rules){
                let isValid = true;

                if(!rules){
                    return true;
                }

                if(rules.required){
                    isValid = value.trim() !== '' && isValid;
                }
                if(rules.minLength){
                            isValid = value.length >= rules.minLength && isValid;
                        }
                        if(rules.maxLength){
                            isValid = value.length <= rules.maxLength && isValid;
                        }
                        return isValid;
                 }
*/

        navigateBack = () => {
                this.props.history.goBack();
        }

        handleButtonClick =(id) =>{
                   this.props.history.push('/education/' +id );
        }

        handleChange = (event) =>{
            const value = event.target.value;
              this.setState({
                ...this.state,
                [event.target.name]: value
              });
            }

        checkboxHandler = (event) => {
                         this.setState({workHereCheckbox : event.target.checked});
                        console.log(event.target.checked)

                    }


        render(){
            return(
                <Aux>
                <span className ={styles.ExperienceLabel}> EXPERIENCE </span>
                <form className ={styles.Experience} >
                      <label className ={styles.Label}>
                        Employer
                        <input
                          className ={styles.Input}
                          type="text"
                          name="employer"
                          value={this.state.employer}
                          onChange={this.handleChange}
                        />
                      </label>
                      <label className ={styles.Label}>
                          Job title
                          <input
                            className ={styles.Input}
                            type="text"
                            name="jobTitle"
                            value={this.state.jobTitle}
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
                              State
                              <input
                                className ={styles.Input}
                                type="text"
                                name="state"
                                value={this.state.state}
                                onChange={this.handleChange}
                              />
                            </label>
                           <label className ={styles.Label}>
                                         Start date
                                         <input
                                           className ={styles.Input}
                                           type="date"
                                           name="startDate"
                                           value={this.state.startDate}
                                           onChange={this.handleChange}
                            />
                             </label>
                             <label className ={styles.Label}>
                                      End date
                                      <input
                                        className ={styles.Input}
                                        type="date"
                                        name="endDate"
                                        value={this.state.endDate}
                                        onChange={this.handleChange}
                             />
                             </label>
                             <label className ={styles.LabelCheckbox}>
                             <input
                                          className ={styles.InputCheckbox}
                                          type="checkbox"
                                          name="workHereCheckbox"
                                          checked={this.state.workHereCheckbox}
                                          onChange={this.checkboxHandler}
                                />
                              I presently work here </label>
                             <p> Your employer is: {this.state.employer}</p>
                            <p> Your jobTitle is: {this.state.jobTitle}</p>
                            <p> Your city is: {this.state.city}</p>
                            <p> Your state is: {this.state.state}</p>
                            <p> Your startDate is: {this.state.startDate}</p>
                            <p> Your endDate is: {this.state.endDate}</p>
                            <p> Your workHereCheckbox is: {this.state.workHereCheckbox.toString()}</p>
                            <div className = {styles.ExperienceButtonDiv}>
                                <div className = {styles.ExperienceBackButtonDiv}>
                                    <Button clicked={this.navigateBack}> BACK </Button></div>
                                <div className = {styles.ExperienceNextButtonDiv} >
                                    <Button clicked = {this.handleButtonClick}> SAVE & NEXT </Button>
                                </div>
                               </div>
                    </form>
                 </Aux>
            );
        }
        }

export default Experience;