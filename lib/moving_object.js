import PowerUp from './power_up';

class MovingObject {
  constructor(velX, velY, game) {
    this.velX = velX;
    this.velY = velY;
    this.game = game;
    this.stage = game.stage;
  }

  hitPlayer(ship) {
    if (ship.isRespawning) return false;
    let x = Math.abs(ship.ship.x - this.bullet.x);
    let y = Math.abs(ship.ship.y - this.bullet.y);
    if (x < 15 && y < 15) {
      this.stage.removeChild(ship.ship);
      return true;
    }
    return false;
  }

  collideWithPlayer(ship) {
    if (ship.isRespawning) return false;
    let x = Math.abs(ship.ship.x - this.enemy.x);
    let y = Math.abs(ship.ship.y - this.enemy.y);
    if (x < 30 && y < 20) {
      this.stage.removeChild(ship.ship);
      return true;
    }
    return false;
  }

  dropPowerUp(enemy) {
    let num = Math.random() * 100;
    if (num <= 25 ) {
      let powerup = new PowerUp(this.game);
      powerup.drop(enemy.enemy.x, enemy.enemy.y);
    }
  }

  hitEnemy(enemy) {
    let x = Math.abs(enemy.enemy.x - this.bullet.x);
    let y = Math.abs(enemy.enemy.y - this.bullet.y);
    if (x < enemy.width && y < enemy.height) {
      this.stage.removeChild(this.bullet);
      this.game.score.update(10);
      enemy.health -= 1;
      if (enemy.health <= 0) {
        this.game.score.update(2000);
        this.game.explode(enemy.enemy.x, enemy.enemy.y);
        this.stage.removeChild(enemy.enemy);
        this.dropPowerUp(enemy);
        if (enemy.waveEnder) {
          this.game.inProgress = false;
        }
        return true;
      }
    }
    return false;
  }
}

export default MovingObject;
