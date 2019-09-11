// const grammar = tracery.createGrammar();
const grammar = {
	"name": ["Arjun","Yuuma","Darcy","Mia","Chiaki","Izzi","Azra","Lina"],
	"animal": ["unicorn","raven","sparrow","scorpion","coyote","eagle","owl","lizard","zebra","duck","kitten"],
	"mood": ["vexed","indignant","impassioned","wistful","astute","courteous"],
	"story": ["#hero# traveled with her pet #heroPet#.  #hero# was never #mood#, for the #heroPet# was always too #mood#."],
	"origin": ["#[hero:#name#][heroPet:#animal#]story#"]
}

const traceGrammar = tracery.createGrammar(grammar);
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

function getRandomGrammarSentence() {
  document.getElementById('displayGrammar').innerHTML = traceGrammar.flatten('#origin');
}
