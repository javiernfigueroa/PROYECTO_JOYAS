const express = require('express');
const router = express.Router();
const joyasController = require('../controllers/joyasController');

router.get('/joyas', joyasController.getJoyas);
router.get('/joyas/filtros', joyasController.getJoyasByFilters);
router.get('/joyas/joya/:id', joyasController.getJoyasById);

module.exports = router;
