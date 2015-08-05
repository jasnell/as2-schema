## Schema.org for Activity Streams 2.0

A largely experimental implementation of parts of the Schema.org model
built around the activitystrea.ms extension API. Still a work in progress.

```javascript
var as = require('activitystrea.ms');
var sperson = require('as-schema-person');
var sproduct = require('as-schema-product');
as.use(sperson);
as.use(sproduct);

as.like()
  .actor(
    sperson.person().
      .givenName('Sally')
      .familyName('Smith')
  )
  .object(
    sproduct.product()
      .name('A cool cellphone')  
  ).get()
   .pipe(process.stdout, {space:2});
```
Generates:
```json
{
  "@context": [
    "http://schema.org/",
    "http://www.w3.org/ns/activitystreams#"
  ],
  "@type": "Like",
  "actor": {
    "@type": ["schema:Person", "Person"],
    "schema:givenName": "Sally",
    "schema:familyName": "Smith"
  },
  "object": {
    "@type": "schema:Product",
    "schema:name": "A cool cellphone"
  }
}
```
