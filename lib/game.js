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
      this.bullets.forEach( (bullet,idx) => {
        if (bullet.move()) {
          this.bullets.splice(idx, 1);
        }
      })
    }, 20)
  }
}

let game = new Game();
game.start();
window.game = game;
