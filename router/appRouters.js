const express = require('express');
const router = express.Router();

const controller = require('../controller/filmsControllers');
const { index, show } = controller;


router.get('/', index);

router.get('/:id', show);

module.exports = router;