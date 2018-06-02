describe( "Puzzle", function() {
  
  var game;

  describe(" >> properties >> ", function() {
    
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

  describe(" >> createTiles() >>", function() {
    
    beforeEach( function() {
      game = new Puzzle();
      game.createTiles();
    } );

    it( "creates an array of 25 objects", function() {
      expect( game.tiles.length ).toEqual( 25 );
    } );

    it( "this.tiles array contains only objects", function() {
      expect( game.tiles.every( x => typeof x === 'object') ).toBeTruthy();
    } );

    it("every object inside this.tiles has the expected properties", function() {
      var expected = ['name', 'y', 'x', 'currentY', 'currentX','backgroundY', 'backgroundX'].sort();
      game.tiles.every( tile => expect( Object.keys( tile ).sort() ).toEqual( expected ) );
    })

  } );

} );
