## Valkyrie

[Live Demo](https://winber2.github.io/)

### Background

Valkyrie is a classic bullet hell game, which takes on the classic arcade style look. This was a small (but very entertaining!) project I took on for a few days to hone my object-oriented programming and my vanilla JavaScript. It features multiple kinds of enemies and a boss, power-ups, and a score counter. Scores are only saved locally, however. Hope you enjoy!

### Features

#### Technologies

A few JavaScript libraries were used: `jQuery` and `EaselJS`.

Although start screens and end screens can be made using canvas only, I thought it more concise and interactive to use DOM manipulation to achieve this end. My score bar, power level bar, as well as the start and end screen are all conditionally rendered and updated html elements, which were either activated or hidden using `jQuery` depending on the situation.

`EaselJS` is a great library to use for drawing on the canvas. It allows for easy manipulation of images as well as simple animations.

#### Moving Objects

Moving objects fluidly is much easier said than done. Depending on how you organize and write your code, moving hundreds of objects can be very costly. My resolution was to make one `MovingObject` class that would embody all objects that would need to be moved, namely the player, the enemies, and the bullets.

Whenever, an object appeared on the screen, this object would get pushed into one of many arrays handled by the game class: `enemies`, `bullets`, `enemyBullets`, and vice versa. This reduces the amount of calculations needed by separating the duties of each array of objects. Had all object been placed into one large array, a very large conditional would be required to determine what function to call and every single permutation of object pairs would need to be calculated.

To move the objects, the `MovingObject` class would have a basic `move()` function for basic linear movement, but this would be rewritten for individual classes which required more advanced movement patterns. The game would initiate a constant `setInterval` at 60 frames per second and call this `move()` function.


General game interval logic:
```js
  this.ticker.addEventListener('tick', () => {
    this.ship.playerAction();
    this.moveBoss();
    this.moveBullets();
    this.moveEnemies();
    this.moveEnemyBullets();
    this.moveOther();
    this.stage.update();
  });
```
```js
  moveEnemies() {
    this.enemies.forEach( (enemy, idx) => {
      if (enemy.move()) {
        this.enemies.splice(idx, 1);
      } else if (this.collideWithPlayer(enemy)) {
        this.resetPlayer();
      }
    });
  }
```
General move logic:
```js
  linearMove() {
    this.enemy.x += this.velX;
    this.enemy.y += this.velY;
    if (this.outofBounds()) {
      this.stage.removeChild(this.enemy);
      return true;
    }
    return false;
  }
```

#### Attack Patterns

What makes bullet hell games interesting are the varying attack patterns, so of course I have a hundred or two lines of code on movement and attack patterns!

The possibilities for these patterns are endless, but here are some patterns I used, created using basic trigonometry.

'Shotgun' pattern:
```js
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
```
![shotgun](./docs/shotgun.jpg)

Variation on the circular attack:
```js
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
```
![circle](./docs/circle.jpg)

#### Boss fight!!!
![demo](./docs/demo.jpg)

### Game and Controls

The player plays as a ship which will continuously shoot bullets at invading aliens. Enemies all have different attack patterns and movement patterns. The goal is to play through the level and reach the end and achieve the highest possible score. As a proof of concept, this small project will only showcase one level with a boss, but much more can very much be done! Despite having only one level, the game is quite challenging.

Use the Arrow Keys to move around, and hold 'z' to shoot. Pick up power-ups to increase your bullet strength. Try to kill the enemies as fast as possible otherwise your screen will be flooded with bullets!
