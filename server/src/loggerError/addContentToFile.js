import fs from 'fs';

const addFile = (urlErrorLoggerFile, rl) => {
  rl.on('line',  (line) => {
    const data = JSON.parse(line);
    fs.writeFile(urlErrorLoggerFile, JSON.stringify({
      message: data.message,
      code: data.code,
      time: data.time,
    })
				+ '\n', { flag:'a' }, (err) => {
      if (err)
        throw err;
    });
  });
};

export default addFile;
