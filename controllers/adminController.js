const { MongoClient, ObjectID } = require('mongodb');

function adminController (config) {

    function testingApi (req, res) {
        res.json('Testing... Please forgive my intrusion.');
    };

    return {
        testingApi
    };
}

module.exports = adminController;