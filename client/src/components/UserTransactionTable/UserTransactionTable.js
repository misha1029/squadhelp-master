import React from "react";
import PropTypes from 'prop-types';

const UserTransactionTable = props => {
	const {data, className} = props;

	return (
			<table className={className}>
				<thead>
				<tr>
					<th>Id</th>
					<th>Income / Expense</th>
					<th>Amount of money</th>
				</tr>
				</thead>
				<tbody>
				{
					data.map(transaction => (
							<tr key={transaction.id}>
								<td>{transaction.id}</td>
								<td>
									{
										transaction.operationType ? 'Income' : 'Expense'
									}
								</td>
								<td>{transaction.sum}</td>
							</tr>
					))
				}
				</tbody>

			</table>
	)
}



UserTransactionTable.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number,
		operationType: PropTypes.bool,
		sum: PropTypes.number,
	}))
};


export default UserTransactionTable;


