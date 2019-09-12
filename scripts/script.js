function getRandom(choices) {
  return choices[(Math.floor(Math.random() * choices.length))];
}

function flipCoin() {
  return Math.random() < 0.5;
}

function getRandomN(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

// Rhyming?
function getRhymingPoetry() {
  const inputWord = document.getElementById('rhymeText').value;

  const rhymingWords = pronouncing.rhymes(inputWord.toLowerCase());

  const poem = [
    getRandom(rhymingWords),
    getRandom(rhymingWords),
    getRandom(rhymingWords)
  ]

  const phones0 = pronouncing.phonesForWord(poem[0])[0].split(' ');
  const phones1 = pronouncing.phonesForWord(poem[1])[0].split(' ');

  const set0 = getRandomN(pronouncing.search(phones0[0]), 2);
  const set1 = getRandomN(pronouncing.search(phones1[0]), 2);


  document.getElementById('rhymingPoetry').innerHTML = poem.join(' ');
  document.getElementById('phones0').innerHTML = phones0.join(' ');
  document.getElementById('phones1').innerHTML = phones1.join(' ');
}
