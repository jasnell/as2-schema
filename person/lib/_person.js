'use strict';

var person   = require('./person');
var Thing = require('as-schema-thing').Thing;
var as = require('linkeddata-vocabs').as;

class Person extends Thing {
  constructor(expanded, builder) {
    super(expanded, builder || Person.Builder);
  }

  get additionalName() {
    return this.get(person.additionalName);
  }

  get address() {
    return this.get(person.address);
  }

  get affiliation() {
    return this.get(person.affiliation);
  }

  get alumniOf() {
    return this.get(person.alumniOf);
  }

  get award() {
    return this.get(person.award);
  }

  get birthDate() {
    return this.get(person.birthDate);
  }

  get birthPlace() {
    return this.get(person.birthPlace);
  }

  get brand() {
    return this.get(person.brand);
  }

  get children() {
    return this.get(person.children);
  }

  get colleague() {
    return this.get(person.colleague);
  }

  get contactPoint() {
    return this.get(person.contactPoint);
  }

  get deathDate() {
    return this.get(person.deathDate);
  }

  get deathPlace() {
    return this.get(person.deathPlace);
  }

  get duns() {
    return this.get(person.duns);
  }

  get email() {
    return this.get(person.email);
  }

  get familyName() {
    return this.get(person.familyName);
  }

  get faxNumber() {
    return this.get(person.faxNumber);
  }

  get follows() {
    return this.get(person.follows);
  }

  get gender() {
    return this.get(person.gender);
  }

  get givenName() {
    return this.get(person.givenName);
  }

  get globalLocationNumber() {
    return this.get(person.globalLocationNumber);
  }

  get hasPOS() {
    return this.get(person.hasPOS);
  }

  get height() {
    return this.get(person.height);
  }

  get homeLocation() {
    return this.get(person.homeLocation);
  }

  get honorificPrefix() {
    return this.get(person.honorificPrefix);
  }

  get honorificSuffix() {
    return this.get(person.honorificSuffix);
  }

  get isicV4() {
    return this.get(person.isicV4);
  }

  get jobTitle() {
    return this.get(person.jobTitle);
  }

  get knows() {
    return this.get(person.knows);
  }

  get makesOffer() {
    return this.get(person.makesOffer);
  }

  get memberOf() {
    return this.get(person.memberOf);
  }

  get naics() {
    return this.get(person.naics);
  }

  get nationality() {
    return this.get(person.nationality);
  }

  get netWorth() {
    return this.get(person.netWorth);
  }

  get owns() {
    return this.get(person.owns);
  }

  get parent() {
    return this.get(person.parent);
  }

  get performerIn() {
    return this.get(person.performerIn);
  }

  get relatedTo() {
    return this.get(person.relatedTo);
  }

  get seeks() {
    return this.get(person.seeks);
  }

  get sibling() {
    return this.get(person.sibling);
  }

  get spouse() {
    return this.get(person.spouse);
  }

  get taxID() {
    return this.get(person.taxID);
  }

  get telephone() {
    return this.get(person.telephone);
  }

  get vatID() {
    return this.get(person.vatID);
  }

  get weight() {
    return this.get(person.weight);
  }

  get workLocation() {
    return this.get(person.workLocation);
  }

  get worksFor() {
    return this.get(person.worksFor);
  }

}

class PersonBuilder extends Thing.Builder {
  constructor(types, base) {
    types = (types || []).concat([person.Person, as.Person]);
    super(types, base || new Person({}));
  }

  additionalName(val) {
    this.set(person.additionalName, val);
    return this;
  }

  address(val) {
    this.set(person.address, val);
    return this;
  }

  affiliation(val) {
    this.set(person.affiliation, val);
    return this;
  }

  alumniOf(val) {
    this.set(person.alumniOf, val);
    return this;
  }

  award(val) {
    this.set(person.award, val);
    return this;
  }

  birthDate(val) {
    this.set(person.birthDate, val);
    return this;
  }

  birthPlace(val) {
    this.set(person.birthPlace, val);
    return this;
  }

  brand(val) {
    this.set(person.brand, val);
    return this;
  }

  children(val) {
    this.set(person.children, val);
    return this;
  }

  colleague(val) {
    this.set(person.colleague, val);
    return this;
  }

  contactPoint(val) {
    this.set(person.contactPoint, val);
    return this;
  }

  deathDate(val) {
    this.set(person.deathDate, val);
    return this;
  }

  deathPlace(val) {
    this.set(person.deathPlace, val);
    return this;
  }

  duns(val) {
    this.set(person.duns, val);
    return this;
  }

  email(val) {
    this.set(person.email, val);
    return this;
  }

  familyName(val) {
    this.set(person.familyName, val);
    return this;
  }

  faxNumber(val) {
    this.set(person.faxNumber, val);
    return this;
  }

  follows(val) {
    this.set(person.follows, val);
    return this;
  }

  gender(val) {
    this.set(person.gender, val);
    return this;
  }

  givenName(val) {
    this.set(person.givenName, val);
    return this;
  }

  globalLocationNumber(val) {
    this.set(person.globalLocationNumber, val);
    return this;
  }

  hasPOS(val) {
    this.set(person.hasPOS, val);
    return this;
  }

  height(val) {
    this.set(person.height, val);
    return this;
  }

  homeLocation(val) {
    this.set(person.homeLocation, val);
    return this;
  }

  honorificPrefix(val) {
    this.set(person.honorificPrefix, val);
    return this;
  }

  honorificSuffix(val) {
    this.set(person.honorificSuffix, val);
    return this;
  }

  isicV4(val) {
    this.set(person.isicV4, val);
    return this;
  }

  jobTitle(val) {
    this.set(person.jobTitle, val);
    return this;
  }

  knows(val) {
    this.set(person.knows, val);
    return this;
  }

  makesOffer(val) {
    this.set(person.makesOffer, val);
    return this;
  }

  memberOf(val) {
    this.set(person.memberOf, val);
    return this;
  }

  naics(val) {
    this.set(person.naics, val);
    return this;
  }

  nationality(val) {
    this.set(person.nationality, val);
    return this;
  }

  netWorth(val) {
    this.set(person.netWorth, val);
    return this;
  }

  owns(val) {
    this.set(person.owns, val);
    return this;
  }

  parent(val) {
    this.set(person.parent, val);
    return this;
  }

  performerIn(val) {
    this.set(person.performerIn, val);
    return this;
  }

  relatedTo(val) {
    this.set(person.relatedTo, val);
    return this;
  }

  seeks(val) {
    this.set(person.seeks, val);
    return this;
  }

  sibling(val) {
    this.set(person.sibling, val);
    return this;
  }

  spouse(val) {
    this.set(person.spouse, val);
    return this;
  }

  taxID(val) {
    this.set(person.taxID, val);
    return this;
  }

  telephone(val) {
    this.set(person.telephone, val);
    return this;
  }

  vatID(val) {
    this.set(person.vatID, val);
    return this;
  }

  weight(val) {
    this.set(person.weight, val);
    return this;
  }

  workLocation(val) {
    this.set(person.workLocation, val);
    return this;
  }

  worksFor(val) {
    this.set(person.worksFor, val);
    return this;
  }
}
Person.Builder = PersonBuilder;

module.exports = Person;
