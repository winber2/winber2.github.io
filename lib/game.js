import Ship from './ship';
import Score from './score';
import { waveOne, waveTwo, bossWave } from './level';

const WAVES = [
  waveOne,
  waveTwo,
  bossWave
]

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
    this.boss = [];
    this.wave = 0;
    this.inProgress = false;
    this.bar = $('div.bar');
  }

  createExplosionSprite() {
    let data = {
      images: [
        'assets/explosion-1.png',
        'assets/explosion-2.png',
        'assets/explosion-3.png',
        'assets/explosion-4.png',
        'assets/explosion-5.png',
        'assets/explosion-6.png',
        'assets/explosion-7.png',
        'assets/explosion4.png',
        'assets/explosion5.png',
      ],
      frames: {width:50, height:50, regX: 25, regY:25, spacing:0, margin:0},
      framerate: 2,
      animations: {
        still: {
          frames: [6,7,8,7],
          next: "still"
        },
        explode: {
          frames: [0,1,2,3,4,5,6],
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
    this.ship.isRespawning = true;
    let $score = $('span.finalscore');
    let $start = $('section.start');
    let $section = $('section.end');
    let $button = $('button.play');
    let $health = $('footer.health');
    $health.removeClass('active');
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
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      if (!this.inProgress) {
        console.log('asdf');
        this.inProgress = true;
        WAVES[this.wave](this);
        if (this.wave < 2) this.wave += 1;
      }
      if (this.isOver) {
        this.stage.removeAllChildren();
        this.ticker.removeAllEventListeners();
        this.stage.clear();
        setTimeout( () => this.gameover(), 200);
        return;
      }
      this.ship.playerAction();
      this.moveBoss();
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
      this.hitBoss(bullet);
    })
  }

  moveBoss() {
    this.boss.forEach( b => b.move());
  }

  hitBoss(bullet) {
    if (this.boss[0] === undefined) return;
    this.bar.css('width',this.boss[0].health / 100 + '%');
    if (bullet.hitEnemy(this.boss[0])) {
      this.boss = [];
      this.enemies.forEach( enemy  => {
        this.explode(enemy.enemy.x, enemy.enemy.y);
        this.stage.removeChild(enemy.enemy);
      });
      this.enemyBullets.forEach( bullet => {
        this.explode(bullet.bullet.x, bullet.bullet.y)
        this.stage.removeChild(bullet.bullet);
      })
      this.enemyBullets = [];
      this.enemies = [];
      setTimeout(() => this.isOver = true, 2000);
    }
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
        this.resetPlayer();
      }
    })
  }

  moveEnemies() {
    this.enemies.forEach( (enemy, idx) => {
      if (enemy.move()) {
        this.enemies.splice(idx, 1);
      } else if (this.collideWithPlayer(enemy)) {
        this.resetPlayer();
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

  resetPlayer() {
    this.score.reset();
    this.explode(this.ship.ship.x, this.ship.ship.y);
    // this.ship.ship.x = 300;
    // this.ship.ship.y = 820;
    // this.ship.powerLevel = powerLevel;
    this.ship.isRespawning = true;
    setTimeout(() => this.ship.isRespawning = false, 2000)
    this.ship.initiate();
    this.ship.resetAnimation();
  }

  explode(x, y) {
    let explosion = new createjs.Sprite(this.explosion, "explode");
    explosion.x = x;
    explosion.y = y;
    this.stage.addChild(explosion);
    setTimeout(() => this.stage.removeChild(explosion), 300);
  }
}

let game = new Game();
game.start();
window.game = game;
