import { PinkAlien, BlueAlien, GreenAlien } from './enemies';

function playLevel(game) {
  // setTimeout(() => pinkDiagonal(650, 100, -5, 1), 1000);
  // setTimeout(() => pinkDiagonal(-50, 100, 5, 1), 5000);
  setTimeout(() => blueGreen(), 0)
}

function pinkDiagonal(x, y, velX, velY) {
  let i = 0;
  let id = setInterval( () => {
    let pink = new PinkAlien(velX, velY, game, 5, 'linear offset', 'single');
    pink.initiate(x, y, game);
    i += 1;
    if (i >= 10) {
      clearInterval(id);
    }
  }, 400)
}

function blueGreen() {
  let green = new GreenAlien(0, 0.5, game, 20, 'ease', 'spiral');
  let green2 = new GreenAlien(0, 0.5, game, 20, 'ease', 'spiral');
  let blue = new BlueAlien(0.5, 1, game, 50, 'linear', 'shotgun');
  let blue2 = new BlueAlien(-0.5, 1, game, 50, 'linear', 'shotgun');
  blue.initiate(200, 0, game);
  blue2.initiate(400, 0, game);
  green.initiate(150, -25, game);
  green2.initiate(450, -25, game);
}

export default playLevel;
