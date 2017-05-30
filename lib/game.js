import Ship from './ship';

class Game {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.play = this.play.bind(this);
    this.shipClass = new Ship();
  }

  start() {
    this.stage.addChild(this.shipClass.ship);
    createjs.Ticker.addEventListener("tick", this.play);
    createjs.Ticker.setFPS(60);
  }

  play() {
     this.ship.playerAction();
     this.stage.update();
  }
}

let game = new Game();
game.start();
