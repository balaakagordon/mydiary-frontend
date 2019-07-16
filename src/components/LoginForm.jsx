import React from "react";
import { Link } from "react-router-dom";
import FormInputField from "./FormComponents/FormInputField";
import Button from "./FormComponents/Button";

const LoginForm = (props) => {
  return (
    <div className="auth-form">
      {props.showLoader}
      <FormInputField
        type={"text"}
        title={"Email"}
        name={"email"}
        value={props.user.email}
        placeholder={"Enter your email address"}
        handleChange={props.handleFormInput}
        className={'auth-form-input'}
      />
      <FormInputField
        type={"password"}
        title={"Password"}
        name={"password"}
        value={props.user.password}
        placeholder={"Enter your password"}
        handleChange={props.handleFormInput}
        className={'auth-form-input'}
      />
      <div className="auth-link">
        <Link to="/register">don't have an account?</Link>
      </div>
      <div className="row">
        <div className="form-buttons">
          <Button
            action={props.handleFormSubmit}
            title={"Submit"}
            className='auth-button auth-submit'
          />
          <Button
            action={props.handleClearForm}
            title={"Cancel"}
            className='auth-button auth-cancel'
          />

        </div>
      </div>
    </div>
  );
}

export default LoginForm;
