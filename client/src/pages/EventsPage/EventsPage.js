import React from "react";
import styles from './EventsPage.module.sass'
import Header from "../../components/Header/Header";
import Timer from "../../components/Timer/Timer";
import EventForm from "../../components/EventForm/EventForm";
import {connect} from 'react-redux';


const EventsPage = (props) => {
	const {events, activeEvents} = props

	return (
		<>
			<Header/>
			<div className={styles.container}>
				<div className={styles.contentContainer}>
					<h1>Timer creation form</h1>
					<div className={styles.containerForm}>
						<EventForm/>
					</div>
					<div className={styles.containerList}>
						<ul className={styles.timer}>
							{
								events && events.map(event => <Timer {...event} activeEvents={activeEvents}/>)
							}
						</ul>
					</div>
				</div>
			</div>
		</>

	)
};

const mapStateToProps = state => state.eventsStore;

export default connect(mapStateToProps)(EventsPage);