import Ship from './ship';
import { WeakAlien, EnemyShip } from './enemies';
window.Ship = Ship;
window.e = EnemyShip;
// import MovingObject from './moving_object';


class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.ship = new Ship(this);
    this.alien = new WeakAlien(0, 1, this.stage);
    this.bullets = [];
    this.enemies = [];
  }

  start() {
    this.ship.initiate()
    this.alien.initiate(300, 400, this);
    setInterval( () => {
      this.moveBullets();
      this.moveEnemies();
    }, 20)
  }

  moveBullets() {
    this.bullets.forEach( (bullet, idx) => {
      if (bullet.move() || this.checkBulletCollision(bullet)) {
        this.bullets.splice(idx, 1);
      }

    })
  }

  checkBulletCollision(bullet) {
    let game = this;
    this.enemies.some( (enemy, idx) => {
      if (bullet.hitEnemy(enemy)) {
          game.enemies.splice(idx, 1);
      }
    });
  }

  moveEnemies() {
    this.enemies.forEach( (enemy, idx) => {
      if (enemy.move()) {
        this.enemies.splice(idx, 1);
      }
    })
  }
}

let game = new Game();
game.start();
window.game = game;
