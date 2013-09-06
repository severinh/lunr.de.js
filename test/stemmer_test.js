// Copied from the lunr.js test suite

var stemmingFixture = { "läufer": "lauf" };

test('should stem words correctly', function () {
  Object.keys(stemmingFixture).forEach(function (testWord) {
    var expected = stemmingFixture[testWord];

    equal(lunr.de.stemmer(testWord), expected);
  });
});

test('should be registered with lunr.Pipeline', function () {
  equal(lunr.de.stemmer.label, 'stemmer-de');
  deepEqual(lunr.Pipeline.registeredFunctions['stemmer-de'], lunr.de.stemmer);
});