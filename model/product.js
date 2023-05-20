const fs = require('fs');

let products = [];

class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    if (fs.existsSync('data.txt')) {
    //   const jsonString = fs.readFileSync('data.txt', 'utf8');
      const jsonString = Product.readFile()

      products = JSON.parse(jsonString);
      products.push({ title: this.title });
    } else {
      products.push({ title: this.title });
    }
    const jsonString = JSON.stringify(products);
    fs.writeFile('data.txt', jsonString, (err) => {
      if (err) {
        console.error(err);
      }
    });
  }

  static readFile(){
    return fs.readFileSync('data.txt', 'utf8');
  }

  static fetchAll() {
    if (fs.existsSync('data.txt')) {
        const jsonString = Product.readFile()
      const parsedData = JSON.parse(jsonString);
      return parsedData;
    } else {
      return [];
    }
  }
}

module.exports = Product;
