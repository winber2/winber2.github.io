let LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;

function move(event) {
  switch(event.keyCode) {
    case LEFT:
      ship.x -= 1;
      break;

    case RIGHT:
      ship.gotoAndPlay('right');
      ship.x += 1;
      break;
  }
  stage.update();
}

const shipData = {
  images: ['assets/ship.png', 'assets/ship-right.png'],
  frames: { width: 65, height: 65 },
  animations: {
    right: 2,
    straight: 1
  }
}

let keys = {};

let canvas = document.getElementById('canvas')
let stage = new createjs.Stage(canvas);
let ship = new createjs.Bitmap('assets/ship.png');

ship.x = 265;
ship.y = 820;
stage.addChild(ship)

createjs.Ticker.addEventListener("tick", tick);
createjs.Ticker.setFPS(60);


document.onkeydown = keydown;
document.onkeyup = keyup;


function keydown(event) {
   keys[event.keyCode] = true;
}

function keyup(event) {
   delete keys[event.keyCode];
}

function tick() {
   if (keys[37]) ship.x -= 3;
   if (keys[38]) ship.y -= 3;
   if (keys[39]) ship.x += 3;
   if (keys[40]) ship.y += 3;
   stage.update();
}
