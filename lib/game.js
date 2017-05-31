import Ship from './ship';
import { PinkAlien, BlueAlien, GreenAlien } from './aliens';
import Score from './score';
import playLevel from './level';

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.ship = new Ship(this);
    this.score = new Score();
    this.isOver = false;
    this.ticker = createjs.Ticker;
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
    this.otherProjectiles = [];
  }

  start() {
    document.addEventListener('DOMContentLoaded', () => {
      let $start = $('button.start');
      let $section = $('section.start');
      let $score = $('aside');
      $start.on('click', () => {
        $section.addClass('playing');
        $score.addClass('active');
        this.play();
        $start.off();
      })
    })
  }

  gameover() {
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
    let $start = $('section.start');
    let $section = $('section.end');
    let $button = $('button.play');
    $section.addClass('active');
    $button.on('click', () => {
      // game = new Game();
      // $section.addClass('playing');
      // this.play();
      //
      // $section.removeClass('active');
      // this.isOver = false;
      // this.ship = new Ship(this);
      // this.play();
      // $button.off();
      location.reload();
    })
  }

  play() {
    this.ticker.reset();
    this.ticker.init();
    this.ship.initiate();
    playLevel(this);
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      if (this.isOver) {
        this.stage.removeAllChildren();
        this.ticker.removeAllEventListeners();
        this.stage.clear();
        setTimeout( () => this.gameover(), 200);
        return;
      }
      this.ship.playerAction();
      this.moveBullets();
      this.moveEnemies();
      this.moveEnemyBullets();
      this.moveOther();
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
          this.score.update(10);
          return true;
      }
    });
  }

  hitPlayer(bullet) {
    return bullet.hitPlayer(this.ship);
  }

  collideWithPlayer(enemy) {
    return enemy.collideWithPlayer(this.ship);
  }

  pickUpItem(item) {
    return item.pickUpItem(this.ship);
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
      } else if (this.collideWithPlayer(enemy)) {
        this.isOver = true;
      }
    })
  }

  moveOther() {
    this.otherProjectiles.forEach( (item, idx) => {
      if (item.move()) {
        this.otherProjectiles.splice(idx, 1);
      } else if (this.pickUpItem(item)) {

      }
    })
  }
}

let game = new Game();
game.start();
window.game = game;
