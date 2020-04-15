import React from "react";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Header from "../../components/Header/Header";
import styles from './TransactionPage.module.sass';
import UserTransactionTable from "../../components/UserTransactionTable/UserTransactionTable";

const data = [
	{
		id: 1,
		operationType: true,
		sum: '-350$'
	},
	{
		id: 2,
		operationType: false,
		sum: '+350$'
	},
	{
		id: 3,
		operationType: true,
		sum: '+1000$'
	}
]

const TransactionPage = props => {
	return (
			<>
				<Header/>
				<div className={styles.pageContainer}>
					{
						data ? <UserTransactionTable data={data} className={styles.tableContainer}/>
								: <div className={styles.alert}>Don`t have transaction</div>
					}
					<Link to='/dashboard' className = {styles.dashboard}>Dashboard</Link>
				</div>
			</>
	);
};

export default TransactionPage;