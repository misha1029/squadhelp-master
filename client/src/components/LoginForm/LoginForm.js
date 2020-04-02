import React from 'react';
import {connect} from 'react-redux';
import {authActionLogin, clearAuth} from "../../actions/actionCreator";
import styles from './LoginForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import Error from '../../components/Error/Error';
import PropTypes from 'prop-types';


class LoginForm extends React.Component {

    componentWillUnmount() {
        this.props.authClear();
    }

    submit = (values) => {
        this.props.loginRequest(values);
    };


  formInputClasses = {
    classInputStyle: styles.input,
    classNotValid:  styles.notValid,
    classValid:  styles.valid,
    classInputContainer: styles.inputContainer,
    classWarningForContainer: styles.fieldWarning,
  };

    render() {
        const {isFetching} = this.props.auth;
        const {handleSubmit, submitting} = this.props;
        return (

                <form onSubmit={handleSubmit(this.submit)}>
                    <Field
                        name='email'
                        {...this.formInputClasses}
                        component={FormInput}
                        type='text'
                        label='Email Address'
                    />
                    <Field
                        name='password'
                        {...this.formInputClasses}
                        component={FormInput}
                        type='password'
                        label='password'
                    />
                    <button type='submit' disabled={submitting} className={styles.submitContainer}>
                        <span className={styles.inscription}>{isFetching ? 'Submitting...' : 'LOGIN'}</span>
                    </button>
                </form>

        );
    }
}

const mapStateToProps = (state) => {
    const {auth} = state;
    return {auth};
};

const mapDispatchToProps = (dispatch) => (
    {
        loginRequest: (data) => dispatch(authActionLogin(data)),
        authClear: () => dispatch(clearAuth())
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate: customValidator(Schems.LoginSchem)
})(LoginForm));