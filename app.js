const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3020;
const mongoServer = process.env.MONGO_SERVER;
const mongoDatabase = process.env.MONGO_DATABASE;

const dbConfig = { mongoServer, mongoDatabase, port };

const adminRouter = require('./routes/adminRoutes') (dbConfig);
const serviceRouter = require('./routes/serviceRoutes') (dbConfig);

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRouter);
app.use('/services', serviceRouter);

app.listen(port, () => {
    console.log(`The system is listening to port ${port}. Carry on!`);
});