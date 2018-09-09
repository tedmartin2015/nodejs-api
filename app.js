const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3020;

app.listen(port, () => {
    console.log(`The system is listening to port ${port}. Carry on!`);
});