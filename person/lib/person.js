'use strict';

var schema = require('as-schema-thing').vocab;

function define(key) {
  Object.defineProperty(exports, key, {
    enumerable: true,
    configurable: false,
    value: ns + key
  });
}

var ns = schema.ns;

define('ns', ns);
define('Person');
define('additionalName');
define('address');
define('affiliation');
define('alumniOf');
define('award');
define('birthDate');
define('birthPlace');
define('brand');
define('children');
define('colleague');
define('concactPoint');
define('deathDate');
define('deathPlace');
define('duns');
define('email');
define('familyName');
define('faxNumber');
define('follows');
define('gender');
define('givenName');
define('globalLocationNumber');
define('hasPOS');
define('height');
define('homeLocation');
define('honorificPrefix');
define('honorificSuffix');
define('isicV4');
define('jobTitle');
define('knows');
define('makesOffer');
define('memberOf');
define('naics');
define('nationality');
define('netWorth');
define('owns');
define('parent');
define('performerIn');
define('relatedTo');
define('seeks');
define('sibling');
define('spouse');
define('taxID');
define('telephone');
define('vatID');
define('weight');
define('workLocation');
define('worksFor');
