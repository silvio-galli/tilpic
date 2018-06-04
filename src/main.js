var puzzle = new Puzzle();

// ---- DISPAYS BOARD -----------------------------------
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
      background-image: url(../img/husky.png);
      background-position-y: ${ tile.bgY }px;
      background-position-x: ${ tile.bgX }px;
      "`;
      var divClosed = '></div>';
      // put all together
      div = divOpened + divClass + divId + divStyle + divClosed;
      html += div;
    }
    // background-repeat: no-repeat;
    // 
  }
  // append to the #board div on the page
  $('#board').html( html );
}

// starting flow example
// puzzle.createTiles();  // populate puzzle.tiles
// puzzle.updateBoard();  // update puzzle.board
// displayBoard();        // display the initial board to the user

// puzzle.shuffleTiles(); // this will be called clicking on a button
// puzzle.updateBoard();  // then update puzzle.board
// displayBoard();        // then display the shuffled board


$(document).ready( function () {

} );