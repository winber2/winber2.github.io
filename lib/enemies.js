import MovingObject from './moving_object';

export class EnemyShip extends MovingObject {
  constructor(velX, velY, stage, health) {
    super(velX, velY, stage);
    this.health = health;
  }

  initiate(x, y, game) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.stage.addChild(this.enemy);
    game.enemies.push(this);
  }

  outofBounds() {
    if (this.enemy.x < -200 || this.enemy.x > 800 || this.enemy.y < 0 ||
    this.enemy.y > 900) {
      return true;
    }
    return false;
  }
}

export class WeakAlien extends EnemyShip {
  constructor(velX, velY, stage, health) {
    super(velX, velY, stage, health);
    this.enemy = new createjs.Bitmap('assets/weakAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
  }

  move() {
    this.enemy.x += this.velX;
    this.enemy.y += this.velY;
    if (this.outofBounds()) {
      this.stage.removeChild(this.enemy);
      return true;
    }
    return false;
  }
}
