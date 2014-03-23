lunr.de.js - A German language extension for [lunr.js](http://lunrjs.com/)
==========================================================================

[![Build Status](https://travis-ci.org/severinh/lunr.de.js.png)](https://travis-ci.org/severinh/lunr.de.js)

[lunr.js](http://lunrjs.com/) is a simple text search engine implemented in JavaScript.
lunr.de.js adds a German stop word filter and stemmer to the lunr.js pipeline,
thus making text search more robust for German content.

Usage
-----

Include the plugin into a lunr index using `lunr.Index.prototype.use`.
This plugin will replace the default stopword filter and stemmer with
a German language specifc filter and stemmer.

Example:

```javascript
var index = lunr(function() {
  this.use(lunr.de);
  this.field("title", 10);
  this.field("body");
});
```

Credits
-------

* The list of German stop words has been downladed from [brenes's stopwords-filter repository](https://github.com/brenes/stopwords-filter).
* The German stemmer implementation is due to [Joder Illi](https://github.com/lambdafu/porter-stemmer/blob/master/german.js).
