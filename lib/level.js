import { PinkAlien, BlueAlien, GreenAlien, PurpleAlien } from './aliens';
import Boss from './boss';

export function waveOne(game) {
  setTimeout(() => pinkDiagonal(650, 100, -5, 1, 'linear offset', 'single', game), 1000);
  setTimeout(() => pinkDiagonal(-50, 100, 5, 1, 'linear offset', 'single', game), 6000);
  setTimeout(() => symmetricBlue(game) , 13000);
  setTimeout(() => symmetricGreen(game), 16000);
  setTimeout(() => threePink(300, 0, 0.5, 1, 'ease2', 'single', game, true), 20000);
}

export function waveTwo(game) {
  setTimeout(() => pinkDiagonal(650, 200, -5, -0.5, 'linear', 'circle', game), 0);
  setTimeout(() => pinkDiagonal(-50, 300, 5, -0.5, 'linear', 'circle', game), 2500);
  setTimeout(() => purple(650, 80, 0.5, 1, 'ease', 'multiple circles', game), 7000);
  setTimeout(() => symmetricBlue(game), 9000);
  setTimeout(() => blue(450, 0, 0.5, 1, 'ease', 'shotgun', game), 11000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease', 'single', game), 13000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease2', 'single', game, true), 13000);
}

export function waveThree(game) {
  setTimeout(() => purple(-50, 80, 0.5, 1, 'ease2', 'multiple circles', game), 2000);
  setTimeout(() => blue(500, 0, 0.5, 1, 'ease2', 'shotgun', game), 5000);
  setTimeout(() => threePink(150, -50, 0.5, 1, 'ease3', 'single', game), 7000);
  setTimeout(() => threePink(450, -50, 0.5, 1, 'ease3', 'single', game), 7000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease2', 'single', game, true), 9000);
}

export function waveFour(game) {
  setTimeout(() => pinkDiagonal(650, 400, -5, -0.5, 'linear', 'circle', game), 1000);
  setTimeout(() => pinkDiagonal(650, 300, 5, -0.5, 'linear', 'circle', game), 2500);
  setTimeout(() => pinkDiagonal(-50, 400, -5, -0.5, 'linear', 'circle', game), 5000);
  setTimeout(() => pinkDiagonal(-50, 300, 5, -0.5, 'linear', 'circle', game), 6500);
  setTimeout(() => symmetricGreen(game), 9000);
  setTimeout(() => blue(450, 0, 0.5, 1, 'ease2', 'shotgun', game), 11000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease', 'single', game, true), 13000);
}

export function waveFive(game) {
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease2', 'single', game), 0);
  setTimeout(() => threePink(150, -50, 0.5, 1, 'ease3', 'single', game), 2000);
  setTimeout(() => threePink(450, -50, 0.5, 1, 'ease3', 'single', game), 2000);
  setTimeout(() => purple(-50, 80, 0.5, 1, 'ease2', 'multiple circles', game), 5000);
  setTimeout(() => symmetricGreen(game), 9000);
  setTimeout(() => threePink(300, -50, 0.5, 1, 'ease2', 'single', game, true), 11000);
}

export function bossWave(game) {
  setTimeout(() => boss(game), 2000)
}

function boss(game) {
  let boss = new Boss(0, 0, game, 10000);
  boss.initiate(300, -50);
}

function pinkDiagonal(x, y, velX, velY, move, attack, game, waveEnder) {
  let i = 0;
  let id = setInterval( () => {
    let pink = new PinkAlien(velX, velY, game, 3, move, attack, waveEnder);
    pink.initiate(x, y);
    i += 1;
    if (i >= 10) {
      clearInterval(id);
    }
  }, 400)
}

function threePink(x, y, velX, velY, move, attack, game, waveEnder) {
  let pink1 = new PinkAlien(velX, velY, game, 5, move, attack);
  let pink2 = new PinkAlien(velX, velY, game, 5, move, attack);
  let pink3 = new PinkAlien(velX, velY, game, 5, move, attack, waveEnder);
  pink1.initiate(x - 80, y);
  pink2.initiate(x, y);
  pink3.initiate(x + 80, y);
}

function purple(x, y, velX, velY, move, attack, game) {
  let purple = new PurpleAlien(velX, velY, game, 30, move, attack)
  purple.initiate(x, y);
}

function blue(x, y, velX, velY, move, attack, game) {
  let blue = new BlueAlien(velX, velY, game, 30, move, attack);
  let blue2 = new BlueAlien(velX, velY, game, 30, move, attack);
  blue.initiate(x, y);
  blue2.initiate(600 - x, y);
}

function symmetricBlue(game) {
  let blue = new BlueAlien(-0.5, 1, game, 20, 'ease', 'shotgun');
  let blue2 = new BlueAlien(-0.5, 1, game, 20, 'ease', 'shotgun');
  blue.initiate(350, 0);
  blue2.initiate(250, 0);
}

function green(x, y, velX, velY, move, attack, game) {
  let green = new GreenAlien(velX, velY, game, 25, move, attack);
  let green2 = new GreenAlien(velX, velY, game, 25, move, attack);
  green.initiate(x, y);
  green2.initiate(600 - x, y);
}
function symmetricGreen(game) {
  let green = new GreenAlien(-0.5, 1, game, 20, 'ease', 'spiral');
  let green2 = new GreenAlien(-0.5, 1, game, 20, 'ease', 'spiral');
  green.initiate(100, 0);
  green2.initiate(500, 0);
}
