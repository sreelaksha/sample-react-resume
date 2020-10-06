import React from 'react';

import Aux from '../../hoc/Aux';

const personalInfoSummary = (props) => {
    const personalInfoFormSummary = Object.keys(props.personalInfoForm)
        .map(infoKey => {
                return <p> {props.personalInfoForm[infoKey]} </p>
        });
    //console.log(props.personalInfoForm);
    return (
        <Aux>
            <p> Your Personal Info Summary </p>
           <div> {personalInfoFormSummary} </div>

        </Aux>

    );
}
export default personalInfoSummary;