const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const peopleController = require('../controllers/peopleController');
const Person = mongoose.model('Person');

const findByID = require('../middleware/findById');
const findAll = require('../middleware/findAll');


router.get('/', findAll(Person), peopleController.getAll);
router.get('/:id', findByID(Person), peopleController.getOne);

router.post('/', peopleController.post);



module.exports = router;