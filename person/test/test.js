'use strict';

var as = require('activitystrea.ms');
var st = require('../');
var assert = require('assert');
var through = require('through2');

describe('It should work', function() {

  it ('should init with no errors', function(done) {
    as.use(st);
    done();
  });

  it('should create a schema:Person', function(done) {
    var product = st.person().givenName('test').get();
    assert.equal(product.givenName.first, 'test');
    done();
  });

  it('should round trip', function(done) {
    var person = st.person().givenName('test').get();
    person.stream().pipe(new as.Stream())
         .on('end', function() {
           done();
         })
         .pipe(through.obj(function(chunk,encoding,callback) {
            assert(chunk instanceof st.Person);
            assert.equal(chunk.givenName.first, 'test');
            callback();
         }));

  });

});
