import React, {Component} from 'react';

import Aux from '../../hoc/Aux';
import styles from './Education.module.css';
import Button from '../Button/Button';


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
              <span className ={styles.EducationLabel}> EDUCATION </span>
                 <form className ={styles.Education} >
                       <label className ={styles.Label}>
                         School Name
                         <input
                           className ={styles.Input}
                           type="text"
                           name="schoolName"
                           value={this.state.schoolName}
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
                                Degree
                                <input
                                  className ={styles.Input}
                                  type="text"
                                  name="degree"
                                  value={this.state.degree}
                                  onChange={this.handleChange}
                           />
                            </label>
                            <label className ={styles.Label}>
                                  fieldOfStudy
                                  <input
                                    className ={styles.Input}
                                    type="text"
                                    name="fieldOfStudy"
                                    value={this.state.fieldOfStudy}
                                    onChange={this.handleChange}
                             />
                             </label>
                            <label className ={styles.Label}>
                                  graduationDate
                                  <input
                                    className ={styles.Input}
                                    type="date"
                                    name="graduationDate"
                                    value={this.state.graduationDate}
                                    onChange={this.handleChange}
                             />
                              </label>

                             <label className ={styles.LabelCheckbox}>
                                  <input
                                       className ={styles.InputCheckbox}
                                       type="checkbox"
                                       name="attendHereCheckbox"
                                       checked={this.state.attendHereCheckbox}
                                       onChange={this.checkboxHandler}
                                 />
                               I presently attend here </label>
                      <p> Your schoolName is: {this.state.schoolName}</p>
                     <p> Your city is: {this.state.city}</p>
                     <p> Your state is: {this.state.state}</p>
                     <p> Your degree is: {this.state.degree}</p>
                     <p> Your fieldOfStudy is: {this.state.fieldOfStudy}</p>
                     <p> Your graduationDate is: {this.state.graduationDate}</p>
                     <Button clicked = {this.handleButtonClick}> SAVE </Button>
                 </form>
         </Aux>
    );
  }

 }


export default Experience;