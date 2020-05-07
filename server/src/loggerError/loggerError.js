const fs = require('fs');
import moment from 'moment';
import CONSTANTS from './../constants';

module.exports =  (err) => {
	const option = {
		MESSAGE: err.message,
		TIME: moment().format('LLLL'),
		CODE: err.code,
		STACKTRACE: err.stack,
	};
	fs.writeFile(CONSTANTS.ERROR_LOGGER_FILE, JSON.stringify(option)+ ',' + '\n', { flag:'a' }, (err) => {
		if (err)
			throw err;
	});
};