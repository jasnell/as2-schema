'use strict';

var util     = require('util');
var product   = require('./product');
var Thing = require('as-schema-thing').Thing;

function Product(expanded, builder) {
  if (!(this instanceof Product))
    return new Product(expanded, builder);
  Thing.call(this, expanded, builder || Product.Builder);
}
util.inherits(Product,Thing);

Product.Builder = function(types, base) {
  if (!(this instanceof Product.Builder))
    return new Product.Builder(types,base);
  types = (types || []).concat([product.Product]);
  Thing.Builder.call(this, types, base || new Product({}));
};
util.inherits(Product.Builder,Thing.Builder);

module.exports = Product;

function defineProperty(key, getter, setter) {
  Object.defineProperty(Product.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(Product.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

defineProperty('additionalProperty',
  function() {
    return this.get(product.additionalProperty);
  },
  function(val) {
    this.set(product.additionalProperty, val);
    return this;
  });

defineProperty('aggregateRating',
  function() {
    return this.get(product.aggregateRating);
  },
  function(val) {
    this.set(product.aggregateRating, val);
    return this;
  });

defineProperty('audience',
  function() {
    return this.get(product.audience);
  },
  function(val) {
    this.set(product.audience, val);
    return this;
  });

defineProperty('award',
  function() {
    return this.get(product.award);
  },
  function(val) {
    this.set(product.award, val);
    return this;
  });

defineProperty('brand',
  function() {
    return this.get(product.brand);
  },
  function(val) {
    this.set(product.brand, val);
    return this;
  });

defineProperty('category',
  function() {
    return this.get(product.category);
  },
  function(val) {
    this.set(product.category, val);
    return this;
  });

defineProperty('color',
  function() {
    return this.get(product.color);
  },
  function(val) {
    this.set(product.color, val);
    return this;
  });

defineProperty('depth',
  function() {
    return this.get(product.depth);
  },
  function(val) {
    this.set(product.depth, val);
    return this;
  });

defineProperty('gtin12',
  function() {
    return this.get(product.gtin12);
  },
  function(val) {
    this.set(product.gtin12, val);
    return this;
  });

defineProperty('gtin13',
  function() {
    return this.get(product.gtin13);
  },
  function(val) {
    this.set(product.gtin13, val);
    return this;
  });

defineProperty('gtin14',
  function() {
    return this.get(product.gtin14);
  },
  function(val) {
    this.set(product.gtin14, val);
    return this;
  });

defineProperty('gtin8',
  function() {
    return this.get(product.gtin8);
  },
  function(val) {
    this.set(product.gtin8, val);
    return this;
  });

defineProperty('isAccessoryOrSpacePartFor',
  function() {
    return this.get(product.isAccessoryOrSpacePartFor);
  },
  function(val) {
    this.set(product.isAccessoryOrSpacePartFor, val);
    return this;
  });

defineProperty('isConsumableFor',
  function() {
    return this.get(product.isConsumableFor);
  },
  function(val) {
    this.set(product.isConsumableFor, val);
    return this;
  });

defineProperty('isRelatedTo',
  function() {
    return this.get(product.isRelatedTo);
  },
  function(val) {
    this.set(product.isRelatedTo, val);
    return this;
  });

defineProperty('isSimilarTo',
  function() {
    return this.get(product.isSimilarTo);
  },
  function(val) {
    this.set(product.isSimilarTo, val);
    return this;
  });

defineProperty('itemCondition',
  function() {
    return this.get(product.itemCondition);
  },
  function(val) {
    this.set(product.itemCondition, val);
    return this;
  });

defineProperty('logo',
  function() {
    return this.get(product.logo);
  },
  function(val) {
    this.set(product.logo, val);
    return this;
  });

defineProperty('manufacturer',
  function() {
    return this.get(product.manufacturer);
  },
  function(val) {
    this.set(product.manufacturer, val);
    return this;
  });

defineProperty('model',
  function() {
    return this.get(product.model);
  },
  function(val) {
    this.set(product.model, val);
    return this;
  });

defineProperty('mpn',
  function() {
    return this.get(product.mpn);
  },
  function(val) {
    this.set(product.mpn, val);
    return this;
  });

defineProperty('offers',
  function() {
    return this.get(product.offers);
  },
  function(val) {
    this.set(product.offers, val);
    return this;
  });

defineProperty('productID',
  function() {
    return this.get(product.productID);
  },
  function(val) {
    this.set(product.productID, val);
    return this;
  });

defineProperty('productionDate',
  function() {
    return this.get(product.productionDate);
  },
  function(val) {
    this.set(product.productionDate, val);
    return this;
  });

defineProperty('purchaseDate',
  function() {
    return this.get(product.purchaseDate);
  },
  function(val) {
    this.set(product.purchaseDate, val);
    return this;
  });

defineProperty('releaseDate',
  function() {
    return this.get(product.releaseDate);
  },
  function(val) {
    this.set(product.releaseDate, val);
    return this;
  });

defineProperty('review',
  function() {
    return this.get(product.review);
  },
  function(val) {
    this.set(product.review, val);
    return this;
  });

defineProperty('sku',
  function() {
    return this.get(product.sku);
  },
  function(val) {
    this.set(product.sku, val);
    return this;
  });

defineProperty('weight',
  function() {
    return this.get(product.weight);
  },
  function(val) {
    this.set(product.weight, val);
    return this;
  });
