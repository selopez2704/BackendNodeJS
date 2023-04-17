const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();

router.get('/', (req, res) => {
  const { size } = req.query;
  const limit = size || 10;
  const products = []


  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(),10),
      img:faker.image.imageUrl(),
    });
  }

  res.json(products);
})

router.get('/filter', (req, res) => {
  res.send("I'm a filter")
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json(
    {
      id: id,
      name: "product1",
      price: 1000
    }
  )
});


router.post('/',(req,res) => {
  const body = req.body;
  res.json({
    message:'created',
    data:body,
  })
})

module.exports = router;
