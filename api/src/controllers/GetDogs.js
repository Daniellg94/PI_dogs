require("dotenv").config()
const axios = require ("axios")
const {API_KEY} = process.env
const URL =  `https://api.thedogapi.com/v1/breeds`
const {Dog,Temperament} = require("../db")

const GetDogs = async(req,res) =>{
    try {
    
    const db_dogs = await Dog.findAll({include:Temperament})
    
    const theDogs = db_dogs.map(dog => {
        const temperamentNames = dog.temperaments.map(tem => tem.name).join(", ");
        return {
          ...dog.toJSON(),
          temperament: temperamentNames
        };
      });
        
    const dogs = await axios(`${URL}?api_key=${API_KEY}`)

    const apidogs = dogs.data.map(dog=>{
        return{
            id:dog.id,
            name:dog.name,
            image:dog.image?.url,
            height:dog.height,
            weight:dog.weight,
            life_span:dog.life_span,
            temperament:dog.temperament
        }
    })

    const reverseBdDogs= theDogs.reverse()
    const allDogs = reverseBdDogs.concat(apidogs)

    if(!dogs.data)
    return res.status(400).json({error:"perros perdidos 😭"})

    return res.status(200).json(allDogs)

    } catch (error) {
        console.log("ocurrio un error:", error)
        return res.status(500).json({error:"Ocurrio un error en el servidor"})
    }
}

module.exports = GetDogs