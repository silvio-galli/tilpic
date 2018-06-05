var puzzle;
// ---- DISPLAYS BOARD -----------------------------------
// ---- (use after updating the board to displays changes)
function displayBoard() {
  var html = '';
  for ( var row = 0; row < puzzle.level; row++ ) {
    for ( var col = 0; col < puzzle.level; col++ ) {
      
      // building the div html element
      var tile = puzzle.board[ row ][ col ];
      var div = '';
      var divOpened = '<div';
      var divClass= ' class="tile"'
      var divId = ` id="${ tile.name }"`;
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
  console.log( "puzzle.board at the end of displayBoard():", puzzle.board );
}


function init() {
  puzzle.createTiles();  // populate puzzle.tiles
  puzzle.updateBoard();  // update puzzle.board
  displayBoard();        // display the initial board to the user
}



$(document).ready( function () {

  $('.level').click( function() {
    puzzle = new Puzzle( $(this).val() );
    init();
  } );

  $('#shuffle').click( function() {
    puzzle.shuffleTiles();
    puzzle.updateBoard();  // update puzzle.board after shuffling
    displayBoard();        // display the shuffled board to the user
    var emptyTileId = puzzle.tiles[puzzle.tiles.length - 1].name;
    $('#' + emptyTileId).toggleClass('empty');
  } );
  


} ); // $(document).ready ends here -->

