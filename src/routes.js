const express = require("express");

const routes = express.Router();

routes.post('/', (req, res) => {
    return res.json("working!")
});

module.exports = routes;