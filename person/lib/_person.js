'use strict';

var util     = require('util');
var person   = require('./person');
var Thing = require('as-schema-thing').Thing;
var as = require('linkeddata-vocabs').as;

function Person(expanded, builder) {
  if (!(this instanceof Person))
    return new Person(expanded, builder);
  Thing.call(this, expanded, builder || Person.Builder);
}
util.inherits(Person,Thing);

Person.Builder = function(types, base) {
  if (!(this instanceof Person.Builder))
    return new Person.Builder(types,base);
  types = (types || []).concat([person.Person, as.Person]);
  Thing.Builder.call(this, types, base || new Person({}));
};
util.inherits(Person.Builder,Thing.Builder);

module.exports = Person;

function defineProperty(key, getter, setter) {
  Object.defineProperty(Person.prototype, key, {
    enumerable: true,
    configurable: false,
    get: getter
  });
  Object.defineProperty(Person.Builder.prototype, key, {
    enumerable: true,
    configurable: false,
    value: setter
  });
}

['additionalName',
'address',
'affiliation',
'alumniOf',
'award',
'birthDate',
'birthPlace',
'brand',
'children',
'colleague',
'concactPoint',
'deathDate',
'deathPlace',
'duns',
'email',
'familyName',
'faxNumber',
'follows',
'gender',
'givenName',
'globalLocationNumber',
'hasPOS',
'height',
'homeLocation',
'honorificPrefix',
'honorificSuffix',
'isicV4',
'jobTitle',
'knows',
'makesOffer',
'memberOf',
'naics',
'nationality',
'netWorth',
'owns',
'parent',
'performerIn',
'relatedTo',
'seeks',
'sibling',
'spouse',
'taxID',
'telephone',
'vatID',
'weight',
'workLocation',
'worksFor'].forEach(function(item) {
  defineProperty(item,
    function() {
      return this.get(person[item]);
    },
    function(val) {
      this.set(person[item], val);
      return this;
    }
  );
});
