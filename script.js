
debugger;
const grammar = tracery.createGrammar();
const part1 = [
  "Are you stuck?",
  "Life looks down sometimes.",
  "You let your tea get cold.",
];

const part2 = [
  "Blue.",
  "Expand.",
  "People can be wrong sometimes.",
];

function getRandom(choices) {
  return choices[(Math.floor(Math.random() * choices.length))];
}

function flipCoin() {
  return Math.random() < 0.5;
}

function generateRandomQuote() {
  let stringList = [];
  stringList.push(getRandom(part1));
  if (flipCoin()) {
    stringList.push(getRandom(part2));
  }

  return stringList.join(' ');
}

function getRandomWord() {
  document.getElementById('displayWord').innerHTML = generateRandomQuote();
}
