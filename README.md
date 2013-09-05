lunr.de.js - A German Language Extension for [lunr.js](http://lunrjs.com/)
==========================================================================

[lunr.js](http://lunrjs.com/) is a simple full-text search engine implemented in JavaScript.
lunr.de.js adds a German stop word filter and stemmer to the `lunr.js' pipeline,
thus making the full-text search of German content more robust.

Usage
-----

Make sure to load both the core `lunr.js` and `lunr.de.js` extension.
To build the index, use the convenience function `lunr.de` instead of `lunr`.
`lunr.de` adds the German stop word filter and stemmer to the pipeline
instead of the default English one.

Example:

	var index = lunr.de(function() {
		this.field("title", 10);
		this.field("body");
	})

Credits
-------

* The list of German stop words has been downladed from [brenes's stopwords-filter repository](https://github.com/brenes/stopwords-filter).
* The German stemmer implementation is due to [Joder Illi](https://github.com/lambdafu/porter-stemmer/blob/master/german.js).