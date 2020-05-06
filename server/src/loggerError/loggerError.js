const fs = require('fs');
import moment from 'moment';
import CONSTANTS from './../constants';

module.exports =  (err) => {
	const data = {
		MESSAGE: err.message,
		TIME: moment().format('LLLL'),
		CODE: err.code,
		STACKTRACE: err,
	};
	fs.writeFile(CONSTANTS.ERROR_LOGGER_FILE, JSON.stringify(data)+ ',' + '\n', { flag:'a' }, (err) => {
		if (err)
			throw err;
	});
};