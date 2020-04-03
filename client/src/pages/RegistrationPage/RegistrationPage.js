import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.sass';
import Logo from '../../components/Logo';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {authActionRegister, clearAuth, clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import article from './article.json';
import Error from "../../components/Error/Error";
import _ from 'lodash';

const RegistrationPage = ({clearError, authClear, register, error, ...props}) => {


	const handleSubmit = data => {
		register(_.omit(data, ['agreeOfTerms', 'agreeOfTerms']));
	};

	const articlesElement = article.map(article => (

					<>
						<div className={styles.headerArticle}>{article.header}
						</div>
						<div className={styles.article}>
							{article.article}
						</div>
					</>

			)
	);

	return (
			<div className={styles.signUpPage}>
				<div className={styles.signUpContainer}>
					<div className={styles.headerSignUpPage}>
						<Logo src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`}/>
						<div className={styles.linkLoginContainer}>
							<Link to='/login'
							      style={{textDecoration: 'none'}}><span>Login</span></Link>
						</div>
					</div>
					<div className={styles.signUpFormContainer}>
						{error && <Error data={error.data} status={error.status}
						                 clearError={authClear}/>}
						<div className={styles.headerFormContainer}>
							<h2>
								CREATE AN ACCOUNT
							</h2>
							<h4>
								We always keep your name and email address private.
							</h4>
						</div>

						<RegistrationForm onSubmit={handleSubmit}/>


					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.articlesMainContainer}>
						<div className={styles.ColumnContainer}>
							{articlesElement}
							<div className={styles.article}>
								Check out our <span className={styles.orangeSpan}>FAQs</span> or
								send us a <span
									className={styles.orangeSpan}>message</span>. For assistance
								with launching a contest,
								you can also call us at (877) 355-3585 or schedule a <span
									className={styles.orangeSpan}>Branding Consultation</span>
							</div>
						</div>
					</div>
				</div>
			</div>
	);
};

const mapStateToProps = state => (
		{
			auth: state.auth,
			initialValues: {
				role: CONSTANTS.CUSTOMER
			},
		}
);


const mapDispatchToProps = dispatch => {
	return {
		clearError: () => dispatch(clearErrorSignUpAndLogin()),
		authClear: () => dispatch(clearAuth()),
		register: data => dispatch(authActionRegister(data)),
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);

