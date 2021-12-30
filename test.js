const assert = require('assert');

const [shortcuts, goal] = require('./src/tmp/board');
const {convert, core} = require('./resources/public/js/main.js').app;

assert.equal(goal, 100);

// this is mainly here to test the board generator
// by running everything as it is run in the webpage, except with a loaded die
// and predicting the outcome

// first test the loaded die
const startTime = new Date();
const testDie = loadedDie(1, 2, 3);
assert.equal(testDie.next().value, 1);
assert.equal(testDie.next().value, 2);
assert.equal(testDie.next().value, 3);
for (let n = 1; true; n++) {
  assert.equal(testDie.next().value, 1);
  const fairRoll = testDie.next().value;
  assert([1, 2, 3, 4, 5, 6].indexOf(fairRoll) + 1, fairRoll);
  if (fairRoll !== 1 && n > 3) {
    break;
  }
  assert(new Date() - startTime < 10000);
  assert.equal(testDie.next().value, 1);
}
// now that we have determined that the die itself will eventually produce
// a number other than 1 for the second player, we can trust that all other
// tests will eventually end, and if they go on forever, treat that like any
// other infinite loop created by accident, and not put a special timeout


// roll to see who goes first
assert.equal(core.play(
    convert.getclojure([1, 2, 2, 2, 2, 2, 2]),
    5,
    convert.getclojure({}),
    convert.getclojure(['javascript', 'clojurescript']),
), 'clojurescript wins!');

assert.equal(core.play(
    convert.getclojure([3, 2, 2, 2, 2, 2, 2]),
    5,
    convert.getclojure({}),
    convert.getclojure(['javascript', 'clojurescript']),
), 'javascript wins!');

// second player gets a great roll
assert.equal(core.play(
    convert.getclojure([3, 2, 2, 6, 2, 2, 2]),
    5,
    convert.getclojure({}),
    convert.getclojure(['javascript', 'clojurescript']),
), 'clojurescript wins!');

// winning player hits a snake
// there is an almost identical test in the clojure unit tests so that if this
// fails, I know it is from the way the arguments are passed in
assert.equal(core.play(
    convert.getclojure([3, 2, 5, 4, 5, 4]),
    8,
    convert.getclojure({5: 1}),
    convert.getclojure(['javascript', 'clojurescript']),
), 'clojurescript wins!');

// debugging hint - replace core.play with play to be able to set a breakpoint
// right where you want it in the node debugger
// function play(arguments) {
//   const args = Array.from(arguments);
//   return core.play.apply(null, args);
// }


// whoever rolls lower in the first round goes second and wins
assert.equal(core.play(
    convert.getsequence(loadedDie(1, 2)),
    20,
    convert.getclojure({3: 1}),
    convert.getclojure(['javascript', 'clojurescript']),
), 'javascript wins!');

assert.equal(core.play(
    convert.getsequence(loadedDie(1, 2)),
    goal,
    convert.getclojure(shortcuts),
    convert.getclojure(['javascript', 'clojurescript']),
), 'javascript wins!');

assert.equal(core.play(
    convert.getsequence(loadedDie(6, 2)),
    goal,
    convert.getclojure(shortcuts),
    convert.getclojure(['javascript', 'clojurescript']),
), 'clojurescript wins!');

// tie in the first round which means that cljs will eventually win the a roll
// to see who goes first (probably the next time) and then js will win
assert.equal(core.play(
    convert.getsequence(loadedDie(6, 6)),
    goal,
    convert.getclojure(shortcuts),
    convert.getclojure(['javascript', 'clojurescript']),
), 'javascript wins!');

// three players - second player gets highest score, so third player moves into
// second position and wins
assert.equal(core.play(
    convert.getsequence(loadedDie(1, 6, 1)),
    goal,
    convert.getclojure(shortcuts),
    convert.getclojure(['typescript', 'clojurescript', 'javascript']),
), 'javascript wins!');

// only the player that goes second gets a fair deal.  Everybody else always
// rolls a 1 which, if you look at the board, will get you stuck this loop:
// 28 -> 84... 87 -> 24
// and since I can set the initial rolls, I can determine who goes second
function* loadedDie() {
  const initialRolls = Array.from(arguments);
  for (const roll of initialRolls) {
    yield roll;
  }
  for (let i = 0; true; i++) {
    if (i % initialRolls.length === 1) {
      yield Math.floor(Math.random() * 6) + 1;
    } else {
      yield 1;
    }
  }
}
