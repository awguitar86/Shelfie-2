const express = require('express');
const bodyParser = require('body-parser');
const addMiddlewareTo = require('./middleware/decorate.middleware');
const delegateRoutes = require('./routers/delegate.router');
const { getDb } = require('./database/bootstrap.database');

const app = express();

addMiddlewareTo(app);
delegateRoutes(app);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});