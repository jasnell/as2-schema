'use strict';

var util    = require('util');
var product = require('./product');
var Product = require('./_product');

function SomeProducts(expanded, builder) {
  if (!(this instanceof SomeProducts))
    return new Product(expanded, builder);
  Product.call(this, expanded, builder || SomeProducts.Builder);
}
util.inherits(SomeProducts,Product);

SomeProducts.Builder = function(types, base) {
  if (!(this instanceof SomeProducts.Builder))
    return new SomeProducts.Builder(types,base);
  types = (types || []).concat([product.SomeProducts]);
  Product.Builder.call(this, types, base || new SomeProducts({}));
};
util.inherits(SomeProducts.Builder,Product.Builder);

module.exports = SomeProducts;

function defineProperty(key, getter, setter) {
  Object.defineProperty(SomeProducts.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(SomeProducts.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

defineProperty('inventoryLevel',
  function() {
    return this.get(product.inventoryLevel);
  },
  function(val) {
    this.set(product.inventoryLevel, val);
    return this;
  });
