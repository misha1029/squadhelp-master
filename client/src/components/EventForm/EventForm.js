import React from 'react';
import {connect} from 'react-redux';
import styles from './EventForm.module.sass';
import {Field, reduxForm, updateSyncErrors} from 'redux-form';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';
import FormInput from "../FormInput/FormInput";
import FormDatePicker from "../FormDatePicker/FormDatePicker";
import {createNewEvent} from '../../actions/actionCreator';


const EventForm = (props) => {
    const {handleSubmit, createEvent, reset} = props

    const onSubmit = (values) => {
        const {eventTime, reminderTime} = values;
        const now = new Date();

        if (eventTime > now && reminderTime > now) {
            createEvent({...values, now, timestamp: Date.now()});
            reset();
        }
    };

    const formInputClasses = {
        containerStyle: styles.inputContainer,
        className: styles.input,
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.eventForm}>
            <Field name='eventName'
                   {...formInputClasses}
                   component={FormInput}
                   type='text'
                   label='Event Name'
            />
            <Field name='eventTime'
                   {...formInputClasses}
                   component={FormDatePicker}
                   label='Event Date'
            />
            <Field name='reminderTime'
                   {...formInputClasses}
                   component={FormDatePicker}
                   label='Reminder Date'
            />
            <button type='Create Event'
                    className={styles.submitContainer}>
                <div className={styles.inscription}>CREATE EVENT</div>
            </button>
        </form>
    );
};

const mapDispatchToProps = dispatch => ({
    createEvent: (event) => dispatch(createNewEvent(event)),
});

export default connect(null, mapDispatchToProps)(reduxForm({
    form: 'event',
    validate: customValidator(Schems.EventSchema),
})(EventForm));