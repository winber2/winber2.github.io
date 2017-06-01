import { PinkAlien, BlueAlien, GreenAlien, PurpleAlien } from './aliens';

function playLevel(game) {
  // setTimeout(() => pinkDiagonal(650, 100, -5, 1, 'linear offset', 'single', game), 1000);
  // setTimeout(() => pinkDiagonal(-50, 100, 5, 1, 'linear offset', 'single', game), 6000);
  setTimeout(() => blue(game), 1000);
  setTimeout(() => green(500, -30, 0.5, 1, 'ease', 'spiral', game), 16000);
  setTimeout(() => threePink(300, 250, 0.5, 1, 'ease2', 'single', game), 19000);
  setTimeout(() => pinkDiagonal(650, 200, -5, -0.5, 'linear', 'circle', game), 21000);
  setTimeout(() => pinkDiagonal(-50, 300, 5, -0.5, 'linear', 'circle', game), 24500);
  setTimeout(() => purple(650, 80, 0.5, 1, 'ease', 'multiple circles', game), 30000);
  setTimeout(() => purple(-50, 80, 0.5, 1, 'ease2', 'multiple circles', game), 32000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease', 'single', game), 33000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease2', 'single', game), 33000);
  setTimeout(() => threePink(150, -50, 0.5, 1, 'ease3', 'single', game), 35000);
  setTimeout(() => threePink(450, -50, 0.5, 1, 'ease3', 'single', game), 35000);

}

function pinkDiagonal(x, y, velX, velY, move, attack, game) {
  let i = 0;
  let id = setInterval( () => {
    let pink = new PinkAlien(velX, velY, game, 3, move, attack);
    pink.initiate(x, y);
    i += 1;
    if (i >= 10) {
      clearInterval(id);
    }
  }, 400)
}

function threePink(x, y, velX, velY, move, attack, game) {
  let pink1 = new PinkAlien(velX, velY, game, 5, move, attack);
  let pink2 = new PinkAlien(velX, velY, game, 5, move, attack);
  let pink3 = new PinkAlien(velX, velY, game, 5, move, attack);
  pink1.initiate(x - 80, y);
  pink2.initiate(x, y);
  pink3.initiate(x + 80, y);
}

function purple(x, y, velX, velY, move, attack, game) {
  let purple = new PurpleAlien(velX, velY, game, 30, move, attack)
  purple.initiate(x, y);
}

function blue(game) {
  let blue = new BlueAlien(-0.5, 1, game, 20, 'ease', 'shotgun');
  let blue2 = new BlueAlien(-0.5, 1, game, 20, 'ease', 'shotgun');
  blue.initiate(350, -30);
  blue2.initiate(250, -30);
}

function green(x, y, velX, velY, move, attack, game) {
  let green = new GreenAlien(velX, velY, game, 25, move, attack);
  let green2 = new GreenAlien(velX, velY, game, 25, move, attack);
  green.initiate(x, y);
  green2.initiate(600 - x, y);
}

export default playLevel;
