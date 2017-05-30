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
}
