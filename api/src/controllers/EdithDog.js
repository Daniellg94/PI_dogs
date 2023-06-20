const { Dog, Temperament } = require("../db");

const editDog = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, height, weight, temperament, life_span } = req.body;

    if (!name || !image || !height || !weight || !temperament || !life_span) {
      return res.status(401).json({ error: "Falta algo" });
    }

    const dog = await Dog.findByPk(id);
    if (!dog) {
      return res.status(404).json({ error: "El perro no existe" });
    }

    dog.name = name;
    dog.image = image;
    dog.height = height;
    dog.weight = weight;
    dog.life_span = life_span;

    await dog.save();

    const temperamentfind = await Temperament.findAll({
      where: { id: temperament.map((tem) => tem.id) },
    });
    await dog.setTemperaments(temperamentfind);

    const temperamentNames = temperament.map((tem) => tem.name).join(", ");

    // Creación del objeto con las propiedades actualizadas del perro y los nombres de temperamentos
    const updatedDog = {
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: temperamentNames,
    };

    return res.status(200).json(updatedDog);
  } catch (error) {}

  return res.status(500).json({ error: error.message });
};

module.exports=editDog