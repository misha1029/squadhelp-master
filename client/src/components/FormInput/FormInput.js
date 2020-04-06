import React, {useRef, useEffect} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'

const FormInput = props => {
	const {label, input, type, meta: {touched, error, visited}, className, errorClassName, containerClassName} = props;


	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef && error && touched) {
			inputRef.current.setCustomValidity(error);
		}else if (!error && visited){
			inputRef.current.setCustomValidity('');
		}
	});
	return (
			<div className={containerClassName}>
				<input ref={inputRef} {...input}
				       placeholder={label}
				       type={type}
				       className={className}
				/>
				{
					touched && error &&
					<div className={errorClassName}>{error}</div>}
			</div>
	);
};


FormInput.propTypes = {
	className: PropTypes.string,
	errorClassName: PropTypes.string,
	containerClassName: PropTypes.string,
};

export default FormInput;