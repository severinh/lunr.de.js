// Copied from the lunr.js test suite

test('stops stop words', function () {
  var stopWords = ['dir', 'und', 'aber', 'wenn'];

  stopWords.forEach(function (word) {
    equal(lunr.de.stopWordFilter(word), undefined);
  });
});

test('non stop words pass through', function () {
  var nonStopWords = ['interessante', 'wörter', 'können', 'passieren'];

  nonStopWords.forEach(function (word) {
    equal(lunr.de.stopWordFilter(word), word);
  });
});

test('should be registered with lunr.Pipeline', function () {
  equal(lunr.de.stopWordFilter.label, 'stopWordFilter-de');
  deepEqual(lunr.Pipeline.registeredFunctions['stopWordFilter-de'], lunr.de.stopWordFilter);
});