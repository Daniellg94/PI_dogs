const { Router} = require('express');
const GetDogs = require('../controllers/GetDogs.js');
const GetDogsID = require ('../controllers/GetDogsID.js');
const GetDogsName = require('../controllers/GetDogneme.js');
const postDog = require('../controllers/postDog.js');
const getTemperament = require('../controllers/GetTemperaments.js');
const DeleteDog = require('../controllers/DeleteDog.js');
const editDog = require('../controllers/EdithDog.js');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/dogs", GetDogs)

router.get("/dogs/name",GetDogsName)

router.get('/dogs/:id', GetDogsID)

router.post('/dogs', postDog)

router.get('/temperaments', getTemperament)

router.delete('/dogs/:id', DeleteDog)

router.put('/dogs/:id', editDog);



module.exports = router;
