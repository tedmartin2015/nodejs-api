const { MongoClient, ObjectID } = require('mongodb');


function serviceController (config) {

    function getAll(req, res) {
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(config.mongoServer);
                const db = client.db(config.mongoDatabase);
                const col = await db.collection('services');
                const services = await col.find().toArray();
                res.json(services);                
                client.close()
            }
            catch (err) {
                console.log(err.stack);
            }

        } ());
    }

    return {
        getAll
    };
}

module.exports = serviceController;