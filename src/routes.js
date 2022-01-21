const express = require('express');
const SessionController = require('./controller/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

module.exports = routes