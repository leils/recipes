// Rhyming?
function getRhymingPoetry() {
  const inputWord = document.getElementById('rhymeText').value;

  const rhymingWords = pronouncing.rhymes(inputWord.toLowerCase());

  if (rhymingWords.length === 0) {
    $('#rhymingPoetry').html("Sorry, I'm having trouble generating related words.");
  } else {
    const rhymingChosen = [
      getRandom(rhymingWords),
      getRandom(rhymingWords),
      getRandom(rhymingWords)
    ]

    const phones0 = pronouncing.phonesForWord(rhymingChosen[0])[0].split(' ');
    const phones1 = pronouncing.phonesForWord(rhymingChosen[1])[0].split(' ');

    const set0 = getRandomN(pronouncing.search(phones0[0]), 2);
    const set1 = getRandomN(pronouncing.search(phones1[0]), 2);

    let line1 = [rhymingChosen[0]].concat(set0);
    let line2 = [rhymingChosen[1]].concat(set1);
    let line3 = rhymingChosen[2];

    const grammar = {
      "input": [inputWord],
      "title": ["I am #input#"],
      "bank1": line1,
      "line1": ["I #bank1#, #bank1#, #bank1#"],
      "bank2": line2,
      "line2": ["Let me #bank2#, #bank2#, #bank2#"]
    };

    const poemGenerator = tracery.createGrammar(grammar);

    $('#poemTitle').html(poemGenerator.flatten('#title'));
    $('#rhymingPoetry').html(poemGenerator.flatten('#line1'));
    $('#phones0').html(poemGenerator.flatten('#line2'));

    $('#input').html(inputWord);
    $('#line1').html(line1);
    $('#line2').html(line2);
    $('#line3').html(line3);
  }
}
