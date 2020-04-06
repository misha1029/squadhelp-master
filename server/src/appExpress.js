const appExpress = require('express');
const router = require('./router');
const cors = require('cors');
const handlerError = require('./handlerError/handler');

const app = appExpress();

app.use(cors());
app.use(appExpress.json());
app.use('/public', appExpress.static('public'));
app.use(router);
app.use(handlerError);

module.exports=app;