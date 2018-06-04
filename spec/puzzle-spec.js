describe( "Puzzle", function() {
  
  var game;
  var game1;

  describe(" -- Puzzle properties -- ", function() {
    
    beforeEach( function() {
      game = new Puzzle();
    } );

    it( "this.tiles = []", function() {
      expect( game.tiles ).toEqual( [] );
    } );

    it( "typeof this.cursor  === object", function() {
      expect( typeof game.cursor ).toEqual( 'object' );
    } );

    it( "this.cursor.y  === 0", function() {
      expect( game.cursor.y ).toEqual( 0 );
    } );

    it( "this.cursor.x  === 0", function() {
      expect( game.cursor.x ).toEqual( 0 );
    } );

  } );

  describe(" -- createTiles() --", function() {
    
    beforeEach( function() {
      game = new Puzzle();
      game.createTiles();
    } );

    it( "hardcded creates an array of 9 objects", function() {
      expect( game.tiles.length ).toEqual( 9 );
    } );

    it( "this.tiles array contains only objects", function() {
      expect( game.tiles.every( x => typeof x === 'object') ).toBeTruthy();
    } );

    it("every object inside this.tiles has the expected properties", function() {
      var expected = ['name', 'y', 'x', 'currentY', 'currentX','bgY', 'bgX'].sort();
      game.tiles.every( tile => expect( Object.keys( tile ).sort() ).toEqual( expected ) );
    })

  } );

  describe( " -- checkCompleted() -- ", function() {

    beforeEach( function() {
      game = new Puzzle();
    } );

    it( "returns true for a game just instatiated", function() {
      game1 = new Puzzle();
      game1.createTiles();
      expect( game1.checkCompleted() ).toEqual( true );
    } );

    it( "returns true if every tile.y === tile.currrentY && tile.x === tile.currentX", function() {
      game.tiles[0] = { currentX: 0, currentY: 0, name: "tile00", x: 0, y: 0 };
      game.tiles[1] = { currentX: 0, currentY: 1, name: "tile01", x: 0, y: 1 };
      game.tiles[2] = { currentX: 0, currentY: 2, name: "tile02", x: 0, y: 2 };
      expect( game.checkCompleted() ).toEqual( true );
    });

    it( "returns false if at least one tile.y !== tile.currrentY || tile.x !== tile.currentX", function() {
      game.tiles[0] = { currentX: 0, currentY: 0, name: "tile00", x: 0, y: 1 };
      game.tiles[1] = { currentX: 0, currentY: 1, name: "tile01", x: 0, y: 0 };
      game.tiles[2] = { currentX: 0, currentY: 2, name: "tile02", x: 0, y: 2 };
      expect( game.checkCompleted() ).toEqual( false );
    });

  } );

  describe( " -- moveTileUp() -- ", function() {

    beforeEach( function() {
      game = new Puzzle();
      game.createTiles();
    } );

    it( "shouldn't move if the tile is on top border of the board", function() {
      // the first tile in on the top border
      var previousY = game.tiles[ 0 ].currentY;
      game.tiles[ 0 ].moveUp();
      var newY = game.tiles[ 0 ].currentY;
      expect( previousY ).toEqual( newY );
    } );

    it( "should move to the upper position on the board", function() {
      // the first tile of the second row CAN moveUp()
      var previousY = game.tiles[ 3 ].currentY;
      game.tiles[ 3 ].moveUp();
      var newY = game.tiles[ 3 ].currentY;
      expect( newY ).toEqual( previousY - 1 );
    } );

    it( "should move up only if the above tile is empty", function() {
      // put something in here
    } );

  } );

} );
