const express = require("express");
const axios = require("axios");
const routes = express.Router();
const Dev = require("./models/Dev")


routes.post('/devs', async (req, res) => {
    const {github_username, techs} = req.body;

    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    
    const { name = login, avatar_url, bio } = apiResponse.data;
   

/*    const techsArray = techs.split(',').map(tech => tech.trim());

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
    });
*/
    return res.json(apiResponse.data);
});

module.exports = routes;