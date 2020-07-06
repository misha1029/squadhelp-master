import React from "react";
import styles from './ResetPasswordPage.module.sass';
import {Link} from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import CONSTANTS from "../../constants";
import Error from "../../components/Error/Error";
import { connect } from 'react-redux';
import { updatePassword, clearAuth, clearErrorSignUpAndLogin } from '../../actions/actionCreator';

const ResetPasswordPage = ({error, authClear, updatePassword}) => {

    const handleSubmit = (values) => {
        updatePassword(values);
    }

    const clearFields = () => authClear();

    return (
        <div className={styles.mainContainer}>
            <div className={styles.PasswordRecoveryContainer}>
                <div className={styles.headerPasswordRecoveryPage}>
                    <Link to={'/'}><img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/></Link>
                    <div className={styles.linkPasswordRecoveryContainer}>
                        <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                        {error && <Error data={error.data} status={error.status} clearError={clearFields}/>}
                        <h2>RESET YOUR PASSWORD</h2>
                        <ResetPasswordForm onSubmit={handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => state.auth;

const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin()),
        authClear: () => dispatch(clearAuth()),
        updatePassword: (data) => dispatch(updatePassword(data)),
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordPage);