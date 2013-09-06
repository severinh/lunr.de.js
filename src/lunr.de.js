/**
 * lunr.de.js: A German language extension for lunr.js
 * 
 * Use the function 'lunr.de' exactly like the built-in convenience
 * function 'lunr' for creating a new index. Compared to 'lunr', it
 * adds a German stopword filter and stemmer to the pipeline by default.
 *
 * Example:
 *
 * var idx = lunr.de(function() {
 *   this.field("body");
 *   this.pipeline.add(...);
 * });
 *
 * Author: Severin Heiniger <severinheiniger@gmail.com>
 */

lunr.de = function (config) {
  var idx = new lunr.Index();
  idx.pipeline.add(lunr.de.stopWordFilter, lunr.de.stemmer);

  if (config) {
    config.call(idx, idx);
  }

  return idx;
};