import React from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';

const input = (props) => {
    let inputElement = null;
    switch(props.elementType){
            case('input'):
                inputElement = <input className = {styles.inputElement}
                                        {...props.elementConfig}
                                        value ={props.value}
                                        onChange ={props.changed}/>;
            break;
            /*case('textarea'):
                inputElement = <textarea className = {styles.inputElement}
                                        {...props.elementConfig}
                                        value ={props.value}
                                        onChange ={props.changed}/>;
            break;
            case('select'):
                        inputElement = (
                                        <select
                                            className = {styles.inputElement}
                                            value ={props.value}
                                            onChange ={props.changed}>
                                                {props.elementConfig.options.map( option => (
                                                    <option
                                                        key = {option.value}
                                                        value = {option.value}>
                                                         {option.displayValue}
                                                    </option>
                                                ))}
                                        </select>
                                       );
             break;*/
             default:
                inputElement = <input className = {styles.InputElement}
                                        {...props.elementConfig}
                                        value ={props.value}
                                        onChange ={props.changed}/>;
         }
         return(
                 <div className = {styles.Input}>
                     <label className = {styles.Label}> {props.label} </label>
                     {inputElement}
                 </div>
             );
         }

   input.propTypes = {
        elementType: propTypes.string.isRequired
   };

export default input;