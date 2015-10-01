'use strict';

var product = require('./product');
var Product = require('./_product');

class SomeProducts extends Product {
  constructor(expanded, builder) {
    super(expanded, builder || SomeProducts.Builder);
  }

  get inventoryLevel() {
    return this.get(product.inventoryLevel);
  }
}

class SomeProductsBuilder extends Product.Builder {
  constructor(types, base) {
    types = (types || []).concat([product.SomeProducts]);
    super(types, base || new SomeProducts({}));
  }

  inventoryLevel(val) {
    this.set(product.inventoryLevel, val);
    return this;
  }
}
SomeProducts.Builder = SomeProductsBuilder;

module.exports = SomeProducts;
