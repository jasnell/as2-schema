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

  it('should create a schema:Product', function(done) {
    var product = st.product().name('test').brand('test').get();
    assert.equal(product.name.first, 'test');
    done();
  });

  it('should round trip', function(done) {
    var product = st.product().name('test').get();
    product.stream().pipe(new as.Stream())
         .on('end', function() {
           done();
         })
         .pipe(through.obj(function(chunk,encoding,callback) {
            assert(chunk instanceof st.Product);
            assert.equal(chunk.name.first, 'test');
            callback();
         }));

  });

});
