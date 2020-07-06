import React from 'react';
import styles from './ResetPasswordForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import Schems from '../../validators/validationSchems';
import customValidator from '../../validators/validator';
import FormInput from "../FormInput/FormInput";

const ResetPasswordForm = ({handleSubmit, isFetching, submitting}) => {

    const formInputClasses = {
        containerStyle: styles.inputContainer,
        className: styles.input,
        warningStyle: styles.fieldWarning,
        invalidStyle: styles.notValid,
        validStyle: styles.valid,
    };

    return (
        <form onSubmit={handleSubmit(handleSubmit)}>
            <Field
                name='email'
                className = {styles.input}
                containerClassName = {styles.inputContainer}
                errorClassName = {styles.fieldWarning}
                component={FormInput}
                type='text'
                label='Email Address'
            />
            <Field
                name='newPassword'
                className = {styles.input}
                containerClassName = {styles.inputContainer}
                errorClassName = {styles.fieldWarning}
                component={FormInput}
                type='password'
                label='New Password'
            />
            <button type='submit' disabled={submitting} className={styles.submitContainer}>
                <span className={styles.inscription}>{isFetching ? 'Submitting...' : 'Reset Password'}</span>
            </button>
        </form>
    );
};

export default reduxForm({
    form: 'resetPassword',
    validate: customValidator(Schems.ResetPasswordSchema),
})(ResetPasswordForm);