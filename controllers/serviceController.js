const { MongoClient, ObjectID } = require('mongodb');


function serviceController (config) {

    //Note for ADD: insertService and deleteService (POST)

    function insertService(req, res) {
        (async function mongo() {

        } ());
    }

    function deleteService(req, res) {
        (async function mongo() {

        } ());
    }

    function updateService(req, res) {
        (async function mongo() {

        } ());
    }

    function getAllServices(req, res) {
        (async function mongo() {
            let client;
            try {
                client = await MongoClient.connect(config.mongoServer, { useNewUrlParser: true });
                const db = client.db(config.mongoDatabase);
                const col = await db.collection('services');
                const services = await col.find().toArray();
                res.json(services);                
                client.close();
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
                client = await MongoClient.connect(config.mongoServer, { useNewUrlParser: true });
                const db = client.db(config.mongoDatabase);
                const col = await db.collection('services');
                const service = await col.findOne({ _id: new ObjectID(id)}, (err, data) => {
                    if (!err) {
                        console.log(`SERVICE DETAILS: ${JSON.stringify(data)}`);
                        res.json(data);
                    }
                    else {
                        console.log(err.stack);
                    }
                });
                               
                client.close();
            }
            catch (err) {
                console.log(err.stack);
            }
        } ());
    }

    return {
        getAllServices,
        getServiceById,
        insertService,
        deleteService,
        updateService
    };
}

module.exports = serviceController;