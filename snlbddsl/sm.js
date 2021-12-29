const readFileSync = require('fs').readFileSync;

const sourceMap = require('source-map');

const generatedFile = process.argv[2];
const sourceFile = process.argv[3];

const generatedLines = readFileSync(generatedFile, 'utf-8').split('\n');
const sourceContent = readFileSync(sourceFile, 'utf-8');

const fakeName = 'board.snlbddsl'; // path.basename(sourceFile);

const map = new sourceMap.SourceMapGenerator({
  file: generatedFile,
});

const lineProgress = {};

// thanks !!!
// https://medium.com/@francois.barrailla/javascript-iterate-over-array-values-and-indexes-using-a-for-of-loop-106a58972b24
for (const [idx, generatedLine] of generatedLines.entries()) {
  const mapping = generatedLine.match(/\/\/\s(.*),(.*)$/);
  if (mapping) {
    map.addMapping({
      generated: {
        line: idx + 1,
        column: 0,
      },
      source: fakeName,
      original: {
        line: parseFloat(mapping[2]),
        column: lineProgress[parseFloat(mapping[2])] || 0,
      },
    });

    lineProgress[parseFloat(mapping[2])] = parseFloat(mapping[1]) + 1;
  }
}

map.addMapping({
  generated: {
    line: generatedLines.length - 1,
    column: 0,
  },
  source: fakeName,
  original: {
    line: sourceContent.split('\n').length - 1,
    column: 0,
  },
});

map.setSourceContent(fakeName, sourceContent);

console.log(map.toString());

