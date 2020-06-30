import React, {useEffect, useState} from "react";
import moment from 'moment';
import styles from './Timer.module.sass';

const Timer = ({eventName, eventTime, now}) => {

    const calculateTimeLeft = () => {
        const diffTime = moment(eventTime).diff(moment());
        const duration = moment.duration(diffTime);

        return duration > 0 ? {
            ...{days: Math.floor(duration.asDays())},
            ...{hours: Math.floor(duration.hours())},
            ...{minutes: Math.floor(duration.minutes())},
            ...{seconds: Math.floor(duration.seconds())},
        } : {};

    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    console.log(setTimeLeft);
    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }
        timerComponents.push(<span>{timeLeft[interval]} {interval}{" "}</span>
        );
    });

    return (
        <>
            <li className={styles.container}>
                {Object.keys(timeLeft).length === 0 &&
                <div className={styles.mark}/>}
                {Object.keys(timeLeft).length > 0 &&
                <div style={{width: `${Math.round(((new Date() - now) / (eventTime - now)) * 100)}%`}} className={styles.progress}/>}
                <div>{eventName}</div>
                <div>
                    {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                </div>
            </li>
        </>
    );
}

export default Timer;