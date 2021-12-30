const board = require('./tmp/board');

function* die() {
  while (true) {
    yield Math.floor(Math.random() * 6) + 1;
  }
}

document.getElementById('play-button').onclick = function() {
  const players = document.getElementById('players').value;
  const names = players.split('\n').map(function(x) {
    return x.trim();
  }).filter(function(x) {
    return x;
  });
  alert(
      app.core.play(
          app.convert.getsequence(die()),
          board[1],
          app.convert.getclojure(board[0]),
          app.convert.getclojure(names),
      ),
  );
};
