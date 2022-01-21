const axios = require('axios');
const parse = require('nodemon/lib/cli/parse');
const Dev = require('../models/Dev');
const parseStringAsArray = require('./utils/parseString');
module.exports = {

    async index(req, res){
        const devs = await Dev.find();
        return res.json(devs);
    },

    async store(req, res) {
        const {github_username, techs, latitude, longitude} = req.body;
        
        let dev = await Dev.findOne({github_username});

        if(!dev){
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
        
            const { avatar_url, bio, name = login} = apiResponse.data;
    
            const techsArray = parseStringAsArray(techs)

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });    
        }

        return res.json(dev);
    }
}