const express = require('express');
const addMiddlewareTo = require('./middleware/decorate.middleware');
const delegateRoutes = require('./routers/delegate.router');

const app = express();

addMiddlewareTo(app);
delegateRoutes(app);

const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});