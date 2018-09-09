const express = require('express');
const adminRouter = express.Router();
const adminController = require('../controllers/adminController');

function router (config) {
    const { testingApi } = adminController(config);

    adminRouter.route('/')
        .get(testingApi);

    return adminRouter;
}

module.exports = router;