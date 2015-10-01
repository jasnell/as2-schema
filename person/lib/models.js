'use strict';

var thing = require('as-schema-thing');
var Person = require('./_person');
var person = require('./person');
var vocabs = require('linkeddata-vocabs');
var rdfs = vocabs.rdfs;
var owl = vocabs.owl;
var rdf = vocabs.rdf;
var as = vocabs.as;
var schema = thing.vocab;

exports.Person = Person;
exports.vocab = person;

function gettypes(types, type) {
  return (types || []).concat([type]);
}

exports.person = function(types) {
  return new Person.Builder(gettypes(types,person.Person));
};

function person_recognizer(reasoner, type) {
  var thing;
  if (type) {
    if (reasoner.node(type).is(person.Person)) {
      thing = Person;
    }
  }
  return thing;
}

var inited = false;

exports.init = function(models, reasoner, context) {
  thing.init(models, reasoner, context);
  if (inited) return;
  inited = true;

  models.use(person_recognizer.bind(null,reasoner));

  var graph = new reasoner.Graph();
  graph.add({
    subject: person.Person,
    predicate: rdfs.subClassOf,
    object: schema.Thing
  });
  graph.add({
    subject: person.Person,
    predicate: rdfs.subClassOf,
    object: as.Actor
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
    [person.additionalName, functionalDatatype],
    [person.address, owl.ObjectProperty],
    [person.affiliation, owl.ObjectProperty],
    [person.alumniOf, owl.ObjectProperty],
    [person.award, functionalDatatype],
    [person.birthDate, functionalDatatype],
    [person.birthPlace, functionalObject],
    [person.brand, owl.ObjectProperty],
    [person.children, owl.ObjectProperty],
    [person.colleague, owl.ObjectProperty],
    [person.contactPoint, owl.ObjectProperty],
    [person.deathDate, functionalDatatype],
    [person.deathPlace, owl.functionalObject],
    [person.duns, functionalDatatype],
    [person.email, owl.DatatypeProperty],
    [person.familyName, functionalDatatype],
    [person.faxNumber, functionalDatatype],
    [person.follows, owl.ObjectProperty],
    [person.gender, functionalDatatype],
    [person.givenName, functionalDatatype],
    [person.globalLocationNumber, functionalDatatype],
    [person.hasPOS, owl.ObjectProperty],
    [person.height, functionalDatatype],
    [person.homeLocation, owl.ObjectProperty],
    [person.honorificPrefix, owl.DatatypeProperty],
    [person.honorificSuffix, owl.DatatypeProperty],
    [person.isicV4, functionalDatatype],
    [person.jobTitle, functionalDatatype],
    [person.knows, owl.ObjectProperty],
    [person.makesOffer, owl.ObjectProperty],
    [person.memberOf, owl.ObjectProperty],
    [person.naics, functionalDatatype],
    [person.nationality, owl.ObjectProperty],
    [person.netWorth, owl.ObjectProperty],
    [person.owns, owl.ObjectProperty],
    [person.parent, owl.ObjectProperty],
    [person.performerIn, owl.ObjectProperty],
    [person.relatedTo, owl.ObjectProperty],
    [person.seeks, owl.ObjectProperty],
    [person.sibling, owl.ObjectProperty],
    [person.spouse, owl.ObjectProperty],
    [person.taxID, functionalDatatype],
    [person.telephone, owl.DatatypeProperty],
    [person.vatID, functionalDatatype],
    [person.weight, functionalDatatype],
    [person.workLocation, owl.ObjectProperty],
    [person.worksFor, owl.ObjectProperty]
  ].forEach(function(pair) {
    graph.add({
      subject: pair[0],
      predicate: rdf.type,
      object: pair[1]
    });
  });

  reasoner.bind(graph);
};
