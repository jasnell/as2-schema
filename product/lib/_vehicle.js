'use strict';

var product = require('./product');
var Product = require('./_product');

class Vehicle extends Product {
  constructor(expanded, builder) {
    super(expanded, builder || Vehicle.Builder);
  }

  get cargoVolume() {
      return this.get(product.cargoVolume);
    }

  get dateVehicleFirstRegistered() {
      return this.get(product.dateVehicleFirstRegistered);
    }

  get driveWheelConfiguration() {
      return this.get(product.driveWheelConfiguration);
    }

  get fuelConsumption() {
      return this.get(product.fuelConsumption);
    }

  get fuelEfficiency() {
      return this.get(product.fuelEfficiency);
    }

  get fuelType() {
      return this.get(product.fuelType);
    }

  get knownVehicleDamages() {
      return this.get(product.knownVehicleDamages);
    }

  get mileageFromOdometer() {
      return this.get(product.mileageFromOdometer);
    }

  get numberOfAirbags() {
      return this.get(product.numberOfAirbags);
    }

  get numberOfAxles() {
      return this.get(product.numberOfAxles);
    }

  get numberOfDoors() {
      return this.get(product.numberOfDoors);
    }

  get numberOfForwardGears() {
      return this.get(product.numberOfForwardGears);
    }

  get numberOfPreviousOwners() {
      return this.get(product.numberOfPreviousOwners);
    }

  get productionDate() {
      return this.get(product.productionDate);
    }

  get purchaseDate() {
      return this.get(product.purchaseDate);
    }

  get steeringPosition() {
      return this.get(product.steeringPosition);
    }

  get vehicleConfiguration() {
      return this.get(product.vehicleConfiguration);
    }

  get vehicleEngine() {
      return this.get(product.vehicleEngine);
    }

  get vehicleIdentificationNumber() {
      return this.get(product.vehicleIdentificationNumber);
    }

  get vehicleInteriorColor() {
      return this.get(product.vehicleInteriorColor);
    }

  get vehicleInteriorType() {
      return this.get(product.vehicleInteriorType);
    }

  get vehicleModelDate() {
    return this.get(product.vehicleModelDate);
  }

  get vehicleSeatingCapacity() {
    return this.get(product.vehicleSeatingCapacity);
  }

  get vehicleTransmission() {
    return this.get(product.vehicleTransmission);
  }
}

class VehicleBuilder extends Product.Builder {
  constructor(types, base) {
    types = (types || []).concat([product.Vehicle]);
    super(types, base || new Vehicle({}));
  }

  cargoVolume(val) {
      this.set(product.cargoVolume, val);
      return this;
    }

  dateVehicleFirstRegistered(val) {
      this.set(product.dateVehicleFirstRegistered, val);
      return this;
    }

  driveWheelConfiguration(val) {
      this.set(product.driveWheelConfiguration, val);
      return this;
    }

  fuelConsumption(val) {
      this.set(product.fuelConsumption, val);
      return this;
    }

  fuelEfficiency(val) {
      this.set(product.fuelEfficiency, val);
      return this;
    }

  fuelType(val) {
      this.set(product.fuelType, val);
      return this;
    }

  knownVehicleDamages(val) {
      this.set(product.knownVehicleDamages, val);
      return this;
    }

  mileageFromOdometer(val) {
      this.set(product.mileageFromOdometer, val);
      return this;
    }

  numberOfAirbags(val) {
      this.set(product.numberOfAirbags, val);
      return this;
    }

  numberOfAxles(val) {
      this.set(product.numberOfAxles, val);
      return this;
    }

  numberOfDoors(val) {
      this.set(product.numberOfDoors, val);
      return this;
    }

  numberOfForwardGears(val) {
      this.set(product.numberOfForwardGears, val);
      return this;
    }

  numberOfPreviousOwners(val) {
      this.set(product.numberOfPreviousOwners, val);
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

  steeringPosition(val) {
      this.set(product.steeringPosition, val);
      return this;
    }

  vehicleConfiguration(val) {
      this.set(product.vehicleConfiguration, val);
      return this;
    }

  vehicleEngine(val) {
      this.set(product.vehicleEngine, val);
      return this;
    }

  vehicleIdentificationNumber(val) {
      this.set(product.vehicleIdentificationNumber, val);
      return this;
    }

  vehicleInteriorColor(val) {
      this.set(product.vehicleInteriorColor, val);
      return this;
    }

  vehicleInteriorType(val) {
      this.set(product.vehicleInteriorType, val);
      return this;
    }

  vehicleModelDate(val) {
      this.set(product.vehicleModelDate, val);
      return this;
    }

  vehicleSeatingCapacity(val) {
      this.set(product.vehicleSeatingCapacity, val);
      return this;
    }

  vehicleTransmission(val) {
      this.set(product.vehicleTransmission, val);
      return this;
    }
}
Vehicle.Builder = VehicleBuilder;

module.exports = Vehicle;
