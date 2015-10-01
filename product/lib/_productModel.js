'use strict';

var product = require('./product');
var Product = require('./_product');

class ProductModel extends Product {
  constructor(expanded, builder) {
    super(expanded, builder || ProductModel.Builder);
  }

  get isVariantOf() {
    return this.get(product.isVariantOf);
  }

  get predecessorOf() {
    return this.get(product.predecessorOf);
  }

  get successorOf() {
    return this.get(product.successorOf);
  }
}

class ProductModelBuilder extends Product.Builder {
  constructor(types, base) {
    types = (types || []).concat([product.ProductModel]);
    super(types, base || new ProductModel({}));
  }

  isVariantOf(val) {
    this.set(product.isVariantOf, val);
    return this;
  }

  predecessorOf(val) {
    this.set(product.predecessorOf, val);
    return this;
  }

  successorOf(val) {
    this.set(product.successorOf, val);
    return this;
  }
}
ProductModel.Builder = ProductModelBuilder;

module.exports = ProductModel;
