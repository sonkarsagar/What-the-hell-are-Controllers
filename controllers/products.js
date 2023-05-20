const path = require('path')
const Product=require('../model/product')
// const products = [];

exports.adminFile1=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
}

exports.adminFile2=(req, res, next) => {
    // products.push({ title: req.body.title });
    const kuchBhi=new Product(req.body.title)
    kuchBhi.save()
    res.redirect('/');
}

exports.shopFile1=(req, res, next) => {
    res.render('shop', {
      prods: Product.fetchAll(),
      pageTitle: 'Shop',
      path: '/',
      hasProducts: Product.fetchAll().length > 0,
      activeShop: true,
      productCSS: true
    });
}

exports.appFile1=(req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'..','views','404.html'));
}