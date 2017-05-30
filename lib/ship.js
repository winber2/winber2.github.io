// const shipData = {
//   images: ['assets/ship.png', 'assets/ship-right.png'],
//   frames: { width: 65, height: 65 },
//   animations: {
//     right: 2,
//     straight: 1
//   }
// }
//
// let ship = new createjs.Bitmap('assets/ship.png');
//
// ship.x = 265;
// ship.y = 820;
//
//
// export default ship;

class Ship {
  constructor() {
    this.ship = new createjs.Bitmap('assets/ship.png');
    this.ship.x = 265;
    this.ship.y = 820;
    this.keys = {};
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  keydown(event) {
     this.keys[event.keyCode] = true;
  }

  keyup(event) {
     delete this.keys[event.keyCode];
  }

  playerAction() {
    if (this.keys[37]) this.ship.x -= 3;
    if (this.keys[38]) this.ship.y -= 3;
    if (this.keys[39]) this.ship.x += 3;
    if (this.keys[40]) this.ship.y += 3;
    if (this.keys[90]) console.log('adsf');
  }
}

export default Ship;
