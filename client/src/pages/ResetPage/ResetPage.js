import React  from 'react';
import {Link} from "react-router-dom";
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import { connect } from 'react-redux';
import styles from "./ResetPage.module.sass";
import CONSTANTS from "../../constants";

const RecoverPage = (props) => {

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
                        <h2>Your password has been successfully reset. Go to the main page.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return state.userStore;
};

const mapDispatchToProps = (dispatch) => {
    return {
        checkAuth: (data) => dispatch(onlyForNotAuthorize(data))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPage);