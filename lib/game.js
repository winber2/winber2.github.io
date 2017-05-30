import Ship from './ship';
import { WeakAlien, EnemyShip } from './enemies';

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.ship = new Ship(this);
    this.alien = new WeakAlien(0, 1, this, 20);
    this.ticker = createjs.Ticker;
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
  }

  start() {
    this.ship.initiate()
    this.alien.initiate(300, 0, this);
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      this.ship.playerAction();
      this.moveBullets();
      this.moveEnemies();
      this.moveEnemyBullets();
      this.stage.update();
    })
  }

  moveBullets() {
    this.bullets.forEach( (bullet, idx) => {
      if (bullet.move() || this.hitEnemy(bullet)) {
        this.bullets.splice(idx, 1);
      }
    })
  }

  hitEnemy(bullet) {
    let game = this;
    return this.enemies.some( (enemy, idx) => {
      if (bullet.hitEnemy(enemy)) {
          game.enemies.splice(idx, 1);
          return true;
      }
    });
  }

  hitPlayer(bullet) {
    return bullet.hitPlayer(this.ship);
  }

  moveEnemyBullets() {
    this.enemyBullets.forEach( (bullet, idx) => {
      if (bullet.move() || this.hitPlayer(bullet)) {
        this.enemyBullets.splice(idx, 1);
      }
    })
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
