//import {Router} from 'express';

const {Router,application} = require('express');

const router = Router();

const {getAllZoo,getOneZoo} = require('../controllers/zoo.controller');

router.get('/api/allZoo', getAllZoo);
router.get('/api/zoo/:id', getOneZoo);

module.exports = router;