'use strict';

var util    = require('util');
var product = require('./product');
var Product = require('./_product');

function ProductModel(expanded, builder) {
  if (!(this instanceof ProductModel))
    return new Product(expanded, builder);
  Product.call(this, expanded, builder || ProductModel.Builder);
}
util.inherits(ProductModel,Product);

ProductModel.Builder = function(types, base) {
  if (!(this instanceof ProductModel.Builder))
    return new ProductModel.Builder(types,base);
  types = (types || []).concat([product.ProductModel]);
  Product.Builder.call(this, types, base || new ProductModel({}));
};
util.inherits(ProductModel.Builder,Product.Builder);

module.exports = ProductModel;

function defineProperty(key, getter, setter) {
  Object.defineProperty(ProductModel.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(ProductModel.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

defineProperty('isVariantOf',
  function() {
    return this.get(product.isVariantOf);
  },
  function(val) {
    this.set(product.isVariantOf, val);
    return this;
  });

defineProperty('predecessorOf',
  function() {
    return this.get(product.predecessorOf);
  },
  function(val) {
    this.set(product.predecessorOf, val);
    return this;
  });

defineProperty('successorOf',
  function() {
    return this.get(product.successorOf);
  },
  function(val) {
    this.set(product.successorOf, val);
    return this;
  });
