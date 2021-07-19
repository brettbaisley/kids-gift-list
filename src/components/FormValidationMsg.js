import React from 'react';

const FormValidationMsg = ( {errors} ) => {
    const errorList = [];

    Object.keys(errors).map( (item) => {
        if (errors[item].type === 'required') {
            return errorList.push(<li>{item} is required</li>);
        }
        return null;
    });

    if (!errorList) return null;

    return (
        <>
        { errorList.length > 0 && 
            <ul className="error">
                { errorList }
            </ul>
        }
        </>
    )
}
export default FormValidationMsg;