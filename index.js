(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/tmp/board.js
  var require_board = __commonJS({
    "src/tmp/board.js"(exports, module) {
      var shortcuts = {};
      var goal = 100;
      shortcuts[17] = 4;
      shortcuts[27] = 15;
      shortcuts[36] = 16;
      shortcuts[53] = 30;
      shortcuts[64] = 22;
      shortcuts[80] = 44;
      shortcuts[85] = 32;
      shortcuts[91] = 69;
      shortcuts[95] = 74;
      shortcuts[98] = 78;
      shortcuts[5] = 15;
      shortcuts[8] = 34;
      shortcuts[19] = 60;
      shortcuts[25] = 67;
      shortcuts[48] = 70;
      shortcuts[63] = 99;
      shortcuts[71] = 88;
      shortcuts[75] = 93;
      shortcuts[86] = 96;
      module.exports = [shortcuts, goal];
    }
  });

  // src/die.js
  var require_die = __commonJS({
    "src/die.js"(exports, module) {
      module.exports = function* () {
        while (true) {
          yield Math.floor(Math.random() * 6) + 1;
        }
      };
    }
  });

  // src/index.js
  var board = require_board();
  var die = require_die();
  if (localStorage.getItem("players")) {
    document.getElementById("players").value = localStorage.getItem("players");
  }
  document.getElementById("players").addEventListener("input", function(event) {
    localStorage.setItem("players", event.target.value);
  });
  document.getElementById("reset-button").onclick = function() {
    document.getElementById("players").value = "";
    localStorage.setItem("players", "");
  };
  document.getElementById("play-button").onclick = function() {
    const players = document.getElementById("players").value;
    const names = players.split("\n").map(function(x) {
      return x.trim();
    }).filter(function(x) {
      return x;
    });
    const result = engine.core.play(engine.convert.getsequence(die()), board[1], engine.convert.getclojure(board[0]), engine.convert.getclojure(names));
    const instruction = "enter the participant names into the white text box";
    alert(result ? `${result} wins!` : instruction);
  };
})();
//# sourceMappingURL=index.js.map
