require("dotenv").config();
const axios = require("axios");
const {API_KEY} = process.env
const URL = `https://api.thedogapi.com/v1/breeds`;
const { Temperament } = require("../db");

const getTemperament = async(req,res) =>{

    try {
        const temperament = await Temperament.findAll()

        if(temperament.length === 0){
            const apitemp = await axios(`${URL}?api_key=${API_KEY}`)
            const apitemps = apitemp.data
            .map((tem) => tem.temperament)
            .filter((tem) => tem) // Filtrar valores nulos o indefinidos
            
            const uniqueTemps = [...new Set(apitemps.join(',').split(',').map((name) => name.trim()))]
            .map((name) => ({ name }));

            await Temperament.bulkCreate(uniqueTemps);
            return res.status(200).json(uniqueTemps);
        }
        return res.status(200).json(temperament)
        
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = getTemperament