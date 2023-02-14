//import {Router} from 'express';

const {Router,application} = require('express');

const router = Router();

const {getAllZoo,getOneZoo,getZooBudget,getZooNombre} = require('../controllers/zoo.controller');

router.get('/api/zoo', getAllZoo);
router.get('/api/zoo/id/:id', getOneZoo);
router.get('/api/zoo/budget', getZooBudget);
router.post('/api/zoo/findByNombre', getZooNombre);


module.exports = router;