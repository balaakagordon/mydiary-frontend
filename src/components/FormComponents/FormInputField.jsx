import React from 'react';


function createLabel(props) {
    return (
        <label htmlFor={props.name} className="form-label">{props.title}</label>
    )
}

const FormInputField = (props) => {
    return (
        <div className="form-group">
            {props.title ? createLabel(props) : null}
            <input
                className="form-input"
                id={props.name}
                name={props.name}
                type={props.type}
                defaultValue={props.titleValue ? props.titleValue : null}
                // value={props.value ? props.value : null}
                onChange={props.handleChange}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default FormInputField;