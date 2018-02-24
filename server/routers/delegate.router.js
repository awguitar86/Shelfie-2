const binsRouter = require('./bin.router');

function delegateRoutesFor(app) {
    app.use('/api/bins', binsRouter);

    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resource at " + req.originalUrl });
    });

    return app;
};

module.exports = delegateRoutesFor;