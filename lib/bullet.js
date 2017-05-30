import MovingObject from './moving_object';

export class defaultBullet extends MovingObject {
  constructor(velX, velY, stage) {
    super(velX, velY, stage);
    this.bullet = new createjs.Bitmap('assets/bullet.png');
  }

  shoot(x, y) {
    this.bullet.x = x;
    this.bullet.y = y;
    this.stage.addChild(this.bullet);
  }

  move() {
    this.bullet.x += this.velX;
    this.bullet.y += this.velY;
    if (this.outofBounds()) {
      this.stage.removeChild(this.bullet);
      return true;
    }
    return false;
  }

  outofBounds() {
    if (this.bullet.x < -200 || this.bullet.x > 800 || this.bullet.y < 0 ||
    this.bullet.y > 900) {
      return true;
    }
    return false;
  }
}

export class defaultCurveBullet extends MovingObject {
  constructor(velX, velY, stage, ticker, offset) {
    super(velX, velY, stage);
    this.ticker = ticker;
    this.tickOffset = offset - this.ticker.getTicks();
    this.bullet = new createjs.Bitmap('assets/curveBullet.png');
  }

  shoot(x, y) {
    this.bullet.x = x;
    this.bullet.y = y;
    this.stage.addChild(this.bullet);
  }

  move() {
    this.bullet.y += this.velY;
    let offset = this.ticker.getTicks() + this.tickOffset;
    this.bullet.x += Math.sin(offset * 0.5) * 30;
    if (this.outofBounds()) {
      this.stage.removeChild(this.bullet);
      return true;
    }
    return false;
  }

  outofBounds() {
    if (this.bullet.x < -200 || this.bullet.x > 800 || this.bullet.y < 0 ||
    this.bullet.y > 900) {
      return true;
    }
    return false;
  }
}
