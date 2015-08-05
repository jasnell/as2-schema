'use strict';

var schema = require('as-schema-thing').vocab;

function define(key) {
  Object.defineProperty(exports, key, {
    enumerable: true,
    configurable: false,
    value: ns + key
  });
}

var ns = schema.ns;

define('ns', ns);
define('Product');
define('IndividualProduct');
define('ProductModel');
define('SomeProducts');
define('Vehicle');
define('Car');
define('additionalProperty');
define('aggregateRating');
define('audience');
define('award');
define('brand');
define('category');
define('color');
define('depth');
define('gtin12');
define('gtin13');
define('gtin14');
define('gtin8');
define('height');
define('isAccessoryOrSpacePartFor');
define('isConsumableFor');
define('isRelatedTo');
define('isSimilarTo');
define('itemCondition');
define('logo');
define('manufacturer');
define('model');
define('mpn');
define('offers');
define('productID');
define('productionDate');
define('purchaseDate');
define('releaseDate');
define('review');
define('sku');
define('weight');
define('width');
define('serialNumber');
define('isVariantOf');
define('predecessorOf');
define('successorOf');
define('inventoryLevel');
define('cargoVolume');
define('dateVehicleFirstRegistered');
define('driveWheelConfiguration');
define('fuelConsumption');
define('fuelEfficiency');
define('fuelType');
define('knownVehicleDamages');
define('mileageFromOdometer');
define('numberOfAirbags');
define('numberOfAxles');
define('numberOfDoors');
define('numberOfForwardGears');
define('numberOfPreviousOwners');
define('purchaseDate');
define('steeringPosition');
define('vehicleConfiguration');
define('vehicleEngine');
define('vehicleIdentificationNumber');
define('vehicleInteriorColor');
define('vehicleInteriorType');
define('vehicleModelDate');
define('vehicleSeatingCapacity');
define('vehicleTransmission');
