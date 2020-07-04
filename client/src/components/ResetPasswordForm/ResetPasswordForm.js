import React from 'react';
import styles from './ResetPasswordForm.module.sass';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import Schems from '../../validators/validationSchems';
import customValidator from '../../validators/validator';
import FormInput from "../FormInput/FormInput";

const ResetPasswordForm = ({handleSubmit, isFetching, resetPassword}) => {

    const onSubmit = (values) => {
        resetPassword(values);
    };

    const formInputClasses = {
        containerStyle: styles.inputContainer,
        className: styles.input,
        warningStyle: styles.fieldWarning,
        invalidStyle: styles.notValid,
        validStyle: styles.valid,
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <button type='submit' disabled={isFetching} className={styles.submitContainer}>
                <span className={styles.inscription}>{isFetching ? 'Submitting...' : 'Reset Password'}</span>
            </button>
        </form>
    );
};




const mapDispatchToProps = dispatch => ({

});

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'resetPassword',
    validate: customValidator(Schems.ResetPasswordSchema),
})(ResetPasswordForm));