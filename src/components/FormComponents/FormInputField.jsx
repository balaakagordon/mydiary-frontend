import React from 'react';


function createLabel(props) {
    return (
        <div className="col-label">
            <label htmlFor={props.name} className="auth-form-label">{props.title}</label>
        </div>
    )
}

const FormInputField = (props) => {
    return (
        <div>
            {props.title ? createLabel(props) : null}
            <div className={props.title ? "col-input" : "entry-title"}>
                <input
                    className={props.className}
                    id={props.name}
                    name={props.name}
                    type={props.type}
                    defaultValue={props.titleValue ? props.titleValue : null}
                    onChange={props.handleChange}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    )
}

export default FormInputField;