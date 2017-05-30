import ship from './ship';

let canvas = document.getElementById('canvas')
let stage = new createjs.Stage(canvas);
let keys = {}

stage.addChild(ship);

createjs.Ticker.addEventListener("tick", tick);
createjs.Ticker.setFPS(60);

function tick() {
   if (keys[37]) ship.x -= 3;
   if (keys[38]) ship.y -= 3;
   if (keys[39]) ship.x += 3;
   if (keys[40]) ship.y += 3;
   stage.update();
}

document.onkeydown = keydown;
document.onkeyup = keyup;

function keydown(event) {
   keys[event.keyCode] = true;
}

function keyup(event) {
   delete keys[event.keyCode];
}
