const express = require('express');

const router = express.Router();

const routesFiles=require('../controllers/products')

router.get('/', routesFiles.shopFile1);

module.exports = router;
