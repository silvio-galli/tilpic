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
      expect( this.cursor.y ).toEqual( 0 );
    } );

    it( "this.cursor.x  === 0", function() {
      expect( this.cursor.x ).toEqual( 0 );
    } );

  } );

  describe(" >> methods >>", function() {
    
    beforeEach( function() {
      game.tiles = [
        { name: "tile-1", y: 0, x: 0, currentY: 0, currentX: 0, backgroundY: 0, backgroundX: 0, },
        { name: "tile-2", y: 0, x: 1, currentY: 0, currentX: 1, backgroundY: 0, backgroundX: 1, },
        { name: "tile-3", y: 0, x: 2, currentY: 0, currentX: 2, backgroundY: 0, backgroundX: 2, },
        { name: "tile-4", y: 0, x: 3, currentY: 0, currentX: 3, backgroundY: 0, backgroundX: 3, },
        { name: "tile-5", y: 0, x: 4, currentY: 0, currentX: 4, backgroundY: 0, backgroundX: 4, },
      ]
    } );

  } );

} );
