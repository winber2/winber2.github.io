class MovingObject {
  constructor(velX, velY, stage) {
    this.velX = velX;
    this.velY = velY;
    this.stage = stage;
  }

  hitEnemy(enemy) {
    let x = Math.abs(enemy.enemy.x - this.bullet.x);
    let y = Math.abs(enemy.enemy.y - this.bullet.y);
    if (x < 10 && y < 10) {
      this.stage.removeChild(enemy.enemy);
      this.stage.removeChild(this.bullet);
      return true;
    }
    return false;
  }
}

export default MovingObject;
