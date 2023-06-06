require("dotenv").config()
const axios = require ("axios")
const {API_KEY} = process.env
const URL =  `https://api.thedogapi.com/v1/breeds`
const {Dog,Temperament} = require("../db")

const GetDogsID = async(req,res) =>{
    try {
    
    const { id } = req.params;

    function isUUID(value) {
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        return uuidRegex.test(value);}

    if(isUUID(id)){
        const db_dogs = await Dog.findByPk(id,{include:Temperament})
    if(db_dogs){
        const temperamentNames = db_dogs.temperaments.map(tem => tem.name).join(", ");
        const theDog= { ...db_dogs.toJSON(),temperament:temperamentNames}
        return res.status(200).json(theDog) 
    } 
    else return res.status(404).json({message:"error perro no encontrado"})
    }
        
    const dog = await axios(`${URL}/${id}?api_key=${API_KEY}`);

    if(!dog.data)
    return res.status(400).json({error:"perro perdidos 😭"})

    let imageData = undefined

    if(dog.data.reference_image_id){
        const response = await axios.get(`https://api.thedogapi.com/v1/images/${dog.data.reference_image_id}`);
        imageData = response.data;}


    const data = dog.data

    const apidog ={
        id: data.id,
        name: data.name,
        height: data.height,
        weight: data.weight,
        life_span: data.life_span,
        temperament: data.temperament,
        imageId: imageData.url
    
    }

    return res.status(200).json(apidog)

    } catch (error) {
        console.log("ocurrio un error:", error)
        return res.status(500).json({error:"Ocurrio un error en el servidor"})
    }
}

module.exports = GetDogsID