import React, {Component} from 'react';

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
                <form className ={styles.Experience}>
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
                      <Button> NEXT </Button>
                    </form>
                 </Aux>
            );
        }
        }

export default Experience;