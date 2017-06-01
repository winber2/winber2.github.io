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
    this.explosion = this.createExplosionSprite();
    this.isOver = false;
    this.ticker = createjs.Ticker;
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
    this.otherProjectiles = [];
  }

  createExplosionSprite() {
    let data = {
      images: ['assets/explosion3.png', 'assets/explosion2.png', 'assets/explosion.png'],
      frames: {width:50, height:50, count:3, regX: 25, regY:25, spacing:0, margin:0},
      animations: {
        still: [2],
        explode: {
          frames: [0,1,2],
          next: "still"
        }
      }
    };

    let explosion = new createjs.SpriteSheet(data);
    return explosion;
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

  findTopScores(storage) {
    let scores = [];
    for (let key in storage) {
      scores.push(storage[key]);
    }
    scores = scores.sort(function(a, b) {
        if (parseInt(a) < parseInt(b)) { return 1; }
        else { return -1; }
    });
    return scores.slice(0,3);
  }

  populateRankings() {
    let $ranking = $('ul.ranking');
    let topScores = this.findTopScores(localStorage)
    $ranking.empty();
    for (let i = 0; i < 3; i++) {
      let $li = $(`<li>${i + 1}. ${topScores[i] ? topScores[i] : ''}</li>`);
      $ranking.append($li);
    }
  }

  gameover() {
    let $score = $('span.finalscore');
    let $start = $('section.start');
    let $section = $('section.end');
    let $button = $('button.play');
    $score.text(this.score.scoreText);
    localStorage.setItem(`${Math.random()}`, this.score.score);
    this.populateRankings();
    $section.addClass('active');
    $button.on('click', () => {
      // let $canvas = $('<canvas></canvas>');
      // $canvas.attr('id', 'canvas');
      // $canvas.attr('width', '600');
      // $canvas.attr('height', '900');
      //
      // $('canvas#canvas').remove();
      //
      // let $div = $('div');
      // $div.append($canvas);
      // $section.removeClass('active');
      // $button.off();
      // game = new Game();
      // game.play();
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
      if (item.move() || this.pickUpItem(item)) {
        this.otherProjectiles.splice(idx, 1);
      }
    })
  }

  explode(x, y) {
    let explosion = new createjs.Sprite(this.explosion, "explode");
    explosion.x = x;
    explosion.y = y;
    this.stage.addChild(explosion);
    setTimeout(() => this.stage.removeChild(explosion), 500);
  }
}

let game = new Game();
game.start();
window.game = game;
