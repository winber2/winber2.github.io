import { defaultBullet, defaultCurveBullet } from './bullets';

class Ship {
  constructor(game) {
    this.game = game;
    this.stage = game.stage;
    this.ship = new createjs.Bitmap('assets/ship.png');
    this.ship.regX = 32;
    this.ship.regY = 32;
    this.keys = {};
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
    this.powerLevel = 0;
    this.isRespawning = false;
  }

  initiate() {
    this.ship.x = 300;
    this.ship.y = 820;
    this.stage.addChild(this.ship);
  }

  outofBoundsLeft() {
    if (this.ship.x < 50) return true;
  }

  outofBoundsRight() {
    if (this.ship.x > 550) return true;
  }

  outofBoundsUp() {
    if (this.ship.y < 50) return true;
  }

  outofBoundsDown() {
    if (this.ship.y > 850) return true;
  }

  shoot() {
    let bullet3 = new defaultBullet(0, -20, this.game);
    let bullet4 = new defaultBullet(0, -20, this.game);
    this.game.bullets.push(bullet3);
    this.game.bullets.push(bullet4);
    bullet3.shoot(this.ship.x - 18, this.ship.y - 30);
    bullet4.shoot(this.ship.x - 0, this.ship.y - 30);

    if (this.powerLevel > 3) {
      let bullet1 = new defaultBullet(-2, -20, this.game);
      let bullet2 = new defaultBullet(2, -20, this.game);
      this.game.bullets.push(bullet1);
      this.game.bullets.push(bullet2);
      bullet1.shoot(this.ship.x - 30, this.ship.y - 10);
      bullet2.shoot(this.ship.x + 12, this.ship.y - 10);
    }
    if (this.powerLevel > 6) {
      let bullet5 = new defaultCurveBullet(0, -20, this.game, this.game.ticker, 10);
      let bullet6 = new defaultCurveBullet(0, -20, this.game, this.game.ticker, -5.7);
      this.game.bullets.push(bullet5);
      this.game.bullets.push(bullet6);
      bullet5.shoot(this.ship.x + 12, this.ship.y - 10);
      bullet6.shoot(this.ship.x - 30, this.ship.y - 10);
    }
  }

  keydown(event) {
     this.keys[event.keyCode] = true;
  }

  keyup(event) {
     delete this.keys[event.keyCode];
  }

  playerAction() {
    if (this.keys[37] && !this.outofBoundsLeft()) this.ship.x -= 4;
    if (this.keys[38] && !this.outofBoundsUp()) this.ship.y -= 4;
    if (this.keys[39] && !this.outofBoundsRight()) this.ship.x += 4;
    if (this.keys[40] && !this.outofBoundsDown()) this.ship.y += 4;
    if (this.keys[90] &&
      this.game.ticker.getTicks() % 7 === 0) this.shoot();
  }

  resetAnimation() {
    createjs.Tween.get(this.ship, {useTicks: true, override: true})
      .to({ alpha: 0.3 }, 0)
      .wait(10)
      .to({ alpha: 1 }, 0)
      .wait(10)
      .to({ alpha: 0.3 }, 0)
      .wait(10)
      .to({ alpha: 1 }, 0)
      .wait(10)
      .to({ alpha: 0.3 }, 0)
      .wait(10)
      .to({ alpha: 1 }, 0)
      .wait(10)
      .to({ alpha: 0.3 }, 0)
      .wait(10)
      .to({ alpha: 1 }, 0)
      .wait(10)
      .to({ alpha: 0.3 }, 0)
      .wait(10)
      .to({ alpha: 1 }, 0)
      .wait(10)
      .to({ alpha: 0.3 }, 0)
      .wait(10)
      .to({ alpha: 1 }, 0);
  }
}

export default Ship;
