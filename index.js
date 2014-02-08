var sheets = require('./sheets');

function randomItem(array) {
  return array[(Math.random() * array.length) | 0];
}

module.exports = function(opts) {
  // get or create a canvas for the spritesheet generation
  var canvas = (opts || {}).canvas || document.createElement('canvas');

  // determine the body type
  var body = (opts || {}).body || randomItem(sheets.bodies);

  // ensure the canvas is the correct dimensions
  canvas.width = 832;
  canvas.height = 1344;

  return canvas;
};