const { Router,request } = require('express');
const GetDogs = require('../controllers/GetDogs');
const GetDogsID = require ('../controllers/GetDogsID');
const GetDogsName = require('../controllers/GetDogneme');
const postDog = require('../controllers/postDog');
const getTemperament = require('../controllers/GetTemperaments');
const DeleteDog = require('../controllers/DeleteDog');

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



module.exports = router;
