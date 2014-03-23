/**
 * lunr.de.js: A German language extension for lunr.js
 * 
 * Include the plugin into a lunr index using lunr.Index.prototype.use.
 * This plugin will replace the default stopword filter and stemmer with
 * a German language specifc filter and stemmer.
 *
 * Example:
 *
 * var idx = lunr(function() {
 *   this.use(lunr.de);
 *   this.field("body");
 *   this.pipeline.add(...);
 * });
 *
 * Author: Severin Heiniger <severinheiniger@gmail.com>
 */

lunr.de = function () {
  this.pipeline.reset();
  this.pipeline.add(
    lunr.de.stopWordFilter,
    lunr.de.stemmer
  );
}
