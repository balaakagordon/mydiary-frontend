import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInputField from './FormComponents/FormInputField';
import Button from './FormComponents/Button';


const SignupForm = () => {

    // this.handleFormInput = this.handleFormInput.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleSuccess = this.handleSuccess.bind(this);
    // this.handleErrors = this.handleErrors.bind(this);
    // this.handleLoader = this.handleLoader.bind(this);




  // render() {
    
    return (
      <div className="auth-form">
        <div className="loader">{this.props.showLoader}</div>
        <FormInputField type={'text'}
            title={'First Name'}
            name={'firstName'}
            value={this.props.user.firstName}
            placeholder={'Enter your first name'}
            handleChange={this.props.handleFormInput}
            className={'auth-form-input'}
        />
        <FormInputField type={'text'}
            title={'Last Name'}
            name={'lastName'}
            value={this.props.user.lastName}
            placeholder={'Enter your last name'}
            handleChange={this.props.handleFormInput}
            className={'auth-form-input'}
        />
        <FormInputField type={'text'}
            title={'Email'}
            name={'email'}
            value={this.props.user.email}
            placeholder={'Enter your email address'}
            handleChange={this.props.handleFormInput}
            className={'auth-form-input'}
        />
        <FormInputField type={'password'}
            title={'Password'}
            name={'password'}
            value={this.props.user.password}
            placeholder={'Enter your password'}
            handleChange={this.props.handleFormInput}
            className={'auth-form-input'}
        />
        <FormInputField type={'password'}
            title={'Confirm Password'}
            name={'confirmedPassword'}
            value={this.props.user.confirmPassword}
            placeholder={'Re-enter your password'}
            handleChange={this.props.handleFormInput}
            className={'auth-form-input'}
        />
        <div className="auth-link">
          <Link to="/">already have an account?</Link>
        </div>
        <div className='row'>
          <div className='form-buttons'>
            <Button
                action={this.props.handleFormSubmit}
                title={'Submit'}
                className='auth-button auth-submit'
            />
            <Button
                action={this.props.handleClearForm}
                title={'Cancel'}
                className='auth-button auth-cancel'
            />
          </div>
        </div>
      </div>
    );
  // }
}

export default SignupForm;
