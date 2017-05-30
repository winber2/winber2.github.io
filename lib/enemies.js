import MovingObject from './moving_object';
import { pinkBullet } from './bullet';

export class EnemyShip extends MovingObject {
  constructor(velX, velY, game, health) {
    super(velX, velY, game);
    this.health = health;
  }

  initiate(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.stage.addChild(this.enemy);
    this.game.enemies.push(this);
  }

  outofBounds() {
    if (this.enemy.x < -200 || this.enemy.x > 800 || this.enemy.y < -30 ||
    this.enemy.y > 930) {
      return true;
    }
    return false;
  }
}

export class PinkAlien extends EnemyShip {
  constructor(velX, velY, game, health) {
    super(velX, velY, game, health);
    this.enemy = new createjs.Bitmap('assets/pinkAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
  }

  move() {
    this.enemy.x += this.velX;
    this.enemy.y += this.velY;
    if (this.game.ticker.getTicks() % 120 === 0) this.attack();
    if (this.outofBounds()) {
      this.stage.removeChild(this.enemy);
      return true;
    }
    return false;
  }

  attack() {
    for (let i = 0; i < 10; i++) {
      let r = 2 * Math.PI * i / 10;
      let x = 1 * Math.cos(r);
      let y = 1 * Math.sin(r);
      let bullet = new pinkBullet(x, y, this.game);
      bullet.shoot(this.enemy.x, this.enemy.y);
      this.game.enemyBullets.push(bullet);
    }

  }
}
