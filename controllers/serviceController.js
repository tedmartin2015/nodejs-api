const { MongoClient, ObjectID } = require('mongodb');


function serviceController (config) {

    function getAllServices(req, res) {
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(config.mongoServer, { useNewUrlParser: true});
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

    function getServiceById(req, res) {
        (async function mongo() {
            const { id } = req.params;
            let client;
            try { 
                console.log(`SERVICEID: ${id}`);
                client = await MongoClient.connect(config.mongoServer, { useNewUrlParser: true});
                const db = client.db(config.mongoDatabase);
                const col = await db.collection('services');
                const service = await col.findOne({ _id: new ObjectID(id)});
                console.log(service)
                res.json(service);
                client.close();
            }
            catch (err) {
                console.log(err.stack);
            }
        } ());
    }

    return {
        getAllServices,
        getServiceById
    };
}

module.exports = serviceController;