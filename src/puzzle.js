function Puzzle( n = 3 ) {
  this.level = n; // the higher the number, the higher the difficult
                  // 3,4,5 will be the different levels
  this.board = [];
  // collect the tiles properties inside an array of objects
  this.tiles = [];
  // the cursor vale is an object that stores its coordinates
  this.cursor = {
    y: this.level - 1,
    x: this.level - 1,
  }
}


// inside createTiles() method we instatiate anonymous objects
// that will represent the tiles of our puzzle
Puzzle.prototype.createTiles = function () {
  if ( this.tiles.length > 0 ) {
    console.log( "You have already a bunch of tiles. Cannot continue with this operation..." );
    return;
  }
  for (var row = 0; row < this.level; row++) { 
    for (var col = 0; col < this.level; col++) {
      // here is building of the anonymous 'tile' object 
      this.tiles.push( {
        name: row + "-" + col,
        // starting position of the tile onto the board
        y: row,
        x: col,
        // below the current position of the tile onto the board
        currentY: row,
        currentX: col,
        // tiles are squares we store the size of its side
        side: 600 / this.level,
        // bgY and bgX are used to assign the correct portion of the
        // image as a background of the tile
        bgY: ( 600 / this.level ) * (row === 0 ? 0 : -row), 
        bgX: ( 600 / this.level ) * (col === 0 ? 0 : -col),
      } );
    }
  }
};

// shuffleTiles() method shuffles tiles coordinates
// so that they will be randomly dislpayed on the game board
Puzzle.prototype.shuffleTiles = function () {
  // retrieve starting coordinates from the object
  var startingTilesCoordinates = this.tiles.map( tile => [ tile.x, tile.y ] );
  var shuffledTilesCoordinates = [];
  // shuffle the starting coordinates inside shuffledTilesCoordinates
  while ( startingTilesCoordinates.length > 0 ) {
    var randomNum = Math.floor( Math.random() * startingTilesCoordinates.length );
    shuffledTilesCoordinates.push( startingTilesCoordinates[ randomNum ] );
    startingTilesCoordinates.splice(randomNum, 1);
  }
  
  // reassigning shuffled coordinates to tiles
  for ( var i = 0; i < shuffledTilesCoordinates.length; i++) {
    this.tiles[ i ].currentY = shuffledTilesCoordinates[ i ][ 0 ];
    this.tiles[ i ].currentX = shuffledTilesCoordinates[ i ][ 1 ];
  }
};

function selectTilesPerRow( tiles, index ) {
  return tiles.filter( function( tile ) {
    return tile.currentY === index;
  } )
  .sort( function( a, b ) {
    return a.currentX - b.currentX;
  } );
}

// -------------- UPDATE BOARD -------------
Puzzle.prototype.updateBoard = function () {
  this.board = [];
  for ( var i = 0; i < this.level; i++ ) {
    this.board.push( selectTilesPerRow( this.tiles, i ) );
  }
};

// check if in every object of the Puzzle.tiles array
// y and x properties equals currentY and currentX
Puzzle.prototype.checkCompleted = function () {
  return this.tiles.every( function( tile ) {
    return tile.y === tile.currentY && tile.x === tile.currentX;
  });
};
