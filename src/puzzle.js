function Puzzle() {
  this.tiles = [];
  this.cursor = {
    y: 0,
    x: 0,
  }
}
Puzzle.prototype.createTiles = function () { // #TODO: remember that 5 can be a input from the user
  for (var y = 0; y < 5; y++) {              // or substituted by different levels of difficulty 
    for (var x = 0; x < 5; x++) { 
      this.tiles.push( {
        'name': 'tile' + y + x,
        'y': y,
        'x': x,
        'currentY': y,
        'currentX': x,
        'backgroundY': ( 600 / 5 ) * (y === 0 ? 0 : -y), 
        'backgroundX': ( 600 / 5 ) * (x === 0 ? 0 : -x),
      } );
    }
  }
};

Puzzle.prototype.shuffleTiles = function () {
  var straightYX = this.tiles.map( tile => tile.x + "," + tile.y );
  var shuffledYX = [];
  while ( straightYX.length > 0 ) {
    var randomNum = Math.floor( Math.random() * straightYX.length );
    shuffledYX.push( straightYX[ randomNum ] );
    straightYX.splice(randomNum, 1);
  }
  
  // reassigning shuffled coordinates to tiles
  this.tiles.map( function (tile, index) {
    tile.currentY = shuffledYX[ index ].split(',')[0];
    tile.currentX = shuffledYX[ index ].split(',')[1];
  } );
};

// function Tile (name, y, x) {
//   this.name = name;
//   this.y = y;
//   this.x = x;
//   this.currentY;
//   this.currentX;
//   this.bg = "";
// }

