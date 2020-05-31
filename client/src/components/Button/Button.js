import React, {useEffect, useState} from 'react';
import styles from './Button.module.sass';

function Button() {

	const [appState, changeState] = useState({
		activeButtons: null,
		buttons: [
			{
				answer: 'Yes',
				description: 'The Domain should exactly match the name'
			},
			{
				answer: 'Yes',
				description: 'But minor variations are allowed (Recommended)'
			},
			{
				answer: 'No',
				description: 'I am only looking for a name, not a Domain'
			},
		]

	});

	useEffect(() => {

	});

	function toggleActive(index) {
		changeState({...appState, activeButtons: appState.buttons[index]});
	}

	function toggleActiveStyles(index) {
		if (appState.buttons[index] === appState.activeButtons) {
			return styles.selectedContainer;
		} else {
			return styles.container
		}
	}

	function toggleActiveStylesYesNo(index) {
		if (appState.buttons[index] === appState.activeButtons) {
			return styles.selectedButtonTitle;
		} else {
			return styles.buttonTitle;
		}
	}

	return (
			<>
				{appState.buttons.map((elements, index) => (
						<div key={index} className={toggleActiveStyles(index)} onClick={() => {toggleActive(index)}}>
							<div className={toggleActiveStylesYesNo(index)}>{elements.answer}</div>
							<h1 className={styles.buttonText}>{elements.description}</h1>
						</div>
				))
				}
			</>
	)
}

export default Button;
