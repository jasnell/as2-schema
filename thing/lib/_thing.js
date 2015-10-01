'use strict';

var schema   = require('./schema');
var AsObject = require('activitystrea.ms').models.Object;

class Thing extends AsObject {
  constructor(expanded, builder) {
    super(expanded, builder || Thing.Builder);
  }

  get additionalType() {
    return this.get(schema.additionalType);
  }

  get alternateName() {
    return this.get(schema.alternateName);
  }

  get description() {
    return this.get(schema.alternateName);
  }

  get mainEntityOfPage() {
    return this.get(schema.mainEntityOfPage);
  }

  get name() {
    return this.get(schema.name);
  }

  get potentialAction() {
    return this.get(schema.potentialAction);
  }

  get sameAs() {
    return this.get(schema.sameAs);
  }
}

class ThingBuilder extends AsObject.Builder {
  constructor(types, base) {
    types = (types || []).concat([schema.Thing]);
    super(types, base || new Thing());
  }

  additionalType(val) {
    this.set(schema.additionalType, val);
    return this;
  }

  alternateName(val) {
    this.set(schema.alternateName, val);
    return this;
  }

  description(val) {
    this.set(schema.description, val);
    return this;
  }

  mainEntityOfPage(val) {
    this.set(schema.mainEntityOfPage, val);
    return this;
  }

  name(val) {
    this.set(schema.name, val);
    return this;
  }

  potentialAction(val) {
    this.set(schema.potentialAction, val);
    return this;
  }

  sameAs(val) {
    this.set(schema.sameAs, val);
    return this;
  }
}
Thing.Builder = ThingBuilder;

module.exports = Thing;
