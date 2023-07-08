const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class ProductsService {

  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        img: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;
  }
  async find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.products)
      }, 3000)
    })
    // return this.products;
  }
  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
    // throw new Error("Error thrown to test the error handler middlewares")
    // return this.products.find(item=>item.id===id);
  }
  async update(id, changes) {
    const index = this.products.findIndex(item => item.id === id);
    let product = this.products[index];
    if (index === -1) {
      throw boom.notFound('product not found');
      // throw new Error('item not found');
    }
    this.products[index] = {
      ...product,
      ...changes
    };
    return this.products[index];
  }
  async delete(id) {
    const index = this.products.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
      // throw new Error('item not found');
    }
    deletedProduct = this.products.splice(index, 1)[0];
    return this.products[index];
  }
}

module.exports = ProductsService;
