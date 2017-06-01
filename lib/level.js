import { PinkAlien, BlueAlien, GreenAlien, PurpleAlien } from './aliens';
// import delay from './delay_util';

function playLevel(game) {
  // setTimeout(() => pinkDiagonal(650, 100, -5, 1, 'linear offset', 'single', game), 1000);
  // setTimeout(() => pinkDiagonal(-50, 100, 5, 1, 'linear offset', 'single', game), 6000);
  // setTimeout(() => blue(game), 13000);
  // setTimeout(() => green(game), 16000);
  // setTimeout(() => pinkDiagonal(650, 200, -5, -0.5, 'linear', 'circle', game), 21000);
  // setTimeout(() => pinkDiagonal(-50, 300, 5, -0.5, 'linear', 'circle', game), 24500);
  setTimeout(() => purple(650, 200, 0.5, 1, 'ease', 'multiple circles', game), 0);
}

function pinkDiagonal(x, y, velX, velY, move, attack, game) {
  let i = 0;
  let id = setInterval( () => {
    let pink = new PinkAlien(velX, velY, game, 3, move, attack);
    pink.initiate(x, y, game);
    i += 1;
    if (i >= 10) {
      clearInterval(id);
    }
  }, 400)
}

function purple(x, y, velX, velY, move, attack, game) {
  let purple = new PurpleAlien(velX, velY, game, 30, move, attack)
  purple.initiate(x, y, game);
}

function blue(game) {
  let blue = new BlueAlien(0.5, 1, game, 15, 'ease', 'shotgun');
  let blue2 = new BlueAlien(-0.5, 1, game, 15, 'ease', 'shotgun');
  blue.initiate(200, -25, game);
  blue2.initiate(400, -25, game);
}

function green(game) {
  let green = new GreenAlien(0, 0.5, game, 20, 'ease', 'spiral');
  let green2 = new GreenAlien(0, 0.5, game, 20, 'ease', 'spiral');
  green.initiate(150, -25, game);
  green2.initiate(450, -25, game);
}

export default playLevel;
