const massive = require('massive');
const connectionString = 'postgres://zwhcauxd:Z5T0Nb_PzlpguDKV0UPk2nK30-OqCQDW@baasu.db.elephantsql.com:5432/zwhcauxd?ssl=true';
let db;

massive(connectionString)
    .then( dbInstance => {
        db = dbInstance;
        messageString = 'Connection to the database was successful.';
        return dbInstance.shelfie_init();
    })
    .catch( err => {
        throw err;
    });

    function getDb() {
        if(!db) {
            messageString = 'We have not connected to the database yet!';
            console.error(messageString);
            return messageString;
        }

        return db;
    }

    module.exports = getDb;