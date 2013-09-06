// Copied from the lunr.js test suite

test('returns a new instance of lunr.Index', function () {
  var index = lunr.de();

  equal(index.constructor, lunr.Index);
});

test('should set up the pipeline', function () {
  var index = lunr.de();
  var stack = index.pipeline._stack;

  equal(stack.length, 2);
  equal(stack.indexOf(lunr.de.stopWordFilter), 0);
  equal(stack.indexOf(lunr.de.stemmer), 1);
});

test('passing a config fn which is called with the new index', function () {
  var configCtx, configArg;

  var index = lunr.de(function (idx) {
    configCtx = this;
    configArg = idx;

    this.ref('cid');

    this.field('title', 10);
    this.field('body');
  });

  equal(configCtx, index);
  equal(configArg, index);

  equal(index._ref, 'cid');
  equal(index._fields.length, 2);
});