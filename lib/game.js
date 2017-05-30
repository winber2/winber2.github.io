import Ship from './ship';
import { PinkAlien, EnemyShip } from './enemies';

const ALIENS = [

]

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.ship = new Ship(this);
    this.isOver = false;
    this.alien = new PinkAlien(0, 0.5, this, 20);
    this.ticker = createjs.Ticker;
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
  }

  start() {
    document.addEventListener('DOMContentLoaded', () => {
      let $start = $('button.start');
      let $section = $('section.start');
      $start.on('click', () => {
        $section.addClass('playing');
        this.play();
      })
    })
  }

  gameover() {
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
    let $section = $('section.end');
    let $button = $('button.play');
    $section.addClass('active');
    $button.on('click', () => {
      $section.removeClass('active');
      this.isOver = false;
      this.ship = new Ship(this);
      this.play();
    })
  }

  play() {
    this.ship.initiate()
    this.alien.initiate(300, 0, this);
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      if (this.isOver) {
        this.ticker.removeAllEventListeners();
        this.stage.clear();
        this.gameover();
        return;
      }
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
    return this.enemies.some( (enemy, idx) => {
      if (bullet.hitEnemy(enemy)) {
          this.enemies.splice(idx, 1);
          return true;
      }
    });
  }

  hitPlayer(bullet) {
    return bullet.hitPlayer(this.ship);
  }

  moveEnemyBullets() {
    this.enemyBullets.forEach( (bullet, idx) => {
      if (bullet.move()) {
        this.enemyBullets.splice(idx, 1);
      } else if (this.hitPlayer(bullet)) {
        this.isOver = true;
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
