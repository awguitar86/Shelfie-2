const express = require('express');
const getDb = require('../database/bootstrap.database');

const binsRouter = express.Router();

binsRouter.get('/find', (req, res) => {
    const db = getDb();
    db.get_bins()
        .then( bins => res.send(bins))
        .catch( err => res.send(err))
});

binsRouter.put('/update/:id', (req, res) => {
    const id = req.params.id;
    const { shelf, name, price, img_url } = req.body;
    const db = getDb();
    db.update_bins([id, shelf, name, price, img_url])
        .then( promise => res.send())
        .catch( err => res.send(err))
});

binsRouter.post('/create/:id', (req, res) => {
    const db = getDb();
    const { shelf, name, price, img_url } = req.body;
    const id = req.params.id;
    db.create_bins([id, shelf, name, price, img_url])
        .then( () => res.status(200).send())
        .catch( err => res.send(err))
});

binsRouter.delete('/delete/:id', (req, res) => {
    const db = getDb();
    db.delete_bins(req.params.id)
        .then( () => res.status(200).send())
        .catch( err => res.send(err))
});

module.exports = binsRouter;