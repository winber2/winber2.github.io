import MovingObject from './moving_object';
import { pinkBullet, blueBullet, greenBullet } from './bullet';

export class EnemyShip extends MovingObject {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game);
    this.health = health;
    this.moveType = moveType;
    this.attackType = attackType;
  }

  initiate(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.stage.addChild(this.enemy);
    this.game.enemies.push(this);
  }

  easeTo(x, y, ticks) {
    if (this.isTweening) {
      if (this.game.ticker.getTicks() % ticks === 0) this.attack();
      if (this.outofBounds()) {
        this.stage.removeChild(this.enemy);
        return true;
      }
    } else {
      this.isTweening = true;
      createjs.Tween.get(this.enemy, { override: true, useTicks: true }).wait(5).to({ y: y }, 30, createjs.Ease.backOut)
        .call(() => {
          this.attack();
        });
    }
  }

  linearMove(ticks) {
    this.enemy.x += this.velX;
    this.enemy.y += this.velY;
    if (this.game.ticker.getTicks() % ticks === 0) this.attack();
    if (this.outofBounds()) {
      this.stage.removeChild(this.enemy);
      return true;
    }
    return false;
  }

  linearMoveWithOffset() {
    this.enemy.x += this.velX;
    this.enemy.y += this.velY;
    let ticker = this.game.ticker.getTicks();
    if (ticker % 60 <= 17 && ticker % 4 === 0) this.attack();
    if (this.outofBounds()) {
      this.stage.removeChild(this.enemy);
      return true;
    }
    return false;
  }

  singleAttack() {
    let dx = this.enemy.x - this.ship.x;
    let dy = this.enemy.y - this.ship.y;
    let r = Math.atan(dy/dx);
    let x, y;
    if ((dy < 0 && dx < 0) || (dy > 0 && dx < 0)) {
      x = 3 * Math.cos(r);
      y = 3 * Math.sin(r);
    } else {
      x = 3 * -Math.cos(r);
      y = 3 * -Math.sin(r);
    }
    let bullet = new pinkBullet(x, y, this.game);
    bullet.shoot(this.enemy.x, this.enemy.y);
    this.game.enemyBullets.push(bullet);
  }

  shotgunAttack() {
    let dx = this.enemy.x - this.ship.x;
    let dy = this.enemy.y - this.ship.y;
    let radians = Math.atan(dy/dx);
    for (let i = -3; i < 3; i++) {
      let r = 2/3 * Math.PI * i / 18 + radians;
      let x, y;
      if ((dy < 0 && dx < 0) || (dy > 0 && dx < 0)) {
        x = 1.5 * Math.cos(r);
        y = 1.5 * Math.sin(r);
      } else {
        x = 1.5 * -Math.cos(r);
        y = 1.5 * -Math.sin(r);
      }
      let bullet = new blueBullet(x, y, this.game);
      bullet.shoot(this.enemy.x, this.enemy.y);
      this.game.enemyBullets.push(bullet);
    }
  }

  circleAttack() {
    for (let i = 0; i < 10; i++) {
      let r = 2 * Math.PI * i / 10;
      let x = 1.5 * Math.cos(r);
      let y = 1.5 * Math.sin(r);
      let bullet = new pinkBullet(x, y, this.game);
      bullet.shoot(this.enemy.x, this.enemy.y);
      this.game.enemyBullets.push(bullet);
    }
  }

  spiralAttack() {
    let i = 0
    let id = setInterval(() => {
      let r = 2 * Math.PI * i / 25 + 1.57;
      let x = 1.5 * Math.cos(r);
      let y = 1.5 * Math.sin(r);
      let bullet = new greenBullet(x, y, this.game);
      bullet.shoot(this.enemy.x, this.enemy.y);
      this.game.enemyBullets.push(bullet);
      i += 1;
      if (i >= 80 || this.health <= 0) {
        clearInterval(id);
      }
    }, 20)
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
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/pinkAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.ship = this.game.ship.ship;
  }

  move() {
    switch (this.moveType) {
      case 'linear':
        return this.linearMove(60);

      case 'linear offset':
        return this.linearMoveWithOffset();
    }
  }

  attack() {
    switch (this.attackType) {
      case 'circle':
        return this.circleAttack();

      case 'single':
        return this.singleAttack();
    }
  }
}

export class BlueAlien extends EnemyShip {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game, health, moveType, attackType);
    this.enemy = new createjs.Bitmap('assets/blueAlien.png')
    this.enemy.regX = 35;
    this.enemy.regY = 25;
    this.ship = this.game.ship.ship;
  }

  move() {
    switch (this.moveType) {
      case 'linear':
        return this.linearMove(60);

      case 2:
        console.log('asdf');
        break;
    }
  }

  attack() {
    switch (this.attackType) {
      case 'shotgun':
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
    this.isTweening = false;
  }

  move() {
    switch (this.moveType) {
      case 'ease':
        return this.easeTo(300, 150, 300);

      case 2:
        console.log('asdf');
        break;
    }
  }

  attack() {
    switch (this.attackType) {
      case 'spiral':
        return this.spiralAttack();

    }
  }
}
