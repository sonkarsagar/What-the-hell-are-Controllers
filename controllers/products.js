const path = require('path')
const products = [];

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
    products.push({ title: req.body.title });
    res.redirect('/');
}

exports.shopFile1=(req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
}

exports.appFile1=(req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'..','views','404.html'));
}