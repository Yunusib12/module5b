const routes = require('express').Router();
const apiRoute = require('./apiRoute');
const ejsRoute = require('./ejsRoute');

routes.use('/', ejsRoute);
routes.use('/api', apiRoute);


module.exports = routes