const Dev = require('../models/Dev')
const parseStringAsArray = require('./utils/parseString');

module.exports = {
    async index(req, res){
        const {latitude, longitude, techs} = req.query;
        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            techs:{
                $in: techsArray,
            },
        });

        return res.json({devs})
    }
    //buscar devs num raio de 10km
    //filtrar por tecnologias

} 