import MovingObject from './moving_object';
import EnemyShip from './enemy';

export class PinkAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType, waveEnder) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/pinkAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.ship = this.game.ship.ship;
    this.isTweening = 'dead';
    this.waveEnder = waveEnder;
  }

  move() {
    switch (this.moveType) {
      case 'linear':
        return this.linearMove(60);
      case 'linear offset':
        return this.linearMoveWithOffset();
      case 'ease':
        return this.easeToY2(280, 30);
      case 'ease2':
        return this.easeToY2(200, 30);
      case 'ease3':
        return this.easeToY2(360, 30);
      default:
        return this.easeToY2(100, 60)
    }
  }

  attack() {
    switch (this.attackType) {
      case 'circle':
        return this.circleAttack();

      case 'single':
        return this.singleAttack();

      default:
        return this.circleAttack();
    }
  }
}

export class BlueAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/blueAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.isTweening = 'dead';
    this.ship = this.game.ship.ship;
  }

  move() {
    switch (this.moveType) {
      case 'linear':
        return this.linearMove(60);

      case 'ease':
        return this.easeToY(100, 60)

      case 'ease2':
        return this.easeToY(200, 60)

      default:
        return this.easeToY(100, 60)
    }
  }

  attack() {
    switch (this.attackType) {
      case 'shotgun':
        return this.shotgunAttack();
      default:
        return this.shotgunAttack();
    }
  }
}

export class GreenAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/greenAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.isTweening = 'dead';
  }

  move() {
    switch (this.moveType) {
      case 'ease':
        return this.easeToY(150, 300);

      default:
        return this.easeToY(100, 300)
    }
  }

  attack() {
    switch (this.attackType) {
      case 'spiral':
        return this.spiralAttack();
      default:
        return this.spiralAttack();
    }
  }
}

export class PurpleAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/purpleAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.isTweening = 'dead';
  }

  move() {
    switch (this.moveType) {
      case 'ease':
        return this.easeToX(450, 300);

      case 'ease2':
        return this.easeToX(150, 300);

      default:
        return this.easeToY(100, 300)
    }
  }

  attack() {
    switch (this.attackType) {
      case 'multiple circles':
        return this.multipleCircleAttack();
      default:
        return this.multipleCircleAttack();
    }
  }
}
