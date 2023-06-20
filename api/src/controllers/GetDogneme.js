require("dotenv").config()
const axios = require ("axios")
const {Dog,Temperament} = require("../db");
const { Op } = require("sequelize");

const GetDogsName = async (req, res) => {
    try {

        const {name} = req.query;

        const namedogs = await Dog.findAll({
            where: {name: {[Op.iLike]: `%${name}%`}},include: Temperament,});
        const theDogs = namedogs.map(dog => {
        const temperamentNames = dog.temperaments.map(tem => tem.name).join(", ");
        return {
          ...dog.toJSON(),
          temperament: temperamentNames
        };
      });
        
            
        const dogs = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    
        const data = dogs.data
    
        const apidogs = await Promise.all(
            data.map(async (dog) => {

            let imageData = undefined
                if(dog.reference_image_id){
              const response = await axios.get(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}`);
               imageData = response.data.url;}
          
              return {
                id: dog.id,
                name: dog.name,
                height: dog.height,
                weight: dog.weight,
                life_span: dog.life_span,
                temperament: dog.temperament,
                image: imageData
              };
            })
          );
    
          const alldogs = theDogs.concat(apidogs)
    
        if(!dogs.data)
        return res.status(400).json({error:"perro perdido 😭"})
    
        return res.status(200).json(alldogs)
    
        } catch (error) {
            console.log("ocurrio un error:", error)
            return res.status(500).json({error:"Ocurrio un error en el servidor"})
        }
};

module.exports = GetDogsName;
