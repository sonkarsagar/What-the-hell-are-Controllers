const express = require('express');

const router = express.Router();

const routesFiles=require('../controllers/products')

// /admin/add-product => GET
router.get('/add-product', routesFiles.adminFile1);

// /admin/add-product => POST
router.post('/add-product', routesFiles.adminFile2);

module.exports = router;



