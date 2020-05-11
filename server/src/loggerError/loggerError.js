const fs = require('fs');
import CONSTANTS from './../constants';
import moment from 'moment';

module.exports =  (err) => {
  const data = {
    message: err.message,
    time: moment().format('x'),
    code: err.code,
    stackTrace: err.stack,
  };
  fs.writeFile(CONSTANTS.ERROR_LOGGER_FILE, JSON.stringify(data)
      + '\n', { flag:'a' }, (err) => {
    if (err)
      throw err;
  });
};
