class PowerUp {
  constructor(game) {
    this.game = game;
    this.powerup = new createjs.Bitmap('assets/powerup.png');
    this.isTweening = 'dead';
  }

  drop(x, y) {
    this.powerup.x = x;
    this.powerup.y = y;
    this.game.stage.addChild(this.powerup);
    this.game.otherProjectiles.push(this);
  }

  pickUpItem(ship) {
    let x = Math.abs(ship.ship.x - this.powerup.x);
    let y = Math.abs(ship.ship.y - this.powerup.y);
    if (x < 30 && y < 30) {
      this.game.stage.removeChild(this.powerup);
      this.game.score.update(5000);
      ship.powerLevel += 1;
      return true;
    }
    return false;
  }

  move() {
    if (this.isTweening == 'dead') {
      this.isTweening = 'reviving';
      createjs.Tween.get(this.powerup).to({ y: this.powerup.y - 50 }, 600, createjs.Ease.getPowOut(2.1))
        .to({ y: this.powerup.y}, 600, createjs.Ease.getPowIn(2.1))
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


export default PowerUp;
