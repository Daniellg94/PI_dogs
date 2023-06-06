const {Dog,Temperament} = require("../db")

const postDog = async(req,res) =>{
    try {
        
        const{name,image,height,weight,temperament,life_span}=req.body

        if(!name||!image||!height||!weight||!temperament||!life_span){
            return res.status(401).json({error:"falta algo"})
        }
    
        const findDog= await Dog.findOne({where:{name}});
        if(findDog)return res.status(400).json({error:'esta raza ya existe'})
        const newDog = await Dog.create({name,image,height,weight,life_span})
        const temperamentfind = await Temperament.findAll({where:{id:temperament.map(tem=>tem.id)}})
        await newDog.addTemperament(temperamentfind)
        const temperamentNames = temperament.map(tem => tem.name).join(", ");
        const theDog= { ...newDog.toJSON(),temperament:temperamentNames
        }

        return res.status(200).json(theDog)

    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}
module.exports = postDog