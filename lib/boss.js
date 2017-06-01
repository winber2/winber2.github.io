import EnemyShip from 'enemy';

class Boss extends EnemyShip {
  constructor(velX, velY, game, health) {
    super(velX, velY, game, health);
    this.enemy = new createjs.Bitmap('assets/purpleAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.isTweening = false;
  }

  move() {
    if (!this.isTweening) {
      this.isTweening = true;
      let x = Math.random() * 300 + 100;
      let attackId = Math.floor(Math.random() * 5);
      this.attackType = attackId;
      createjs.Tween.get(this.enemy)
        .to({ x: x }, 1000, createjs.Ease.backIn)
        .call(() => this.attack())
        .wait(120)
        .call(() => this.isTweening = false);
    }
  }

  attack() {
    switch (this.attackType) {
      case 0:

    }
  }

  rain() {
    
  }
}
