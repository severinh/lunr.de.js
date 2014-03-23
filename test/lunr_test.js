// Copied from the lunr.js test suite

test('should set up the pipeline', function () {
  var index = lunr(function () {
    this.use(lunr.de)
  });

  var stack = index.pipeline._stack;

  equal(stack.length, 2);
  equal(stack.indexOf(lunr.de.stopWordFilter), 0);
  equal(stack.indexOf(lunr.de.stemmer), 1);
});

test('search', function () {
  var index = lunr(function () {
    this.use(lunr.de)

    this.field('title')
    this.field('body')
  })

  var docs = [{
    id: 1,
    title: 'Regierung fördert Deal mit Saudi-Arabien',
    body: 'Mehr als hundert Militärboote sollen aus Deutschland nach Saudi-Arabien verkauft werden. Nach SPIEGEL-Informationen belegt ein vertrauliches Dokument nun: Die Bundesregierung will den Deal mit einer Hermes-Bürgschaft belegen - mit rund 1,4 Milliarden Euro'
  },{
    id: 2,
    title: 'Mitglieder beschweren sich über Ambulanzflüge',
    body: 'Zögernde Reaktion auf Hilferufe, Rückholung trotz dringender Aufforderung abgelehnt - im SPIEGEL beschweren sich Patienten, dass der ADAC sie im Stich gelassen habe.  Verkehrsminister Dobrindt fordert eine Erneuerung des Clubs von Grund auf'
  },{
    id: 3,
    title: 'Alice Schwarzer räumt Fehler ein',
    body: 'Alice Schwarzer hat eigenen Angaben zufolge rund 200.000 Euro an den deutschen Fiskus nachbezahlt - nachdem sie jahrelang ein Schweizer Konto verheimlicht hatte. Sie spricht von einem "Fehler"'
  }]

  docs.forEach(function (doc) {
    index.add(doc)
  })

  var result1 = index.search("fördert")
  equal(result1.length, 2)
  equal(result1[0].ref, "1")
  equal(result1[1].ref, "2")

  var result2 = index.search("hundert Militärboote sollen")
  equal(result2.length, 1)
  equal(result2[0].ref, "1")
})

