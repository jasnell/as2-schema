'use strict';

const Thing = require('./_thing');
const schema = require('./schema');
const vocabs = require('linkeddata-vocabs');
const as = vocabs.as;
const rdfs = vocabs.rdfs;
const owl = vocabs.owl;
const rdf = vocabs.rdf;

exports.Thing = Thing;

function gettypes(types, type) {
  return (types || []).concat([type]);
}

function thing_recognizer(reasoner, type) {
  var thing;
  if (type && reasoner.node(type).is(schema.Thing)) {
    thing = Thing;
  }
  return thing;
}

exports.thing = function(types) {
  return new Thing.Builder(gettypes(types,schema.Thing));
};

exports.vocab = schema;

var inited = false;

exports.init = function(models, reasoner, context) {
  if (inited) return;
  inited = true;
  context.add('http://schema.org/');

  models.use(thing_recognizer.bind(null,reasoner));

  var graph = new reasoner.Graph();
  graph.add({
    subject: schema.Thing,
    predicate: rdfs.subClassOf,
    object: as.Object
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
    [schema.additionalType, owl.ObjectProperty],
    [schema.alternateName, functionalDatatype],
    [schema.description, functionalDatatype],
    [schema.mainEntityOfPage, functionalObject],
    [schema.name, functionalDatatype],
    [schema.potentialAction, owl.ObjectProperty],
    [schema.sameAs, owl.ObjectProperty]
  ].forEach(function(pair) {
    graph.add({
      subject: pair[0],
      predicate: rdf.type,
      object: pair[1]
    });
  });

  reasoner.bind(graph);
};
