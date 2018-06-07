var puzzle;

// ----- hide controls and board
function hideElementsAtStart() {
  $('#shuffle').hide();
  $('#reset').hide();
  $('#board').hide();
}

hideElementsAtStart();

// ------- here starts the game
function init() {
  $('#board').css('width', puzzle.screenWidth);
  $('#board').css('height', puzzle.screenWidth);
  puzzle.createTiles();   // populate puzzle.tiles
  puzzle.updateBoard();   // update puzzle.board
  buildBoard();           // build html for board
  $('#board').show();     // display the board to the user
}

// ---- DISPLAYS BOARD -----------------------------------
// ---- (use after updating the board to displays changes)
function buildBoard() {
  var html = '';
  for ( var row = 0; row < puzzle.level; row++ ) {
    for ( var col = 0; col < puzzle.level; col++ ) {
      
      // building the div html element
      var tile = puzzle.board[ row ][ col ];
      var div = '';
      var divOpened = '<div';
      var divClass= ' class="tile"'
      // in id we store the position of the tile in the puzzle.tiles array
      // so we can retrieve it easily
      var divId = ` id="${ puzzle.tiles.indexOf( tile ) }"`;
      var divStyle = ` style ="
      width: ${ tile.side }px;
      height: ${ tile.side }px;
      overflow: hidden;
      background-image: url( ${ tile.bg } );
      background-position-y: ${ tile.bgY }px;
      background-position-x: ${ tile.bgX }px;
      "`;
      var divClosed = '></div>';
      
      // put all together
      div = divOpened + divClass + divId + divStyle + divClosed;
      html += div;
    } 
  }
  // append to the #board div on the page
  $('#board').html( html );
}

function doEmpty() {
  // add the .empty class to the last element of puzzle.tiles
  var emptyTileId = puzzle.tiles.indexOf( puzzle.lastTile );
  $('#' + emptyTileId).toggleClass('empty');
}

// ----- here the events ---------------
$(document).ready( function () {

  $('.level').click( function() {
    puzzle = new Puzzle( $(this).val() );
    $('.levels').toggle();
    init();
    $('#shuffle').show();
  } );

  $('#shuffle').click( function() {
    // be sure that the user choose a level
    if ( puzzle === undefined ) {
      console.log( "Choose a level before shuffling..." )
    }
    // Fake board to complete the game easily
    else if (puzzle.level = "2") {
      puzzle.board = [
        puzzle.tiles[0],
        puzzle.tiles[1],
        puzzle.tiles[2],
        puzzle.tiles[3]
      ];
      puzzle.tiles[0].currentY = 0, puzzle.tiles[0].currentX = 0; 
      puzzle.tiles[1].currentY = 0, puzzle.tiles[1].currentX = 1;
      puzzle.tiles[2].currentY = 1, puzzle.tiles[2].currentX = 0;
      puzzle.tiles[3].currentY = 1, puzzle.tiles[3].currentX = 1;

      puzzle.lastTile = puzzle.tiles[3];

      puzzle.shuffled = true;
      
      puzzle.updateBoard();  // update puzzle.board after shuffling
      buildBoard();          // build html for board
      $('#board').show();    // display the shuffled board to the user
      doEmpty();
      $('#reset').show();
    } else {
      puzzle.shuffleTiles();
      puzzle.shuffled = true;
      puzzle.updateBoard();  // update puzzle.board after shuffling
      buildBoard();           // build html for board
      $('#board').show();     // display the board to the user
      doEmpty();
      $('#reset').show();
    }
  } );

} ); // $(document).ready ends here -->

// -------- moving the tiles -------------
$( document ).on( "click", ".tile", function() {
  if ( $( '.tile' ).length > 0 && puzzle.shuffled ) {
    var thisY = puzzle.tiles[this.id].currentY;
    var thisX = puzzle.tiles[this.id].currentX;
    var diffY = Math.abs( thisY - puzzle.lastTile.currentY );
    var diffX = Math.abs( thisX - puzzle.lastTile.currentX );
    var diff = diffY + "," + diffX;
    if ( diff === '0,1' || diff === '1,0' ) {
      console.log( "The tile you clicked IS adiacent to empty. YOU CAN SWITCH TILES!!!" );
      puzzle.tiles[this.id].currentY = puzzle.lastTile.currentY;
      puzzle.tiles[this.id].currentX = puzzle.lastTile.currentX;
      puzzle.lastTile.currentY = thisY;
      puzzle.lastTile.currentX = thisX;
      puzzle.updateBoard();   // update puzzle.board after shuffling
      buildBoard();           // build html for board
      doEmpty();
      
      // CHECK IF PUZZLE COMPLETED
      if ( puzzle.checkCompleted() ) {
        console.log( "YOU DID!!!!" )
        $( '.tile' ).addClass( 'completed' );
        // DO SOMTHING WHEN THE PUZZLE IS COMPLETED
        return;
      }
    } else {
      console.log( "The tile you clicked is NOT adiacent to empty." );
    }

  } else {
    console.log( 'You cannot play before you shuffling the tiles ;-)' );
  }
});

function isEmptyAround() {
  // implement to check if .empty tile is adiacent
}