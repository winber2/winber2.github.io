class MovingObject {
  constructor(velX, velY, stage) {
    this.velX = velX;
    this.velY = velY;
    this.stage = stage;
  }

  hitEnemy(enemy) {
    let x = Math.abs(enemy.enemy.x - this.bullet.x);
    let y = Math.abs(enemy.enemy.y - this.bullet.y);
    if (x < 40 && y < 20) {
      enemy.health -= 1;
      if (enemy.health <= 0) {
        this.stage.removeChild(enemy.enemy);
        return true;
      }
      this.stage.removeChild(this.bullet);
    }
    return false;
  }
}

export default MovingObject;
