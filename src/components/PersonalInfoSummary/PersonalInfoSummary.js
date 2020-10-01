import React from 'react';

import Aux from '../../hoc/Aux';

const personalInfoSummary = (props) => {
    const personalInfoFormSummary = Object.keys(props.personalInfoForm)
    console.log('Hi personalInfoSummary');
    return (
        <Aux>
            <p> Your Personal Info Summary </p>
              <p> Your First name is: {props.firstName}</p>
                <p> Your Last name is: {props.lastName}</p>
                <p> Your Email is: {props.email}</p>
                <p> Your Address is: {props.address}</p>
                <p> Your City is: {props.city}</p>
                <p> Your Country is: {props.country}</p>
                <p> Your Phone is: {props.phone}</p>
        </Aux>

    );
}
export default personalInfoSummary;