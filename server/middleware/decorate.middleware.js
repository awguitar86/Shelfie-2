const bodyParser = require('body-parser');
const cors = require('cors');

function decorate(app) {

    app.use(bodyParser.json());
    app.use(cors());

    return app;
}

module.exports = decorate;