const express = require('express');
const serviceRouter = express.Router();
const serviceController = require('../controllers/serviceController');

function router(config) {
    const { getAllServices, getServiceById, insertService, deleteService } = serviceController(config);

    serviceRouter.route('/')
        .get(getAllServices);

    serviceRouter.route('/:id')
        .get(getServiceById);

    serviceRouter.route('/insert/:name/:provider/:servicesid/:bookid')
        .post(insertService);

    serviceRouter.route('/delete/:id')
        .post(deleteService);

    return serviceRouter;
}

module.exports = router;