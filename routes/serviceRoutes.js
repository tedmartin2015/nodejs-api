const express = require('express');
const serviceRouter = express.Router();
const serviceController = require('../controllers/serviceController');

function router(config) {
    const { getAll } = serviceController(config);

    serviceRouter.route('/getAll')
        .get(getAll);

    return serviceRouter;
}

module.exports = router;