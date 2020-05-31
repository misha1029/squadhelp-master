import React from 'react';
import styles from './ButtonGroup.module.sass';
import Button from "../Button/Button";


const ButtonGroup = () => {

	return (
			<div className={styles.container}>
				<div className={styles.title}>
					<div className={styles.headerText}>Do you want a matching domain (.com URL) with your name?</div>
					<div className={styles.text}>If you want a matching domain, our platform will only accept those name suggestions where the domain is available. (Recommended)
					</div>
				</div>
				<div className={styles.buttonContainer}>
					{
						Button()
					}
				</div>
			</div>
	);
};

export default ButtonGroup;
