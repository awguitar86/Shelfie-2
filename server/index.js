const express = require('express');
const bodyParser = require('body-parser');
const { getDb } = require('./database/bootstrap.database');
getDb();

const app = express();

app.use(bodyParser.json());



const port = 8080;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});