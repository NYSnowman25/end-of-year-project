tiles.setCurrentTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 . . . . 
    . . . . 5 d d d 5 . . . . 
    . . . . 5 d d d d . . . . 
    . . . . 5 d 1 f d d . . . 
    . . . . . d d d d . . . . 
    . . . . . d d d d . . . . 
    . . . . . . d . . . . . . 
    . . . 2 2 7 d 7 2 2 . . . 
    . . . 2 2 2 7 2 2 2 . . . 
    . . . 2 2 2 2 2 2 2 . . . 
    . . . d 2 2 2 2 2 d . . . 
    . . . . 2 2 2 2 2 . . . . 
    . . . . 2 2 . 2 2 . . . . 
    . . . . 2 2 . 2 2 . . . . 
    . . . . f f . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
