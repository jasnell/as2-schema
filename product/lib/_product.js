'use strict';

var product   = require('./product');
var Thing = require('as-schema-thing').Thing;

class Product extends Thing {
  constructor(expanded, builder) {
    super(expanded, builder || Product.Builder);
  }

  get additionalProperty() {
    return this.get(product.additionalProperty);
  }

  get aggregateRating() {
    return this.get(product.aggregateRating);
  }

  get audience() {
    return this.get(product.audience);
  }

  get award() {
    return this.get(product.award);
  }

  get brand() {
    return this.get(product.brand);
  }

  get category() {
    return this.get(product.category);
  }

  get color() {
    return this.get(product.color);
  }

  get depth() {
    return this.get(product.depth);
  }

  get gtin12() {
    return this.get(product.gtin12);
  }

  get gtin13() {
    return this.get(product.gtin13);
  }

  get gtin14() {
    return this.get(product.gtin14);
  }

  get gtin8() {
    return this.get(product.gtin8);
  }

  get isAccessoryOrSpacePartFor() {
    return this.get(product.isAccessoryOrSpacePartFor);
  }

  get isConsumableFor() {
    return this.get(product.isConsumableFor);
  }

  get isRelatedTo() {
    return this.get(product.isRelatedTo);
  }

  get isSimilarTo() {
    return this.get(product.isSimilarTo);
  }

  get itemCondition() {
    return this.get(product.itemCondition);
  }

  get logo() {
    return this.get(product.logo);
  }

  get manufacturer() {
    return this.get(product.manufacturer);
  }

  get model() {
    return this.get(product.model);
  }

  get mpn() {
    return this.get(product.mpn);
  }

  get offers() {
    return this.get(product.offers);
  }

  get productID() {
    return this.get(product.productID);
  }

  get productionDate() {
    return this.get(product.productionDate);
  }

  get purchaseDate() {
    return this.get(product.purchaseDate);
  }

  get releaseDate() {
    return this.get(product.releaseDate);
  }

  get review() {
    return this.get(product.review);
  }

  get sku() {
    return this.get(product.sku);
  }

  get weight() {
    return this.get(product.weight);
  }
}

class ProductBuilder extends Thing.Builder {
  constructor(types, base) {
    types = (types || []).concat([product.Product]);
    super(types, base || new Product({}));
  }

  additionalProperty(val) {
    this.set(product.additionalProperty, val);
    return this;
  }

  aggregateRating(val) {
    this.set(product.aggregateRating, val);
    return this;
  }

  audience(val) {
    this.set(product.audience, val);
    return this;
  }

  award(val) {
    this.set(product.award, val);
    return this;
  }

  brand(val) {
    this.set(product.brand, val);
    return this;
  }

  category(val) {
    this.set(product.category, val);
    return this;
  }

  color(val) {
    this.set(product.color, val);
    return this;
  }

  depth(val) {
    this.set(product.depth, val);
    return this;
  }

  gtin12(val) {
    this.set(product.gtin12, val);
    return this;
  }

  gtin13(val) {
    this.set(product.gtin13, val);
    return this;
  }

gtin14(val) {
    this.set(product.gtin14, val);
    return this;
  }

  gtin8(val) {
    this.set(product.gtin8, val);
    return this;
  }

  isAccessoryOrSpacePartFor(val) {
    this.set(product.isAccessoryOrSpacePartFor, val);
    return this;
  }

  isConsumableFor(val) {
    this.set(product.isConsumableFor, val);
    return this;
  }

  isRelatedTo(val) {
    this.set(product.isRelatedTo, val);
    return this;
  }

  isSimilarTo(val) {
    this.set(product.isSimilarTo, val);
    return this;
  }

  itemCondition(val) {
    this.set(product.itemCondition, val);
    return this;
  }

  logo(val) {
    this.set(product.logo, val);
    return this;
  }

  manufacturer(val) {
    this.set(product.manufacturer, val);
    return this;
  }

  model(val) {
    this.set(product.model, val);
    return this;
  }

  mpn(val) {
    this.set(product.mpn, val);
    return this;
  }

  offers(val) {
    this.set(product.offers, val);
    return this;
  }

  productID(val) {
    this.set(product.productID, val);
    return this;
  }

  productionDate(val) {
    this.set(product.productionDate, val);
    return this;
  }

  purchaseDate(val) {
    this.set(product.purchaseDate, val);
    return this;
  }

  releaseDate(val) {
    this.set(product.releaseDate, val);
    return this;
  }

  review(val) {
    this.set(product.review, val);
    return this;
  }

  sku(val) {
    this.set(product.sku, val);
    return this;
  }

  weight(val) {
    this.set(product.weight, val);
    return this;
  }
}
Product.Builder = ProductBuilder;

module.exports = Product;
