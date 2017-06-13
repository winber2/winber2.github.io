import MovingObject from './moving_object';
import { pinkBullet, blueBullet, greenBullet, purpleBullet } from './bullets';

class EnemyShip extends MovingObject {
  constructor(velX, velY, game, health, moveType, attackType) {
    super(velX, velY, game);
    this.health = health;
    this.moveType = moveType;
    this.attackType = attackType;
    this.width = 40;
    this.height = 15;
  }

  initiate(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.stage.addChild(this.enemy);
    this.game.enemies.push(this);
  }

  easeToY2(y, ticks) {
    if (this.isTweening === 'alive') {
      if (this.game.ticker.getTicks() % ticks === 0) this.attack();
      if (this.outofBounds()) {
        this.stage.removeChild(this.enemy);
        return true;
      }
    } else if (this.isTweening === 'dead'){
      this.isTweening = 'reviving';
      createjs.Tween.get(this.enemy, { override: true, useTicks: true })
        .wait(5).to({ y: y }, 45, createjs.Ease.backOut)
        .call(() => {
          this.attack();
          setTimeout(() => this.isTweening = 'alive', 100);
        });
    }
    return false;
  }

  easeToY(y, ticks) {
    if (this.isTweening === 'alive') {
      if (this.game.ticker.getTicks() % ticks === 0) this.attack();
      if (this.outofBounds()) {
        this.stage.removeChild(this.enemy);
        return true;
      }
    } else if (this.isTweening === 'dead'){
      this.isTweening = 'reviving';
      createjs.Tween.get(this.enemy, { override: true, useTicks: true })
        .wait(5).to({ y: y }, 45, createjs.Ease.backOut)
        .call(() => {
          this.attack();
          setTimeout(() => this.isTweening = 'alive', 1500);
        });
    }
    return false;
  }

  easeToX(x, ticks) {
    if (this.isTweening === 'alive') {
      if (this.game.ticker.getTicks() % ticks === 0) this.attack();
      if (this.outofBounds()) {
        this.stage.removeChild(this.enemy);
        return true;
      }
    } else if (this.isTweening === 'dead'){
      this.isTweening = 'reviving';
      createjs.Tween.get(this.enemy, { override: true, useTicks: true })
        .wait(5).to({ x: x }, 45, createjs.Ease.backOut)
        .call(() => {
          this.attack();
          setTimeout(() => this.isTweening = 'alive', 1500);
        });
    }
    return false;
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
        x = 3 * Math.cos(r);
        y = 3 * Math.sin(r);
      } else {
        x = 3 * -Math.cos(r);
        y = 3 * -Math.sin(r);
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
      let x = 3 * Math.cos(r);
      let y = 3 * Math.sin(r);
      let bullet = new greenBullet(x, y, this.game);
      bullet.shoot(this.enemy.x, this.enemy.y);
      this.game.enemyBullets.push(bullet);
      i += 1;
      if (i >= 80 || this.health <= 0) {
        clearInterval(id);
      }
    }, 20)
  }

  multipleCircleAttack() {
    let j = 0;
    let id = setInterval(() => {
      for (let i = 0; i < 50; i++) {
        let r = 2 * Math.PI * i / 50 + j / 50 * Math.PI;
        let x = 3 * Math.cos(r);
        let y = 3 * Math.sin(r);
        let bullet = new purpleBullet(x, y, this.game);
        bullet.shoot(this.enemy.x, this.enemy.y);
        this.game.enemyBullets.push(bullet);
      }
      j += 1;
      if (j > 3 || this.health <= 0) {
        clearInterval(id);
      }
    }, 400)
  }

  outofBounds() {
    if (this.enemy.x < -200 || this.enemy.x > 800 || this.enemy.y < -30 ||
    this.enemy.y > 930) {
      return true;
    }
    return false;
  }
}

export default EnemyShip;
