import React  from 'react';
import styles from "../ResetPage/ResetPage.module.sass";
import {Link} from "react-router-dom";
import CONTANTS from '../../constants';
import { onlyForNotAuthorize } from '../../actions/actionCreator';
import { connect } from 'react-redux';
import CONSTANTS from "../../constants";


const RecoverPage = (props) => {

    window.localStorage.setItem(CONTANTS.ACCESS_TOKEN, props.match.params.id);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.PasswordRecoveryContainer}>
                <div className={styles.headerPasswordRecoveryPage}>
                    <Link to={'/'}><img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/></Link>
                    <div className={styles.linkContainer}>
                        <div className={styles.linkPasswordRecoveryContainer}>
                            <Link to='/login' style={{textDecoration: 'none'}}><span>Login</span></Link>
                        </div>
                        <div className={styles.linkPasswordRecoveryContainer}>
                            <Link to='/registration' style={{textDecoration: 'none'}}><span>Signup</span></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.form}>
                        <h2>Your password has been successfully reset. Go to the home page.</h2>
                    </div>
                    <div>
                        <Link to={'/'} className={styles.submitContainer}>
                            <span className={styles.inscription}>Home Page</span>
                        </Link>
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