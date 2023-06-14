const { Dog } = require("../db");

const DeleteDog = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) res.status(400).json({ error: 'No se encontró ID' });

    const deletedDog = await Dog.findByPk(id);
    if (!deletedDog) return res.status(400).json({ error: `${id} no encontrado` });

    await deletedDog.destroy();

    const allDogs = await Dog.findAll();
    res.status(200).json({ dogs: allDogs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = DeleteDog;
