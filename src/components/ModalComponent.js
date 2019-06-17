import React, { Component } from 'react';
import Modal from './Modal';
import FormInputField from './FormComponents/FormInputField';
import Button from './FormComponents/Button';

class ModalComponent extends Component {

    render() {
        return (
            <div>
                <Modal showModal={this.props.showModal} handleClose={this.props.handleClose}>
                    <div>
                        <FormInputField type={'text'}
                            title={'First Name'}
                            name={'firstName'}
                            placeholder={'Enter your first name'}
                            handleChange={this.props.handleInput}
                            className={'auth-form-input'}
                        />
                        <FormInputField type={'text'}
                            title={'Last Name'}
                            name={'lastName'}
                            placeholder={'Enter your last name'}
                            handleChange={this.props.handleInput}
                            className={'auth-form-input'}
                        />
                        <FormInputField type={'text'}
                            title={'Email'}
                            name={'email'}
                            placeholder={'Enter your email address'}
                            handleChange={this.props.handleInput}
                            className={'auth-form-input'}
                        />
                        <FormInputField type={'password'}
                            title={'Change Password'}
                            name={'password'}
                            placeholder={'Enter your password'}
                            handleChange={this.props.handleInput}
                            className={'auth-form-input'}
                        />
                        <FormInputField type={'password'}
                            title={'Confirm New Password'}
                            name={'confirmedPassword'}
                            placeholder={'Re-enter your password'}
                            handleChange={this.props.handleInput}
                            className={'auth-form-input'}
                        />
                    </div>
                    <div>
                        <Button
                            action={this.props.editProfile}
                            title={'Save Details'}
                            className='auth-button auth-submit'
                        />
                        <Button
                            action={this.props.handleClose}
                            title={'Cancel'}
                            className='auth-button auth-cancel'
                        />
                    </div>
                </Modal>
            </div>
        )

    }
}

export default ModalComponent