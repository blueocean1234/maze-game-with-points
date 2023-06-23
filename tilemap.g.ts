// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000204050202020202020202020202020202010101010202020202010101010b020201010207020101010101020202010202010102020201020202010202020102020101010101010202020102020201020202020202020202010201020202010202020201010101010101010202020102020101010102020202020202020201020201020201020208020201010101010602010202010101010202010202010202020109020202020202020102020102020202010202020202020201020a01020202020101010101010101010202010202020101010102020102020101020101020201020202020101020202010101020203020202020202020202020202020202`, img`
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 2 2 2 2 . . . . . 2 
2 . . 2 . 2 . . . . . 2 2 2 . 2 
2 . . 2 2 2 . 2 2 2 . 2 2 2 . 2 
2 . . . . . . 2 2 2 . 2 2 2 . 2 
2 2 2 2 2 2 2 2 . 2 . 2 2 2 . 2 
2 2 2 . . . . . . . . 2 2 2 . 2 
2 . . . . 2 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 . 2 2 . 2 2 . . . . . . 
2 . 2 2 . . . . 2 2 . 2 2 . 2 2 
2 . . 2 2 2 2 2 2 2 . 2 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 . 2 . . 2 2 
2 2 . . . . . . . . . 2 2 . 2 2 
2 . . . . 2 2 . 2 2 . . 2 . . 2 
. . 2 2 2 2 . . 2 2 2 . . . 2 2 
. . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.saplingPine,sprites.dungeon.chestOpen,myTiles.tile1,myTiles.tile2,sprites.vehicle.roadHorizontal,sprites.dungeon.chestClosed,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
