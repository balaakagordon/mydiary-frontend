import React from 'react';
import { Link } from 'react-router-dom';
import FormInputField from './FormComponents/FormInputField';
import Button from './FormComponents/Button';


const SignupForm = (props) => {
  return (
    <div className="auth-form">
      <div className="loader">{props.showLoader}</div>
      <FormInputField type={'text'}
          title={'First Name'}
          name={'firstName'}
          value={props.user.firstName}
          placeholder={'Enter your first name'}
          handleChange={props.handleFormInput}
          className={'auth-form-input'}
      />
      <FormInputField type={'text'}
          title={'Last Name'}
          name={'lastName'}
          value={props.user.lastName}
          placeholder={'Enter your last name'}
          handleChange={props.handleFormInput}
          className={'auth-form-input'}
      />
      <FormInputField type={'text'}
          title={'Email'}
          name={'email'}
          value={props.user.email}
          placeholder={'Enter your email address'}
          handleChange={props.handleFormInput}
          className={'auth-form-input'}
      />
      <FormInputField type={'password'}
          title={'Password'}
          name={'password'}
          value={props.user.password}
          placeholder={'Enter your password'}
          handleChange={props.handleFormInput}
          className={'auth-form-input'}
      />
      <FormInputField type={'password'}
          title={'Confirm Password'}
          name={'confirmedPassword'}
          value={props.user.confirmPassword}
          placeholder={'Re-enter your password'}
          handleChange={props.handleFormInput}
          className={'auth-form-input'}
      />
      <div className="auth-link">
        <Link to="/">already have an account?</Link>
      </div>
      <div className='row'>
        <div className='form-buttons'>
          <Button
              action={props.handleFormSubmit}
              title={'Submit'}
              className='auth-button auth-submit'
          />
          <Button
              action={props.handleClearForm}
              title={'Cancel'}
              className='auth-button auth-cancel'
          />
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
