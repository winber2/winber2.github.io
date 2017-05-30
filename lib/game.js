import Ship from './ship';
// import MovingObject from './moving_object';


class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.ship = new Ship(this);
    this.bullets = [];
    this.enemies = [];
  }

  start() {
    this.ship.initiate()
    setInterval( () => {
      this.move();
    }, 20)
  }

  move() {
    this.bullets.forEach( (bulletObject) => {
      bulletObject.bullet.x += bulletObject.velX;
      bulletObject.bullet.y += bulletObject.velY;
    })
  }
}

let game = new Game();
game.start();
