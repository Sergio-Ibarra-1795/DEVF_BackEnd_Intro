//import {Router} from 'express';

const {Router,application} = require('express');

const router = Router();

//Se agregan funciones desde el controlador
const {getAllZoo,getOneZoo,getZooBudget,getZooNombre,createZoo} = require('../controllers/zoo.controller');

//Se definen rutas o enpoints
router.get('/api/zoo', getAllZoo);
router.get('/api/zoo/id/:id', getOneZoo);
router.get('/api/zoo/budget', getZooBudget);
router.post('/api/zoo/findByNombre', getZooNombre);
router.post('/api/zoo/createZoo', createZoo);

//Se exportan todos los modulos
module.exports = router;