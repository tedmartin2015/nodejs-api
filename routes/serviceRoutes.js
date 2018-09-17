const express = require('express');
const serviceRouter = express.Router();
const serviceController = require('../controllers/serviceController');

function router(config) {
    const { getAllServices, getServiceById, insertService } = serviceController(config);

    serviceRouter.route('/')
        .get(getAllServices);

    serviceRouter.route('/:id')
        .get(getServiceById);

    serviceRouter.route('/:name/:provider/:servicesid/:bookid')
        .post(insertService)

    return serviceRouter;
}

module.exports = router;