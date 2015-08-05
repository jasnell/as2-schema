'use strict';

var util    = require('util');
var product = require('./product');
var Product = require('./_product');

function Vehicle(expanded, builder) {
  if (!(this instanceof Vehicle))
    return new Product(expanded, builder);
  Product.call(this, expanded, builder || Vehicle.Builder);
}
util.inherits(Vehicle,Product);

Vehicle.Builder = function(types, base) {
  if (!(this instanceof Vehicle.Builder))
    return new Vehicle.Builder(types,base);
  types = (types || []).concat([product.Vehicle]);
  Product.Builder.call(this, types, base || new Vehicle({}));
};
util.inherits(Vehicle.Builder,Product.Builder);

module.exports = Vehicle;

function defineProperty(key, getter, setter) {
  Object.defineProperty(Vehicle.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(Vehicle.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

defineProperty('cargoVolume',
  function() {
    return this.get(product.cargoVolume);
  },
  function(val) {
    this.set(product.cargoVolume, val);
    return this;
  });

defineProperty('dateVehicleFirstRegistered',
  function() {
    return this.get(product.dateVehicleFirstRegistered);
  },
  function(val) {
    this.set(product.dateVehicleFirstRegistered, val);
    return this;
  });

defineProperty('driveWheelConfiguration',
  function() {
    return this.get(product.driveWheelConfiguration);
  },
  function(val) {
    this.set(product.driveWheelConfiguration, val);
    return this;
  });

defineProperty('fuelConsumption',
  function() {
    return this.get(product.fuelConsumption);
  },
  function(val) {
    this.set(product.fuelConsumption, val);
    return this;
  });

defineProperty('fuelEfficiency',
  function() {
    return this.get(product.fuelEfficiency);
  },
  function(val) {
    this.set(product.fuelEfficiency, val);
    return this;
  });

defineProperty('fuelType',
  function() {
    return this.get(product.fuelType);
  },
  function(val) {
    this.set(product.fuelType, val);
    return this;
  });

defineProperty('knownVehicleDamages',
  function() {
    return this.get(product.knownVehicleDamages);
  },
  function(val) {
    this.set(product.knownVehicleDamages, val);
    return this;
  });

defineProperty('mileageFromOdometer',
  function() {
    return this.get(product.mileageFromOdometer);
  },
  function(val) {
    this.set(product.mileageFromOdometer, val);
    return this;
  });

defineProperty('numberOfAirbags',
  function() {
    return this.get(product.numberOfAirbags);
  },
  function(val) {
    this.set(product.numberOfAirbags, val);
    return this;
  });

defineProperty('numberOfAxles',
  function() {
    return this.get(product.numberOfAxles);
  },
  function(val) {
    this.set(product.numberOfAxles, val);
    return this;
  });

defineProperty('numberOfDoors',
  function() {
    return this.get(product.numberOfDoors);
  },
  function(val) {
    this.set(product.numberOfDoors, val);
    return this;
  });

defineProperty('numberOfForwardGears',
  function() {
    return this.get(product.numberOfForwardGears);
  },
  function(val) {
    this.set(product.numberOfForwardGears, val);
    return this;
  });

defineProperty('numberOfPreviousOwners',
  function() {
    return this.get(product.numberOfPreviousOwners);
  },
  function(val) {
    this.set(product.numberOfPreviousOwners, val);
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

defineProperty('steeringPosition',
  function() {
    return this.get(product.steeringPosition);
  },
  function(val) {
    this.set(product.steeringPosition, val);
    return this;
  });

defineProperty('vehicleConfiguration',
  function() {
    return this.get(product.vehicleConfiguration);
  },
  function(val) {
    this.set(product.vehicleConfiguration, val);
    return this;
  });

defineProperty('vehicleEngine',
  function() {
    return this.get(product.vehicleEngine);
  },
  function(val) {
    this.set(product.vehicleEngine, val);
    return this;
  });

defineProperty('vehicleIdentificationNumber',
  function() {
    return this.get(product.vehicleIdentificationNumber);
  },
  function(val) {
    this.set(product.vehicleIdentificationNumber, val);
    return this;
  });

defineProperty('vehicleInteriorColor',
  function() {
    return this.get(product.vehicleInteriorColor);
  },
  function(val) {
    this.set(product.vehicleInteriorColor, val);
    return this;
  });

defineProperty('vehicleInteriorType',
  function() {
    return this.get(product.vehicleInteriorType);
  },
  function(val) {
    this.set(product.vehicleInteriorType, val);
    return this;
  });

defineProperty('vehicleModelDate',
  function() {
    return this.get(product.vehicleModelDate);
  },
  function(val) {
    this.set(product.vehicleModelDate, val);
    return this;
  });

defineProperty('vehicleSeatingCapacity',
  function() {
    return this.get(product.vehicleSeatingCapacity);
  },
  function(val) {
    this.set(product.vehicleSeatingCapacity, val);
    return this;
  });

defineProperty('vehicleTransmission',
  function() {
    return this.get(product.vehicleTransmission);
  },
  function(val) {
    this.set(product.vehicleTransmission, val);
    return this;
  });
