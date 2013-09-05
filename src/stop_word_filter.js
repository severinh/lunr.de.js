/**
* lunr.de.stopWordFilter is a German language stop word list filter, any words
* contained in the list will not be passed through the filter.
*
* This is intended to be used in the Pipeline. If the token does not pass the
* filter then undefined will be returned.
*
* The list of stopwords has been downloaded from
* https://github.com/brenes/stopwords-filter
*
* @module
* @param {String} token The token to pass through the filter
* @returns {String}
* @see lunr.Pipeline
*/

lunr.de.stopWordFilter = function (token) {
  if (lunr.de.stopWordFilter.stopWords.indexOf(token) === -1) {
    return token;
  }
}

lunr.de.stopWordFilter.stopWords = new lunr.SortedSet;
lunr.de.stopWordFilter.stopWords.length = 232;

// The space at the beginning is crucial: It marks the empty string
// as a stop word. lunr.js crashes during search when documents
// processed by the pipeline still contain the empty string.
lunr.de.stopWordFilter.stopWords.elements = ' aber alle allem allen aller alles als also am an ander andere anderem anderen anderer anderes anderm andern anderr anders auch auf aus bei bin bis bist da damit dann der den des dem die das daß derselbe derselben denselben desselben demselben dieselbe dieselben dasselbe dazu dein deine deinem deinen deiner deines denn derer dessen dich dir du dies diese diesem diesen dieser dieses doch dort durch ein eine einem einen einer eines einig einige einigem einigen einiger einiges einmal er ihn ihm es etwas euer eure eurem euren eurer eures für gegen gewesen hab habe haben hat hatte hatten hier hin hinter ich mich mir ihr ihre ihrem ihren ihrer ihres euch im in indem ins ist jede jedem jeden jeder jedes jene jenem jenen jener jenes jetzt kann kein keine keinem keinen keiner keines können könnte machen man manche manchem manchen mancher manches mein meine meinem meinen meiner meines mit muss musste nach nicht nichts noch nun nur ob oder ohne sehr sein seine seinem seinen seiner seines selbst sich sie ihnen sind so solche solchem solchen solcher solches soll sollte sondern sonst über um und uns unse unsem unsen unser unses unter viel vom von vor während war waren warst was weg weil weiter welche welchem welchen welcher welches wenn werde werden wie wieder will wir wird wirst wo wollen wollte würde würden zu zum zur zwar zwischen'.split(' ');

lunr.Pipeline.registerFunction(lunr.de.stopWordFilter, 'stopWordFilter-de');