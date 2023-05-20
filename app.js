const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminData = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const routesFiles=require('./controllers/products.js')

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData);
app.use(shopRoutes);

app.use(routesFiles.appFile1);

const hostname = '127.0.0.1';
const port = 3000;
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});