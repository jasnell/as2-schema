'use strict';

var thing = require('as-schema-thing');
var Product = require('./_product');
var IndividualProduct = require('./_individualProduct');
var ProductModel = require('./_productModel');
var SomeProducts = require('./_someProducts');
var Vehicle = require('./_vehicle');
var product = require('./product');
var vocabs = require('linkeddata-vocabs');
var rdfs = vocabs.rdfs;
var owl = vocabs.owl;
var rdf = vocabs.rdf;
var schema = thing.vocab;

exports.Product = Product;
exports.IndividualProduct = IndividualProduct;
exports.ProductModel = ProductModel;
exports.SomeProducts = SomeProducts;
exports.Vehicle = Vehicle;
exports.vocab = product;

function gettypes(types, type) {
  return (types || []).concat([type]);
}

exports.product = function(types) {
  return new Product.Builder(gettypes(types,product.Product));
};
exports.individualProduct = function(types) {
  return new IndividualProduct.Builder(
    gettypes(types,product.IndividualProduct));
};
exports.productModel = function(types) {
  return new ProductModel.Builder(gettypes(types,product.ProductModel));
};
exports.someProducts = function(types) {
  return new SomeProducts.Builder(gettypes(types,product.SomeProducts));
};
exports.vehicle = function(types) {
  return new Vehicle.Builder(gettypes(types,product.Vehicle));
};
exports.car = function(types) {
  return new Vehicle.Builder(gettypes(types,product.Car));
};

function product_recognizer(reasoner, type) {
  var thing;
  if (type) {
    if (reasoner.node(type).is(product.Vehicle)) {
      thing = Vehicle;
    } else if (reasoner.node(type).is(product.SomeProducts)) {
      thing = SomeProducts;
    } else if (reasoner.node(type).is(product.ProductModel)) {
      thing = ProductModel;
    } else if (reasoner.node(type).is(product.IndividualProduct)) {
      thing = IndividualProduct;
    } else if (reasoner.node(type).is(product.Product)) {
      thing = Product;
    }
  }
  return thing;
}

var inited = false;

exports.init = function(models, reasoner, context) {
  thing.init(models, reasoner, context);
  if (inited) return;
  inited = true;

  models.use(product_recognizer.bind(null,reasoner));

  var graph = new reasoner.Graph();
  graph.add({
    subject: product.Product,
    predicate: rdfs.subClassOf,
    object: schema.Thing
  });
  graph.add({
    subject: product.IndividualProduct,
    predicate: rdfs.subClassOf,
    object: product.Product
  });
  graph.add({
    subject: product.ProductModel,
    predicate: rdfs.subClassOf,
    object: product.Product
  });
  graph.add({
    subject: product.Vehicle,
    predicate: rdfs.subClassOf,
    object: product.Product
  });
  graph.add({
    subject: product.Car,
    predicate: rdfs.subClassOf,
    object: product.Vehicle
  });

  var functionalDatatype = [
        owl.DatatypeProperty,
        owl.FunctionalProperty
      ],
      functionalObject = [
        owl.ObjectProperty,
        owl.FunctionalProperty
      ];

  [
    [product.additionalProperty, owl.ObjectProperty],
    [product.aggregateRating, owl.ObjectProperty],
    [product.audience, owl.ObjectProperty],
    [product.award, owl.DatatypeProperty],
    [product.brand, owl.ObjectProperty],
    [product.category, owl.ObjectProperty],
    [product.color, owl.DatatypeProperty],
    [product.depth, owl.ObjectProperty],
    [product.gtin12, functionalDatatype],
    [product.gtin13, functionalDatatype],
    [product.gtin14, functionalDatatype],
    [product.gtin8, functionalDatatype],
    [product.height, owl.ObjectProperty],
    [product.isAccessoryOrSparePartFor, owl.ObjectProperty],
    [product.isConsumableFor, owl.ObjectProperty],
    [product.isRelatedTo, owl.ObjectProperty],
    [product.isSimilarTo, owl.ObjectProperty],
    [product.itemCondition, functionalObject],
    [product.logo, owl.ObjectProperty],
    [product.manufacturer, owl.ObjectProperty],
    [product.model, functionalDatatype],
    [product.mpn, functionalDatatype],
    [product.offers, owl.ObjectProperty],
    [product.productID, functionalDatatype],
    [product.productionDate, functionalDatatype],
    [product.purchaseDate, functionalDatatype],
    [product.releaseDate, functionalDatatype],
    [product.review, owl.ObjectProperty],
    [product.sku, functionalDatatype],
    [product.weight, owl.ObjectProperty],
    [product.width, owl.ObjectProperty],
    [product.serialNumber, functionalDatatype],
    [product.isVariantOf, owl.ObjectProperty],
    [product.predecessorOf, owl.ObjectProperty],
    [product.successorOf, owl.ObjectProperty],
    [product.inventoryLevel, owl.ObjectProperty],
    [product.cargoVolume, owl.ObjectProperty],
    [product.dateVehicleFirstRegistered, functionalDatatype],
    [product.driveWheelConfiguration, functionalDatatype],
    [product.fuelConsumption, owl.ObjectProperty],
    [product.fuelEfficiency, owl.ObjectProperty],
    [product.fuelType, functionalDatatype],
    [product.knownVehicleDamages, functionalDatatype],
    [product.milesFromOdometer, functionalDatatype],
    [product.numberOfAirbags, functionalDatatype],
    [product.numberOfAxles, functionalDatatype],
    [product.numberOfDoors, functionalDatatype],
    [product.numberOfForwardGears, functionalDatatype],
    [product.numberOfPreviousOwners, functionalDatatype],
    [product.productionDate, functionalDatatype],
    [product.purchaseDate, functionalDatatype],
    [product.steeringPosition, owl.ObjectProperty],
    [product.vehicleConfiguration, functionalDatatype],
    [product.vehicleEngine, owl.ObjectProperty],
    [product.vehicleIdentificationNumber, functionalDatatype],
    [product.vehicleInteriorColor, functionalDatatype],
    [product.vehicleInteriorType, functionalDatatype],
    [product.vehicleModelDate, functionalDatatype],
    [product.vehicleSeatingCapacity, functionalDatatype],
    [product.vehicleTransmission, functionalDatatype]
  ].forEach(function(pair) {
    graph.add({
      subject: pair[0],
      predicate: rdf.type,
      object: pair[1]
    });
  });

  reasoner.bind(graph);
};
