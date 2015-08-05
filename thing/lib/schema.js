'use strict';

function define(key, val) {
  Object.defineProperty(exports, key, {
    enumerable: true,
    configurable: false,
    value: val
  });
}

define('ns', 'http://schema.org/');
define('Thing', exports.ns + 'Thing' );
define('additionalType', exports.ns + 'additionalType');
define('alternateName', exports.ns + 'alternateName');
define('description', exports.ns + 'description');
define('mainEntityOfPage', exports.ns + 'mainEntityOfPage');
define('name', exports.ns + 'name');
define('potentialAction', exports.ns + 'potentialAction');
define('sameAs', exports.ns + 'sameAs');
