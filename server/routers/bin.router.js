const express = require('express');
const getDb = require('../database/bootstrap.database');

const binRouter = express.Router();

binRouter.get('/find', (req, res) => {
    const db = getDb();
    db.get_bins()
        .then( bins => req.setEncoding(bins))
        .catch( err => res.send(err))
});

module.exports = (
    binRouter
);