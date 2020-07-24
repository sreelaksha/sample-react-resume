import React, {Component} from 'react';
import DatePicker from 'react-datepicker';

import Aux from '../../hoc/Aux';
import styles from './Experience.module.css';
import Input from '../Input/Input';
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
                workHereCheckbox: " ",
        }

        handleChange = (event) =>{
            const value = event.target.value;
              this.setState({
                ...this.state,
                [event.target.name]: value
              });
            }



        render(){
            return(
                <Aux>
                <span className ={styles.PersonalInfoLabel}> EXPERIENCE </span>
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
                                          value={this.state.workHereCheckbox}
                                          onChange={this.handleChange}
                                />
                              I presently work here </label>
                          <Button> SAVE & NEXT </Button>
                    </form>
                 </Aux>
            );
        }
        }

export default Experience;