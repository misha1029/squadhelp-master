import moment from 'moment';
import fs from 'fs';
import readline from 'readline';
import CONSTANTS from './../constants';
import addFile from "./addContentToFile";


const fileCreationTime = moment('00:37', 'HH:mm');
const createThrough = fileCreationTime.diff(moment());

const createFile = createThrough > 0 ? createThrough : (createThrough + 86400000);

var now = new Date().toLocaleString();

function createFileError (delay) {
  setTimeout(() => {
    const reader = fs.createReadStream(CONSTANTS.ERROR_LOGGER_FILE);
    const rl = readline.createInterface({
      input: reader,
      output: reader,
    });

    const urlErrorLoggerFile = `./src/loggerError/newFileError/${now}.json`;

    addFile(urlErrorLoggerFile, rl);

    rl.on('close', function () {
      fs.truncate(CONSTANTS.ERROR_LOGGER_FILE,  function(){
        console.log(`Errors moved to archive file ${urlErrorLoggerFile}`);
      });
    });
    createFileError(86400000);
  }, delay);
}

module.exports = createFileError(createFile);
