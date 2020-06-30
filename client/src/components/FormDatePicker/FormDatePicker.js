import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from './FormDatePicker.module.sass';


const FormDatePicker = (props) => {
    const {input, label} = props;

    return (
        <div className={styles.inputContainer}>
            <DatePicker {...input}
                        selected={input.value}
                        dateFormat="MMMM d, yyyy h:mm"
                        minDate={new Date()}
                        showMonthDropdown
                        showYearDropdown
                        showTimeInput
                        placeholderText={label}
                        className={styles.input}
                        autoComplete='off'
            />
        </div>
    );

};

export default FormDatePicker;