import { PinkAlien, BlueAlien, GreenAlien } from './enemies';

function playLevel(game) {
  setTimeout(() => pinkDiagonal(650, 100, -5, 1), 1000);
  setTimeout(() => pinkDiagonal(-50, 100, 5, 1), 5000);
  setTimeout(() => blueGreen(), 12000)
}

function pinkDiagonal(x, y, velX, velY) {
  let i = 0;
  let id = setInterval( () => {
    let pink = new PinkAlien(velX, velY, game, 5, 'linear', 1);
    pink.initiate(x, y, game);
    i += 1;
    if (i >= 10) {
      clearInterval(id);
    }
  }, 400)
}

function blueGreen() {
  let green = new GreenAlien(0, 0.5, game, 20, 'ease', 1);
  let green2 = new GreenAlien(0, 0.5, game, 20, 'ease', 1);
  let blue = new BlueAlien(0.5, 1, game, 50, 'linear', 1);
  let blue2 = new BlueAlien(-0.5, 1, game, 50, 'linear', 1);
  blue.initiate(200, 0, game);
  blue2.initiate(400, 0, game);
  green.initiate(150, 0, game);
  green2.initiate(450, 0, game);
}

export default playLevel;
