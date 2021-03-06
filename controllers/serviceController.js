const { MongoClient, ObjectID } = require('mongodb');


function serviceController (config) {

    //Note for ADD: insertService and deleteService (POST)

    function insertService(req, res) {
        (async function mongo() {
            const data = {
                servicesid: req.params.servicesid,
                name: req.params.name,
                provider: req.params.provider,
                bookId: req.params.bookid
            };
            
            let client;
            try {
                client = await MongoClient.connect(config.mongoServer, { useNewUrlParser: true });
                const db = client.db(config.mongoDatabase);
                const col = await db.collection('services');
                const response = await col.insertOne(data);

                client.close();
                res.json(response);
            }
            catch(err) {
                console.log(err.stack);
            }
        } ());
    }
 
    function deleteService(req, res) {
        (async function mongo() {
            const data = { _id: ObjectID(req.params.id) };

            //res.json(data);
            let client;
            try { 
                client = await MongoClient.connect(config.mongoServer, { useNewUrlParser: true });
                const db = client.db(config.mongoDatabase);
                const col = await db.collection('services');
                await col.deleteMany(data);
                client.close();
                res.json(data);
            }
            catch(err) {
                console.log(err.stack);
            }

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