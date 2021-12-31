const board = require('./tmp/board');
const die = require('./die');

if (localStorage.getItem('players')) {
  document.getElementById('players').value = localStorage.getItem('players');
}

document.getElementById('players').addEventListener('input', function(event) {
  localStorage.setItem('players', event.target.value);
});

document.getElementById('reset-button').onclick = function() {
  document.getElementById('players').value = '';
  // the above doesn't count as input I guess!
  localStorage.setItem('players', '');
};

document.getElementById('play-button').onclick = function() {
  const players = document.getElementById('players').value;
  const names = players.split('\n').map(function(x) {
    return x.trim();
  }).filter(function(x) {
    return x;
  });

  const result = engine.core.play(
      engine.convert.getsequence(die()),
      board[1],
      engine.convert.getclojure(board[0]),
      engine.convert.getclojure(names),
  );
  alert(result ? `${result} wins!` : 'no players');
};
