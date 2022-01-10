const express = require("express");
const axios = require("axios");
const routes = express.Router();

routes.post('/devs', async (req, res) => {
    const {github_username} = req.body;


    const response = await axios.get(`https://api.github.com/users/${github_username}`);
    console.log(response.data);
    return res.json({message: "hello"})
});

module.exports = routes;