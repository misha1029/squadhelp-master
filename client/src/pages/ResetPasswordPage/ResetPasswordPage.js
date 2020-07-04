import React from "react";
import styles from './ResetPasswordPage.module.sass';
import {Link} from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswordForm/ResetPasswordForm";
import CONSTANTS from "../../constants";
import Error from "../../components/Error/Error";

const ResetPasswordPage = ({error, clearError}) => {

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
                        {error && <Error data={error.data} status={error.status} clearError={clearError}/>}
                        <h2>RESET YOUR PASSWORD</h2>
                        <ResetPasswordForm/>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default ResetPasswordPage;