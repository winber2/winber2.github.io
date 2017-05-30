const LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

const shipData = {
  images: ['assets/ship.png', 'assets/ship-right.png'],
  frames: { width: 65, height: 65 },
  animations: {
    right: 2,
    straight: 1
  }
}

let ship = new createjs.Bitmap('assets/ship.png');

ship.x = 265;
ship.y = 820;

export default ship;
