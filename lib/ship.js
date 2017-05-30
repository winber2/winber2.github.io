import { defaultBullet, defaultCurveBullet } from './bullet';

class Ship {
  constructor(game) {
    this.game = game;
    this.stage = game.stage;
    this.ship = new createjs.Bitmap('assets/ship.png');
    this.ticker = createjs.Ticker;
    this.keys = {};
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
    this.initiate();
  }

  initiate() {
    this.ship.x = 265;
    this.ship.y = 820;
    this.stage.addChild(this.ship);
    this.ticker.framerate = 60;
    this.ticker.addEventListener("tick", () => {
      this.playerAction();
      this.stage.update();
    });
  }

  shoot() {
    let bullet1 = new defaultBullet(-2, -20, this.stage);
    let bullet2 = new defaultBullet(2, -20, this.stage);
    let bullet3 = new defaultBullet(0, -20, this.stage);
    let bullet4 = new defaultBullet(0, -20, this.stage);
    let bullet5 = new defaultCurveBullet(0, -20, this.stage, this.ticker, 10);
    let bullet6 = new defaultCurveBullet(0, -20, this.stage, this.ticker, -6);
    this.game.bullets.push(bullet1);
    this.game.bullets.push(bullet2);
    this.game.bullets.push(bullet3);
    this.game.bullets.push(bullet4);
    this.game.bullets.push(bullet5);
    this.game.bullets.push(bullet6);
    bullet1.shoot(this.ship.x, this.ship.y - 10);
    bullet2.shoot(this.ship.x + 48, this.ship.y - 10);
    bullet3.shoot(this.ship.x + 15, this.ship.y - 30);
    bullet4.shoot(this.ship.x + 32, this.ship.y - 30);
    bullet5.shoot(this.ship.x + 48 , this.ship.y - 10);
    bullet6.shoot(this.ship.x, this.ship.y - 10);
  }

  keydown(event) {
     this.keys[event.keyCode] = true;
  }

  keyup(event) {
     delete this.keys[event.keyCode];
  }

  playerAction() {
    if (this.keys[37]) this.ship.x -= 3;
    if (this.keys[38]) this.ship.y -= 3;
    if (this.keys[39]) this.ship.x += 3;
    if (this.keys[40]) this.ship.y += 3;
    if (this.keys[90] &&
      this.ticker.getTicks() % 7 === 0) this.shoot();
  }
}

export default Ship;
