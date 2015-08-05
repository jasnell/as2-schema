'use strict';

var util    = require('util');
var product = require('./product');
var Product = require('./_product');

function IndividualProduct(expanded, builder) {
  if (!(this instanceof IndividualProduct))
    return new Product(expanded, builder);
  Product.call(this, expanded, builder || IndividualProduct.Builder);
}
util.inherits(IndividualProduct,Product);

IndividualProduct.Builder = function(types, base) {
  if (!(this instanceof IndividualProduct.Builder))
    return new IndividualProduct.Builder(types,base);
  types = (types || []).concat([product.IndividualProduct]);
  Product.Builder.call(this, types, base || new IndividualProduct({}));
};
util.inherits(IndividualProduct.Builder,Product.Builder);

module.exports = IndividualProduct;

function defineProperty(key, getter, setter) {
  Object.defineProperty(IndividualProduct.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(IndividualProduct.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

defineProperty('serialNumber',
  function() {
    return this.get(product.serialNumber);
  },
  function(val) {
    this.set(product.serialNumber, val);
    return this;
  });
