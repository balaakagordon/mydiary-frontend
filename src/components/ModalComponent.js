import React from 'react';
import Modal from './Modal';
import FormInputField from './FormComponents/FormInputField';
import Button from './FormComponents/Button';

const ModalComponent = (props) => {
    return (
        <div>
            <Modal showModal={props.showModal} handleClose={props.handleClose}>
                <div>
                    <FormInputField type={'text'}
                        title={'First Name'}
                        name={'firstName'}
                        placeholder={'Enter your first name'}
                        handleChange={props.handleInput}
                        className={'auth-form-input'}
                    />
                    <FormInputField type={'text'}
                        title={'Last Name'}
                        name={'lastName'}
                        placeholder={'Enter your last name'}
                        handleChange={props.handleInput}
                        className={'auth-form-input'}
                    />
                    <FormInputField type={'text'}
                        title={'Email'}
                        name={'email'}
                        placeholder={'Enter your email address'}
                        handleChange={props.handleInput}
                        className={'auth-form-input'}
                    />
                    <FormInputField type={'password'}
                        title={'Change Password'}
                        name={'password'}
                        placeholder={'Enter your password'}
                        handleChange={props.handleInput}
                        className={'auth-form-input'}
                    />
                    <FormInputField type={'password'}
                        title={'Confirm New Password'}
                        name={'confirmedPassword'}
                        placeholder={'Re-enter your password'}
                        handleChange={props.handleInput}
                        className={'auth-form-input'}
                    />
                </div>
                <div>
                    <Button
                        action={props.editProfile}
                        title={'Save Details'}
                        className='auth-button auth-submit'
                    />
                    <Button
                        action={props.handleClose}
                        title={'Cancel'}
                        className='auth-button auth-cancel'
                    />
                </div>
            </Modal>
        </div>
    )
}

export default ModalComponent