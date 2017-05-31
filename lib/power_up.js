import MovingObject from './moving_object';

class PowerUp extends MovingObject {
  constructor(game) {
    this.game = game;
    this.powerup = new createjs.Bitmap('assets/powerup.png');
    this.isTweening = 'dead';
  }

  drop(x, y) {
    this.powerup.x = x;
    this.powerup.y = y;
    this.game.stage.addChild(this.powerup);
  }

  move() {
    if (this.isTweening == 'dead') {
      this.isTweening = 'reviving';
      createjs.Tween.get(this.powerup).to({ y: this.powerup.y }, 1000, createjs.Ease.backIn)
        .call(() => {
          this.isTweening = 'alive';;
        })
    } else if (this.isTweening === 'alive') {
      this.powerup.y += 3;
    }

    if (this.outofBounds()) {
      this.game.stage.removeChild(this.powerup);
      return true;
    }
    return false;
  }

  outofBounds() {
    if (this.powerup.x < -200 || this.powerup.x > 800 || this.powerup.y < -100 ||
    this.powerup.y > 930) {
      return true;
    }
    return false;
  }
}
