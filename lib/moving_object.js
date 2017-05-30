class MovingObject {
  constructor(velX, velY, game) {
    this.velX = velX;
    this.velY = velY;
    this.game = game;
    this.stage = game.stage;
  }

  hitPlayer(ship) {
    let x = Math.abs(ship.ship.x - this.bullet.x);
    let y = Math.abs(ship.ship.y - this.bullet.y);
    if (x < 40 && y < 15) {
      this.stage.removeChild(this.bullet);
      this.stage.removeChild(ship.ship);
      return true;
    }
    return false;
  }

  hitEnemy(enemy) {
    let x = Math.abs(enemy.enemy.x - this.bullet.x);
    let y = Math.abs(enemy.enemy.y - this.bullet.y);
    if (x < 40 && y < 15) {
      this.stage.removeChild(this.bullet);
      enemy.health -= 1;
      if (enemy.health <= 0) {
        this.stage.removeChild(enemy.enemy);
        return true;
      }
    }
    return false;
  }
}

export default MovingObject;
