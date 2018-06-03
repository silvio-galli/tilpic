function Puzzle() {
  // collect the tiles properties inside an array of objects
  this.tiles = [];
  // the cursor vale is an object that stores its coordinates
  this.cursor = {
    y: 0,
    x: 0,
  }
}

// inside createTiles() method we instatiate anonymous objects
// that will represent the tiles of our puzzle
Puzzle.prototype.createTiles = function () {          // #TODO: remember that 3 can be a input from the user
  for (var row = 0; row < 3; row++) {                       // or substituted by different levels of difficulty 
    for (var col = 0; col < 3; col++) {
      // here is building of the anonymous 'tile' object 
      this.tiles.push( {
        name: 'tile' + row + col,
        // starting position of the tile onto the board
        y: row,
        x: col,
        // below the current position of the tile onto the board
        currentY: row,
        currentX: col,
        // bgY and bgX are used to assign the correct portion of the
        // image as a background of the tile
        bgY: ( 600 / 3 ) * (row === 0 ? 0 : -row), 
        bgX: ( 600 / 3 ) * (col === 0 ? 0 : -col),
      } );
    }
  }
};

Puzzle.prototype.shuffleTiles = function () {
  // retrieve starting coordinates from the object
  var startingTilesCoordinates = this.tiles.map( tile => tile.x + "," + tile.y );
  var shuffledTilesCoordinates = [];
  // shuffle the starting coordinates inside shuffledTilesCoordinates
  while ( startingTilesCoordinates.length > 0 ) {
    var randomNum = Math.floor( Math.random() * startingTilesCoordinates.length );
    shuffledTilesCoordinates.push( startingTilesCoordinates[ randomNum ] );
    startingTilesCoordinates.splice(randomNum, 1);
  }
  
  // reassigning shuffled coordinates to tiles
  for ( var i = 0; i < shuffledTilesCoordinates.length; i++) {
    this.tiles[ i ].currentY = shuffledTilesCoordinates[ i ].split(',')[ 0 ];
    this.tiles[ i ].currentX = shuffledTilesCoordinates[ i ].split(',')[ 1 ];
  }
};

// function Tile (name, y, x) {
//   this.name = name;
//   this.y = y;
//   this.x = x;
//   this.currentY;
//   this.currentX;
//   this.bg = "";
// }

