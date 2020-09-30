import React from 'react';

import Aux from '../hoc/Aux';

const personalInfoSummary = (props) => {
    const personalInfoFormSummary = Object.keys(props.personalInfoForm)
    console.log(props.personalInfoForm);
    return (
        <Aux>
            <p> Your Personal Info Summary </p>
        </Aux>

    );
}

export default personalInfoSummary;