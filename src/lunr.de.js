/**
 * lunr.de.js: A German language extension to lunr.js
 * 
 * It includes a German stop word filter and a stemmer.
 */

lunr.de = function () {
  this.pipeline = new lunr.Pipeline;
  this.pipeline.add(
    lunr.de.stopWordFilter,
    lunr.de.stemmer
  );
  return this;
}