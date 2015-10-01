'use strict';

var product = require('./product');
var Product = require('./_product');

class IndividualProduct extends Product {
  constructor(expanded, builder) {
    super(expanded, builder || IndividualProduct.Builder);
  }

  get serialNumber() {
    return this.get(product.serialNumber);
  }
}

class IndividualProductBuilder extends Product.Builder {
  constructor(types, base) {
    types = (types || []).concat([product.IndividualProduct]);
    super(types, base || new IndividualProduct({}));
  }

  serialNumber(val) {
    this.set(product.serialNumber, val);
    return this;
  }
}
IndividualProduct.Builder = IndividualProductBuilder;

module.exports = IndividualProduct;
