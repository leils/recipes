// Random Word Generator
const part1 = [
  "Are you stuck?",
  "Life looks down.",
  "You let your tea get cold.",
];

const part2 = [
  "Contract.",
  "Expand.",
  "People can be wrong sometimes.",
];

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
