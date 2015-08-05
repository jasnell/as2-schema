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

  it('should create a schema:Thing', function(done) {
    var thing = st.thing().name('test').get();
    assert.equal(thing.name, 'test');
    done();
  });

  it('should round trip', function(done) {
    var thing = st.thing().name('test').get();
    thing.stream().pipe(new as.Stream())
         .on('end', function() {
           done();
         })
         .pipe(through.obj(function(chunk,encoding,callback) {
            assert(chunk instanceof st.Thing);
            assert.equal(chunk.name, 'test');
            callback();
         }));

  });

});
