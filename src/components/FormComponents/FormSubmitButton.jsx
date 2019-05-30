import React from 'react';

const FormSubmitButton = (props) => {
    return (
        <button
            style= {props.style}
            className={props.className}
            onClick= {props.action}>
            {props.title}
        </button>
    );
}

export default FormSubmitButton;