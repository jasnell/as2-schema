'use strict';

var util     = require('util');
var schema   = require('./schema');
var AsObject = require('activitystrea.ms').models.Object;

function Thing(expanded, builder) {
  if (!(this instanceof Thing))
    return new Thing(expanded, builder);
  AsObject.call(this, expanded, builder || Thing.Builder);
}
util.inherits(Thing,AsObject);

Thing.Builder = function(types, base) {
  if (!(this instanceof Thing.Builder))
    return new Thing.Builder(types,base);
  types = (types || []).concat([schema.Thing]);
  AsObject.Builder.call(this, types, base || new Thing({}));
};
util.inherits(Thing.Builder,AsObject.Builder);

module.exports = Thing;

function defineProperty(key, getter, setter) {
  Object.defineProperty(Thing.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(Thing.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

defineProperty('additionalType',
  function() {
    return this.get(schema.additionalType);
  },
  function(val) {
    this.set(schema.additionalType, val);
    return this;
  }
);

defineProperty('alternateName',
  function() {
    return this.get(schema.alternateName);
  },
  function(val) {
    this.set(schema.alternateName, val);
    return this;
  }
);

defineProperty('description',
  function() {
    return this.get(schema.description);
  },
  function(val) {
    this.set(schema.description, val);
    return this;
  }
);

defineProperty('mainEntityOfPage',
  function() {
    return this.get(schema.mainEntityOfPage);
  },
  function(val) {
    this.set(schema.mainEntityOfPage, val);
    return this;
  }
);

defineProperty('name',
  function() {
    return this.get(schema.name);
  },
  function(val) {
    this.set(schema.name, val);
    return this;
  }
);

defineProperty('potentialAction',
  function() {
    return this.get(schema.potentialAction);
  },
  function(val) {
    this.set(schema.potentialAction, val);
    return this;
  }
);

defineProperty('sameAs',
  function() {
    return this.get(schema.sameAs);
  },
  function(val) {
    this.set(schema.sameAs, val);
    return this;
  }
);
