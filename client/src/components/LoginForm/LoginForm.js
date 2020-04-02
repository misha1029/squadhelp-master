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


    render() {
        const {isFetching} = this.props.auth;
        const {handleSubmit, submitting} = this.props;

      const formInputClasses ={
        container: styles.inputContainer,
        className: styles.input,
        warning: styles.fieldWarning,
        validStyles: styles.valid,
        invalidStyles: styles.notValid,
      };

        return (

                <form onSubmit={handleSubmit(this.submit)}>
                    <Field
                        name='email'
                        {...formInputClasses}
                        component={FormInput}
                        type='text'
                        label='Email Address'
                    />
                    <Field
                        name='password'
                        {...formInputClasses}
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