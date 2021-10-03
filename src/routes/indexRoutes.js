const express = require('express');
const router = express.Router();
const indexController = require('../controller/indexController');

router.get('/' , indexController.index);

router.get("/login", indexController.login);

router.post('/login', indexController.logged);

router.get('/dashboard' , indexController.dashboard);

module.exports = router;