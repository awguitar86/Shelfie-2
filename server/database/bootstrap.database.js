const masssive = require('massive');
const connectionString = 'postgres://zwhcauxd:Z5T0Nb_PzlpguDKV0UPk2nK30-OqCQDW@baasu.db.elephantsql.com:5432/zwhcauxd?ssl=true';
let db;

massive(connectionString)
    .then( dbInstance => db = dbInstance)
    .catch( err => {
        throw new Error(`Massive connection unseccessful. ${err}`);
    });

    function getDb() {
        if(!db) {
            throw console.error('We have not connected to the database yet!');
        }

        return db;
    }

    module.exports = {
        getDb,
    };