import EnemyShip from './enemy';
import { pinkBullet, blueBullet, greenBullet, purpleBullet } from './bullets';
import { PinkAlien, BlueAlien, GreenAlien, PurpleAlien } from './aliens';

const BULLETS = [
  pinkBullet,
  blueBullet,
  greenBullet,
  purpleBullet
]

const ALIENS = [
  PinkAlien,
  BlueAlien,
  GreenAlien,
  PurpleAlien
]

class Boss extends EnemyShip {
  constructor(velX, velY, game, health) {
    super(velX, velY, game, health);
    this.enemy = new createjs.Bitmap('assets/orangeAlien.png')
    this.enemy.regX = 129;
    this.enemy.regY = 118;
    this.ship = this.game.ship.ship;
    this.isTweening = 'dead';
    this.width = 100;
    this.height = 100;
  }

  initiate(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    let $health = $('footer.health');
    $health.addClass('active');
    this.stage.addChild(this.enemy);
    this.game.boss.push(this);
  }

  move() {
    if (this.isTweening === 'dead') {
      this.isTweening = 'reviving';
      createjs.Tween.get(this.enemy, {useTicks: true})
        .to({ y: 250 }, 200, createjs.Ease.backOut)
        .call(() => this.isTweening = 'alive')
    } else if (this.isTweening === 'alive') {
      this.isTweening = 'reviving';
      let x = Math.random() * 300 + 100;
      let attackId = Math.floor(Math.random() * 5);
      this.attackType = attackId;
      createjs.Tween.get(this.enemy, {useTicks: true})
        .to({ x: x }, 60, createjs.Ease.backOut)
        .call(() => this.attack())
        .wait(120)
        .call(() => this.isTweening = 'alive');
    }
  }

  attack() {
    switch (this.attackType) {
      case 0:
        this.rain();
        break;
      case 1:
        this.multipleCircleAttack();
        break;
      case 2:
        this.line();
        break;
      case 3:
        this.shotgun();
        break;
      case 4:
        this.spiralAttack();
        this.burst();
        break;
    }
    if (Math.random() < 0.25) {
      let num = Math.floor(Math.random() * 4);
      let x = num < 2 ? 100 : 500;
      let alien = new ALIENS[num](0, 0, game, 10)
      alien.initiate(x, 0);
    }
  }

  rain() {
    let i = 0, velX = -3, x = 600;
    if (Math.random() < 0.5) {
      velX = 3;
      x = 0;
    }
    let id = setInterval(() => {
      let bulletId = Math.floor(Math.random() * 4);
      let bullet1 = new BULLETS[bulletId](velX, 1, this.game);
      let bullet2 = new BULLETS[bulletId](velX, 1, this.game);
      let bullet3 = new BULLETS[bulletId](velX, 1, this.game);
      let bullet4 = new BULLETS[bulletId](velX, 1, this.game);
      let bullet5 = new BULLETS[bulletId](velX, 1, this.game);
      let bullet6 = new BULLETS[bulletId](velX, 1, this.game);
      bullet1.shoot(x, 250);
      bullet2.shoot(x, 350);
      bullet3.shoot(x, 450);
      bullet4.shoot(x, 550);
      bullet5.shoot(x, 650);
      bullet6.shoot(x, 750);
      this.game.enemyBullets.push(bullet1);
      this.game.enemyBullets.push(bullet2);
      this.game.enemyBullets.push(bullet3);
      this.game.enemyBullets.push(bullet4);
      this.game.enemyBullets.push(bullet4);
      this.game.enemyBullets.push(bullet5);
      this.game.enemyBullets.push(bullet6);
      i += 1;
      if (i > 10) {
        clearInterval(id)
      }
    }, 250);
  }

  line() {
    let i = 0;
    let velY = 4;
    let y = 0;
    if (Math.random() < 0.5) {
      velY = -4;
      y = 920;
    }
    let id = setInterval(() => {
      let x = Math.floor(Math.random() * 200) + 0
      let bulletId = Math.floor(Math.random() * 4);
      let bullet1 = new BULLETS[bulletId](0, velY, this.game);
      let bullet2 = new BULLETS[bulletId](0, velY, this.game);
      let bullet3 = new BULLETS[bulletId](0, velY, this.game);
      let bullet4 = new BULLETS[bulletId](0, velY, this.game);
      bullet1.shoot(x, y);
      bullet2.shoot(x + 150, y);
      bullet3.shoot(x + 300, y);
      bullet4.shoot(x + 450, y);
      this.game.enemyBullets.push(bullet1);
      this.game.enemyBullets.push(bullet2);
      this.game.enemyBullets.push(bullet3);
      this.game.enemyBullets.push(bullet4);
      i += 1;
      if (i > 10) {
        clearInterval(id)
      }
    }, 250);
  }

  shotgun() {
    let i = 0;
    let id = setInterval(() => {
      this.shotgunAttack();
      i += 1;
      if (i > 3 || this.health <= 0) {
        clearInterval(id);
      }
    }, 1000)
  }

  burst() {
    let i = 0;
    let id = setInterval(() => {
      this.singleAttack();
      i += 1
      if (i > 6) {
        clearInterval(id);
      }
    }, 300)
  }
}

export default Boss;
