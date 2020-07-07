const express = require('express');
const router = express.Router();
const { notFound, genericErrorHandler } = require('../middleware/errorHandlers');

// defin route handlers
const peopleRouter = require('./peopleRouter');

// basic response on Root endpoint
router.get('/', function(req, res){
    res.status(200).json({
        statusCode: 200,
        message: 'welcome to the API'
    });
});

// apply handlers to specific routes
router.use('/people', peopleRouter);

// if none of the above routes handle the request it will error out here
router.use(notFound);
router.use(genericErrorHandler);

module.exports = router;