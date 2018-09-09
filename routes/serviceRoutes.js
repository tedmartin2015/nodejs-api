const express = require('express');
const serviceRouter = express.Router();
const serviceController = require('../controllers/serviceController');

function router(config) {
    const { getAllServices, getServiceById } = serviceController(config);

    serviceRouter.route('/')
        .get(getAllServices);

    serviceRouter.route('/:id')
        .get(getServiceById);

    return serviceRouter;
}

module.exports = router;