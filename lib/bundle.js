/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.purpleBullet = exports.greenBullet = exports.blueBullet = exports.pinkBullet = exports.defaultCurveBullet = exports.defaultBullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(1);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = function (_MovingObject) {
  _inherits(Bullet, _MovingObject);

  function Bullet(velX, velY, game) {
    _classCallCheck(this, Bullet);

    return _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, velX, velY, game));
  }

  _createClass(Bullet, [{
    key: 'shoot',
    value: function shoot(x, y) {
      this.bullet.x = x;
      this.bullet.y = y;
      this.stage.addChild(this.bullet);
    }
  }, {
    key: 'outofBounds',
    value: function outofBounds() {
      if (this.bullet.x < -200 || this.bullet.x > 800 || this.bullet.y < -20 || this.bullet.y > 920) {
        return true;
      }
      return false;
    }
  }]);

  return Bullet;
}(_moving_object2.default);

var defaultBullet = exports.defaultBullet = function (_Bullet) {
  _inherits(defaultBullet, _Bullet);

  function defaultBullet(velX, velY, game) {
    _classCallCheck(this, defaultBullet);

    var _this2 = _possibleConstructorReturn(this, (defaultBullet.__proto__ || Object.getPrototypeOf(defaultBullet)).call(this, velX, velY, game));

    _this2.bullet = new createjs.Bitmap('assets/bullet.png');
    return _this2;
  }

  _createClass(defaultBullet, [{
    key: 'move',
    value: function move() {
      this.bullet.x += this.velX;
      this.bullet.y += this.velY;
      if (this.outofBounds()) {
        this.stage.removeChild(this.bullet);
        return true;
      }
      return false;
    }
  }]);

  return defaultBullet;
}(Bullet);

var defaultCurveBullet = exports.defaultCurveBullet = function (_Bullet2) {
  _inherits(defaultCurveBullet, _Bullet2);

  function defaultCurveBullet(velX, velY, game, ticker, offset) {
    _classCallCheck(this, defaultCurveBullet);

    var _this3 = _possibleConstructorReturn(this, (defaultCurveBullet.__proto__ || Object.getPrototypeOf(defaultCurveBullet)).call(this, velX, velY, game));

    _this3.ticker = ticker;
    _this3.tickOffset = offset - _this3.ticker.getTicks();
    _this3.bullet = new createjs.Bitmap('assets/curveBullet.png');
    return _this3;
  }

  _createClass(defaultCurveBullet, [{
    key: 'move',
    value: function move() {
      this.bullet.y += this.velY;
      var offset = this.ticker.getTicks() + this.tickOffset;
      this.bullet.x += Math.sin(offset * 0.2) * 20;
      if (this.outofBounds()) {
        this.stage.removeChild(this.bullet);
        return true;
      }
      return false;
    }
  }]);

  return defaultCurveBullet;
}(Bullet);

var pinkBullet = exports.pinkBullet = function (_defaultBullet) {
  _inherits(pinkBullet, _defaultBullet);

  function pinkBullet(velX, velY, game) {
    _classCallCheck(this, pinkBullet);

    var _this4 = _possibleConstructorReturn(this, (pinkBullet.__proto__ || Object.getPrototypeOf(pinkBullet)).call(this, velX, velY, game));

    _this4.bullet = new createjs.Bitmap('assets/pinkBullet.png');
    _this4.bullet.regX = 10;
    _this4.bullet.regY = 10;
    return _this4;
  }

  return pinkBullet;
}(defaultBullet);

var blueBullet = exports.blueBullet = function (_defaultBullet2) {
  _inherits(blueBullet, _defaultBullet2);

  function blueBullet(velX, velY, game) {
    _classCallCheck(this, blueBullet);

    var _this5 = _possibleConstructorReturn(this, (blueBullet.__proto__ || Object.getPrototypeOf(blueBullet)).call(this, velX, velY, game));

    _this5.bullet = new createjs.Bitmap('assets/blueBullet.png');
    _this5.bullet.regX = 10;
    _this5.bullet.regY = 10;
    return _this5;
  }

  return blueBullet;
}(defaultBullet);

var greenBullet = exports.greenBullet = function (_defaultBullet3) {
  _inherits(greenBullet, _defaultBullet3);

  function greenBullet(velX, velY, game) {
    _classCallCheck(this, greenBullet);

    var _this6 = _possibleConstructorReturn(this, (greenBullet.__proto__ || Object.getPrototypeOf(greenBullet)).call(this, velX, velY, game));

    _this6.bullet = new createjs.Bitmap('assets/greenBullet.png');
    _this6.bullet.regX = 10;
    _this6.bullet.regY = 10;
    return _this6;
  }

  return greenBullet;
}(defaultBullet);

var purpleBullet = exports.purpleBullet = function (_defaultBullet4) {
  _inherits(purpleBullet, _defaultBullet4);

  function purpleBullet(velX, velY, game) {
    _classCallCheck(this, purpleBullet);

    var _this7 = _possibleConstructorReturn(this, (purpleBullet.__proto__ || Object.getPrototypeOf(purpleBullet)).call(this, velX, velY, game));

    _this7.bullet = new createjs.Bitmap('assets/purpleBullet.png');
    _this7.bullet.regX = 10;
    _this7.bullet.regY = 10;
    return _this7;
  }

  return purpleBullet;
}(defaultBullet);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _power_up = __webpack_require__(9);

var _power_up2 = _interopRequireDefault(_power_up);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(velX, velY, game) {
    _classCallCheck(this, MovingObject);

    this.velX = velX;
    this.velY = velY;
    this.game = game;
    this.stage = game.stage;
  }

  _createClass(MovingObject, [{
    key: 'hitPlayer',
    value: function hitPlayer(ship) {
      if (ship.isRespawning) return false;
      var x = Math.abs(ship.ship.x - this.bullet.x);
      var y = Math.abs(ship.ship.y - this.bullet.y);
      if (x < 15 && y < 15) {
        this.stage.removeChild(ship.ship);
        return true;
      }
      return false;
    }
  }, {
    key: 'collideWithPlayer',
    value: function collideWithPlayer(ship) {
      if (ship.isRespawning) return false;
      var x = Math.abs(ship.ship.x - this.enemy.x);
      var y = Math.abs(ship.ship.y - this.enemy.y);
      if (x < 30 && y < 20) {
        this.stage.removeChild(ship.ship);
        return true;
      }
      return false;
    }
  }, {
    key: 'dropPowerUp',
    value: function dropPowerUp(enemy) {
      var num = Math.random() * 100;
      if (num <= 25) {
        var powerup = new _power_up2.default(this.game);
        powerup.drop(enemy.enemy.x, enemy.enemy.y);
      }
    }
  }, {
    key: 'hitEnemy',
    value: function hitEnemy(enemy) {
      var x = Math.abs(enemy.enemy.x - this.bullet.x);
      var y = Math.abs(enemy.enemy.y - this.bullet.y);
      if (x < enemy.width && y < enemy.height) {
        this.stage.removeChild(this.bullet);
        this.game.score.update(10);
        enemy.health -= 1;
        if (enemy.health <= 0) {
          this.game.score.update(2000);
          this.game.explode(enemy.enemy.x, enemy.enemy.y);
          this.stage.removeChild(enemy.enemy);
          this.dropPowerUp(enemy);
          if (enemy.waveEnder) {
            this.game.inProgress = false;
          }
          return true;
        }
      }
      return false;
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PurpleAlien = exports.GreenAlien = exports.BlueAlien = exports.PinkAlien = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(1);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _enemy = __webpack_require__(3);

var _enemy2 = _interopRequireDefault(_enemy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PinkAlien = exports.PinkAlien = function (_EnemyShip) {
  _inherits(PinkAlien, _EnemyShip);

  function PinkAlien(velX, velY, game, health, moveType, attackType, waveEnder) {
    _classCallCheck(this, PinkAlien);

    var _this = _possibleConstructorReturn(this, (PinkAlien.__proto__ || Object.getPrototypeOf(PinkAlien)).call(this, velX, velY, game, health, moveType, attackType));

    _this.enemy = new createjs.Bitmap('assets/pinkAlien.png');
    _this.enemy.regX = 35;
    _this.enemy.regY = 25;
    _this.ship = _this.game.ship.ship;
    _this.isTweening = 'dead';
    _this.waveEnder = waveEnder;
    return _this;
  }

  _createClass(PinkAlien, [{
    key: 'move',
    value: function move() {
      switch (this.moveType) {
        case 'linear':
          return this.linearMove(60);
        case 'linear offset':
          return this.linearMoveWithOffset();
        case 'ease':
          return this.easeToY(280, 30);
        case 'ease2':
          return this.easeToY(200, 30);
        case 'ease3':
          return this.easeToY(360, 30);
        default:
          return this.easeToY(100, 60);
      }
    }
  }, {
    key: 'attack',
    value: function attack() {
      switch (this.attackType) {
        case 'circle':
          return this.circleAttack();

        case 'single':
          return this.singleAttack();

        default:
          return this.circleAttack();
      }
    }
  }]);

  return PinkAlien;
}(_enemy2.default);

var BlueAlien = exports.BlueAlien = function (_EnemyShip2) {
  _inherits(BlueAlien, _EnemyShip2);

  function BlueAlien(velX, velY, game, health, moveType, attackType) {
    _classCallCheck(this, BlueAlien);

    var _this2 = _possibleConstructorReturn(this, (BlueAlien.__proto__ || Object.getPrototypeOf(BlueAlien)).call(this, velX, velY, game, health, moveType, attackType));

    _this2.enemy = new createjs.Bitmap('assets/blueAlien.png');
    _this2.enemy.regX = 35;
    _this2.enemy.regY = 25;
    _this2.isTweening = 'dead';
    _this2.ship = _this2.game.ship.ship;
    return _this2;
  }

  _createClass(BlueAlien, [{
    key: 'move',
    value: function move() {
      switch (this.moveType) {
        case 'linear':
          return this.linearMove(60);

        case 'ease':
          return this.easeToY(100, 60);

        case 'ease2':
          return this.easeToY(200, 60);

        default:
          return this.easeToY(100, 60);
      }
    }
  }, {
    key: 'attack',
    value: function attack() {
      switch (this.attackType) {
        case 'shotgun':
          return this.shotgunAttack();
        default:
          return this.shotgunAttack();
      }
    }
  }]);

  return BlueAlien;
}(_enemy2.default);

var GreenAlien = exports.GreenAlien = function (_EnemyShip3) {
  _inherits(GreenAlien, _EnemyShip3);

  function GreenAlien(velX, velY, game, health, moveType, attackType) {
    _classCallCheck(this, GreenAlien);

    var _this3 = _possibleConstructorReturn(this, (GreenAlien.__proto__ || Object.getPrototypeOf(GreenAlien)).call(this, velX, velY, game, health, moveType, attackType));

    _this3.enemy = new createjs.Bitmap('assets/greenAlien.png');
    _this3.enemy.regX = 35;
    _this3.enemy.regY = 25;
    _this3.isTweening = 'dead';
    return _this3;
  }

  _createClass(GreenAlien, [{
    key: 'move',
    value: function move() {
      switch (this.moveType) {
        case 'ease':
          return this.easeToY(150, 300);

        default:
          return this.easeToY(100, 300);
      }
    }
  }, {
    key: 'attack',
    value: function attack() {
      switch (this.attackType) {
        case 'spiral':
          return this.spiralAttack();
        default:
          return this.spiralAttack();
      }
    }
  }]);

  return GreenAlien;
}(_enemy2.default);

var PurpleAlien = exports.PurpleAlien = function (_EnemyShip4) {
  _inherits(PurpleAlien, _EnemyShip4);

  function PurpleAlien(velX, velY, game, health, moveType, attackType) {
    _classCallCheck(this, PurpleAlien);

    var _this4 = _possibleConstructorReturn(this, (PurpleAlien.__proto__ || Object.getPrototypeOf(PurpleAlien)).call(this, velX, velY, game, health, moveType, attackType));

    _this4.enemy = new createjs.Bitmap('assets/purpleAlien.png');
    _this4.enemy.regX = 35;
    _this4.enemy.regY = 25;
    _this4.isTweening = 'dead';
    return _this4;
  }

  _createClass(PurpleAlien, [{
    key: 'move',
    value: function move() {
      switch (this.moveType) {
        case 'ease':
          return this.easeToX(450, 300);

        case 'ease2':
          return this.easeToX(150, 300);

        default:
          return this.easeToY(100, 300);
      }
    }
  }, {
    key: 'attack',
    value: function attack() {
      switch (this.attackType) {
        case 'multiple circles':
          return this.multipleCircleAttack();
        default:
          return this.multipleCircleAttack();
      }
    }
  }]);

  return PurpleAlien;
}(_enemy2.default);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(1);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _bullets = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EnemyShip = function (_MovingObject) {
  _inherits(EnemyShip, _MovingObject);

  function EnemyShip(velX, velY, game, health, moveType, attackType) {
    _classCallCheck(this, EnemyShip);

    var _this = _possibleConstructorReturn(this, (EnemyShip.__proto__ || Object.getPrototypeOf(EnemyShip)).call(this, velX, velY, game));

    _this.health = health;
    _this.moveType = moveType;
    _this.attackType = attackType;
    _this.width = 40;
    _this.height = 15;
    return _this;
  }

  _createClass(EnemyShip, [{
    key: 'initiate',
    value: function initiate(x, y) {
      this.enemy.x = x;
      this.enemy.y = y;
      this.stage.addChild(this.enemy);
      this.game.enemies.push(this);
    }
  }, {
    key: 'easeToY',
    value: function easeToY(y, ticks) {
      var _this2 = this;

      if (this.isTweening === 'alive') {
        if (this.game.ticker.getTicks() % ticks === 0) this.attack();
        if (this.outofBounds()) {
          this.stage.removeChild(this.enemy);
          return true;
        }
      } else if (this.isTweening === 'dead') {
        this.isTweening = 'reviving';
        createjs.Tween.get(this.enemy, { override: true, useTicks: true }).wait(5).to({ y: y }, 45, createjs.Ease.backOut).call(function () {
          _this2.attack();
          setTimeout(function () {
            return _this2.isTweening = 'alive';
          }, 100);
        });
      }
      return false;
    }
  }, {
    key: 'easeToX',
    value: function easeToX(x, ticks) {
      var _this3 = this;

      if (this.isTweening === 'alive') {
        if (this.game.ticker.getTicks() % ticks === 0) this.attack();
        if (this.outofBounds()) {
          this.stage.removeChild(this.enemy);
          return true;
        }
      } else if (this.isTweening === 'dead') {
        this.isTweening = 'reviving';
        createjs.Tween.get(this.enemy, { override: true, useTicks: true }).wait(5).to({ x: x }, 45, createjs.Ease.backOut).call(function () {
          _this3.attack();
          setTimeout(function () {
            return _this3.isTweening = 'alive';
          }, 100);
        });
      }
      return false;
    }
  }, {
    key: 'linearMove',
    value: function linearMove(ticks) {
      this.enemy.x += this.velX;
      this.enemy.y += this.velY;
      if (this.game.ticker.getTicks() % ticks === 0) this.attack();
      if (this.outofBounds()) {
        this.stage.removeChild(this.enemy);
        return true;
      }
      return false;
    }
  }, {
    key: 'linearMoveWithOffset',
    value: function linearMoveWithOffset() {
      this.enemy.x += this.velX;
      this.enemy.y += this.velY;
      var ticker = this.game.ticker.getTicks();
      if (ticker % 60 <= 17 && ticker % 4 === 0) this.attack();
      if (this.outofBounds()) {
        this.stage.removeChild(this.enemy);
        return true;
      }
      return false;
    }
  }, {
    key: 'singleAttack',
    value: function singleAttack() {
      var dx = this.enemy.x - this.ship.x;
      var dy = this.enemy.y - this.ship.y;
      var r = Math.atan(dy / dx);
      var x = void 0,
          y = void 0;
      if (dy < 0 && dx < 0 || dy > 0 && dx < 0) {
        x = 3 * Math.cos(r);
        y = 3 * Math.sin(r);
      } else {
        x = 3 * -Math.cos(r);
        y = 3 * -Math.sin(r);
      }
      var bullet = new _bullets.pinkBullet(x, y, this.game);
      bullet.shoot(this.enemy.x, this.enemy.y);
      this.game.enemyBullets.push(bullet);
    }
  }, {
    key: 'shotgunAttack',
    value: function shotgunAttack() {
      var dx = this.enemy.x - this.ship.x;
      var dy = this.enemy.y - this.ship.y;
      var radians = Math.atan(dy / dx);
      for (var i = -3; i < 3; i++) {
        var r = 2 / 3 * Math.PI * i / 18 + radians;
        var x = void 0,
            y = void 0;
        if (dy < 0 && dx < 0 || dy > 0 && dx < 0) {
          x = 3 * Math.cos(r);
          y = 3 * Math.sin(r);
        } else {
          x = 3 * -Math.cos(r);
          y = 3 * -Math.sin(r);
        }
        var bullet = new _bullets.blueBullet(x, y, this.game);
        bullet.shoot(this.enemy.x, this.enemy.y);
        this.game.enemyBullets.push(bullet);
      }
    }
  }, {
    key: 'circleAttack',
    value: function circleAttack() {
      for (var i = 0; i < 10; i++) {
        var r = 2 * Math.PI * i / 10;
        var x = 1.5 * Math.cos(r);
        var y = 1.5 * Math.sin(r);
        var bullet = new _bullets.pinkBullet(x, y, this.game);
        bullet.shoot(this.enemy.x, this.enemy.y);
        this.game.enemyBullets.push(bullet);
      }
    }
  }, {
    key: 'spiralAttack',
    value: function spiralAttack() {
      var _this4 = this;

      var i = 0;
      var id = setInterval(function () {
        var r = 2 * Math.PI * i / 25 + 1.57;
        var x = 3 * Math.cos(r);
        var y = 3 * Math.sin(r);
        var bullet = new _bullets.greenBullet(x, y, _this4.game);
        bullet.shoot(_this4.enemy.x, _this4.enemy.y);
        _this4.game.enemyBullets.push(bullet);
        i += 1;
        if (i >= 80 || _this4.health <= 0) {
          clearInterval(id);
        }
      }, 20);
    }
  }, {
    key: 'multipleCircleAttack',
    value: function multipleCircleAttack() {
      var _this5 = this;

      var j = 0;
      var id = setInterval(function () {
        for (var i = 0; i < 50; i++) {
          var r = 2 * Math.PI * i / 50 + j / 50 * Math.PI;
          var x = 3 * Math.cos(r);
          var y = 3 * Math.sin(r);
          var bullet = new _bullets.purpleBullet(x, y, _this5.game);
          bullet.shoot(_this5.enemy.x, _this5.enemy.y);
          _this5.game.enemyBullets.push(bullet);
        }
        j += 1;
        if (j > 3 || _this5.health <= 0) {
          clearInterval(id);
        }
      }, 400);
    }
  }, {
    key: 'outofBounds',
    value: function outofBounds() {
      if (this.enemy.x < -200 || this.enemy.x > 800 || this.enemy.y < -30 || this.enemy.y > 930) {
        return true;
      }
      return false;
    }
  }]);

  return EnemyShip;
}(_moving_object2.default);

exports.default = EnemyShip;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waveOne = waveOne;
exports.waveTwo = waveTwo;
exports.waveThree = waveThree;
exports.waveFour = waveFour;
exports.waveFive = waveFive;
exports.bossWave = bossWave;

var _aliens = __webpack_require__(2);

var _boss = __webpack_require__(7);

var _boss2 = _interopRequireDefault(_boss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function waveOne(game) {
  setTimeout(function () {
    return pinkDiagonal(650, 100, -5, 1, 'linear offset', 'single', game);
  }, 1000);
  setTimeout(function () {
    return pinkDiagonal(-50, 100, 5, 1, 'linear offset', 'single', game);
  }, 6000);
  setTimeout(function () {
    return symmetricBlue(game);
  }, 13000);
  setTimeout(function () {
    return symmetricGreen(game);
  }, 16000);
  setTimeout(function () {
    return threePink(300, 0, 0.5, 1, 'ease2', 'single', game, true);
  }, 20000);
}

function waveTwo(game) {
  setTimeout(function () {
    return pinkDiagonal(650, 200, -5, -0.5, 'linear', 'circle', game);
  }, 0);
  setTimeout(function () {
    return pinkDiagonal(-50, 300, 5, -0.5, 'linear', 'circle', game);
  }, 2500);
  setTimeout(function () {
    return purple(650, 80, 0.5, 1, 'ease', 'multiple circles', game);
  }, 7000);
  setTimeout(function () {
    return symmetricBlue(game);
  }, 9000);
  setTimeout(function () {
    return blue(450, 0, 0.5, 1, 'ease', 'shotgun', game);
  }, 11000);
  setTimeout(function () {
    return threePink(300, -50, 0.5, 1, 'ease', 'single', game);
  }, 13000);
  setTimeout(function () {
    return threePink(300, -50, 0.5, 1, 'ease2', 'single', game, true);
  }, 13000);
}

function waveThree(game) {
  setTimeout(function () {
    return purple(-50, 80, 0.5, 1, 'ease2', 'multiple circles', game);
  }, 2000);
  setTimeout(function () {
    return blue(500, 0, 0.5, 1, 'ease2', 'shotgun', game);
  }, 5000);
  setTimeout(function () {
    return threePink(150, -50, 0.5, 1, 'ease3', 'single', game);
  }, 7000);
  setTimeout(function () {
    return threePink(450, -50, 0.5, 1, 'ease3', 'single', game);
  }, 7000);
  setTimeout(function () {
    return threePink(300, -50, 0.5, 1, 'ease2', 'single', game, true);
  }, 8000);
}

function waveFour(game) {
  setTimeout(function () {
    return pinkDiagonal(650, 400, -5, -0.5, 'linear', 'circle', game);
  }, 1000);
  setTimeout(function () {
    return pinkDiagonal(650, 300, 5, -0.5, 'linear', 'circle', game);
  }, 2500);
  setTimeout(function () {
    return pinkDiagonal(-50, 400, -5, -0.5, 'linear', 'circle', game);
  }, 5000);
  setTimeout(function () {
    return pinkDiagonal(-50, 300, 5, -0.5, 'linear', 'circle', game);
  }, 6500);
  setTimeout(function () {
    return symmetricGreen(game);
  }, 9000);
  setTimeout(function () {
    return blue(450, 0, 0.5, 1, 'ease2', 'shotgun', game);
  }, 11000);
  setTimeout(function () {
    return threePink(300, -50, 0.5, 1, 'ease', 'single', game, true);
  }, 13000);
}

function waveFive(game) {
  setTimeout(function () {
    return threePink(300, -50, 0.5, 1, 'ease2', 'single', game);
  }, 0);
  setTimeout(function () {
    return threePink(150, -50, 0.5, 1, 'ease3', 'single', game);
  }, 2000);
  setTimeout(function () {
    return threePink(450, -50, 0.5, 1, 'ease3', 'single', game);
  }, 2000);
  setTimeout(function () {
    return purple(-50, 80, 0.5, 1, 'ease2', 'multiple circles', game);
  }, 4000);
  setTimeout(function () {
    return symmetricGreen(game);
  }, 7000);
  setTimeout(function () {
    return threePink(300, -50, 0.5, 1, 'ease2', 'single', game, true);
  }, 9000);
}

function bossWave(game) {
  setTimeout(function () {
    return boss(game);
  }, 2000);
}

function boss(game) {
  var boss = new _boss2.default(0, 0, game, 10000);
  boss.initiate(300, -50);
}

function pinkDiagonal(x, y, velX, velY, move, attack, game, waveEnder) {
  var i = 0;
  var id = setInterval(function () {
    var pink = new _aliens.PinkAlien(velX, velY, game, 3, move, attack, waveEnder);
    pink.initiate(x, y);
    i += 1;
    if (i >= 10) {
      clearInterval(id);
    }
  }, 400);
}

function threePink(x, y, velX, velY, move, attack, game, waveEnder) {
  var pink1 = new _aliens.PinkAlien(velX, velY, game, 5, move, attack);
  var pink2 = new _aliens.PinkAlien(velX, velY, game, 5, move, attack);
  var pink3 = new _aliens.PinkAlien(velX, velY, game, 5, move, attack, waveEnder);
  pink1.initiate(x - 80, y);
  pink2.initiate(x, y);
  pink3.initiate(x + 80, y);
}

function purple(x, y, velX, velY, move, attack, game) {
  var purple = new _aliens.PurpleAlien(velX, velY, game, 30, move, attack);
  purple.initiate(x, y);
}

function blue(x, y, velX, velY, move, attack, game) {
  var blue = new _aliens.BlueAlien(velX, velY, game, 30, move, attack);
  var blue2 = new _aliens.BlueAlien(velX, velY, game, 30, move, attack);
  blue.initiate(x, y);
  blue2.initiate(600 - x, y);
}

function symmetricBlue(game) {
  var blue = new _aliens.BlueAlien(-0.5, 1, game, 20, 'ease', 'shotgun');
  var blue2 = new _aliens.BlueAlien(-0.5, 1, game, 20, 'ease', 'shotgun');
  blue.initiate(350, 0);
  blue2.initiate(250, 0);
}

function green(x, y, velX, velY, move, attack, game) {
  var green = new _aliens.GreenAlien(velX, velY, game, 25, move, attack);
  var green2 = new _aliens.GreenAlien(velX, velY, game, 25, move, attack);
  green.initiate(x, y);
  green2.initiate(600 - x, y);
}
function symmetricGreen(game) {
  var green = new _aliens.GreenAlien(-0.5, 1, game, 20, 'ease', 'spiral');
  var green2 = new _aliens.GreenAlien(-0.5, 1, game, 20, 'ease', 'spiral');
  green.initiate(100, 0);
  green2.initiate(500, 0);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = function () {
  function Score() {
    _classCallCheck(this, Score);

    this.scoreText = '0000000';
    this.score = 0;
    this.scoreBar = $('aside.score');
  }

  _createClass(Score, [{
    key: 'reset',
    value: function reset() {
      this.score -= 50000;
      if (this.score <= 0) this.score = 0;
      this.convertToText();
      this.scoreBar.text(this.scoreText);
    }
  }, {
    key: 'update',
    value: function update(n) {
      this.score += n;
      this.convertToText();
      this.scoreBar.text(this.scoreText);
    }
  }, {
    key: 'convertToText',
    value: function convertToText() {
      var score = String(this.score);
      while (score.length < 7) {
        score = '0' + score;
      }
      this.scoreText = score;
    }
  }]);

  return Score;
}();

exports.default = Score;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bullets = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ship = function () {
  function Ship(game) {
    _classCallCheck(this, Ship);

    this.game = game;
    this.stage = game.stage;
    this.ship = new createjs.Bitmap('assets/ship.png');
    this.ship.regX = 32;
    this.ship.regY = 32;
    this.keys = {};
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
    this.powerLevel = 0;
    this.isRespawning = false;
  }

  _createClass(Ship, [{
    key: 'initiate',
    value: function initiate() {
      this.ship.x = 300;
      this.ship.y = 820;
      this.stage.addChild(this.ship);
    }
  }, {
    key: 'outofBoundsLeft',
    value: function outofBoundsLeft() {
      if (this.ship.x < 50) return true;
    }
  }, {
    key: 'outofBoundsRight',
    value: function outofBoundsRight() {
      if (this.ship.x > 550) return true;
    }
  }, {
    key: 'outofBoundsUp',
    value: function outofBoundsUp() {
      if (this.ship.y < 50) return true;
    }
  }, {
    key: 'outofBoundsDown',
    value: function outofBoundsDown() {
      if (this.ship.y > 850) return true;
    }
  }, {
    key: 'shoot',
    value: function shoot() {
      var bullet3 = new _bullets.defaultBullet(0, -20, this.game);
      var bullet4 = new _bullets.defaultBullet(0, -20, this.game);
      this.game.bullets.push(bullet3);
      this.game.bullets.push(bullet4);
      bullet3.shoot(this.ship.x - 18, this.ship.y - 30);
      bullet4.shoot(this.ship.x - 0, this.ship.y - 30);

      if (this.powerLevel > 5) {
        var bullet1 = new _bullets.defaultBullet(-2, -20, this.game);
        var bullet2 = new _bullets.defaultBullet(2, -20, this.game);
        this.game.bullets.push(bullet1);
        this.game.bullets.push(bullet2);
        bullet1.shoot(this.ship.x - 30, this.ship.y - 10);
        bullet2.shoot(this.ship.x + 12, this.ship.y - 10);
      }
      if (this.powerLevel > 10) {
        var bullet5 = new _bullets.defaultCurveBullet(0, -20, this.game, this.game.ticker, 10);
        var bullet6 = new _bullets.defaultCurveBullet(0, -20, this.game, this.game.ticker, -5.7);
        this.game.bullets.push(bullet5);
        this.game.bullets.push(bullet6);
        bullet5.shoot(this.ship.x + 12, this.ship.y - 10);
        bullet6.shoot(this.ship.x - 30, this.ship.y - 10);
      }
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      this.keys[event.keyCode] = true;
    }
  }, {
    key: 'keyup',
    value: function keyup(event) {
      delete this.keys[event.keyCode];
    }
  }, {
    key: 'playerAction',
    value: function playerAction() {
      if (this.keys[37] && !this.outofBoundsLeft()) this.ship.x -= 4;
      if (this.keys[38] && !this.outofBoundsUp()) this.ship.y -= 4;
      if (this.keys[39] && !this.outofBoundsRight()) this.ship.x += 4;
      if (this.keys[40] && !this.outofBoundsDown()) this.ship.y += 4;
      if (this.keys[90] && this.game.ticker.getTicks() % 7 === 0) this.shoot();
    }
  }, {
    key: 'resetAnimation',
    value: function resetAnimation() {
      createjs.Tween.get(this.ship, { useTicks: true, override: true }).to({ alpha: 0.3 }, 0).wait(10).to({ alpha: 1 }, 0).wait(10).to({ alpha: 0.3 }, 0).wait(10).to({ alpha: 1 }, 0).wait(10).to({ alpha: 0.3 }, 0).wait(10).to({ alpha: 1 }, 0).wait(10).to({ alpha: 0.3 }, 0).wait(10).to({ alpha: 1 }, 0).wait(10).to({ alpha: 0.3 }, 0).wait(10).to({ alpha: 1 }, 0).wait(10).to({ alpha: 0.3 }, 0).wait(10).to({ alpha: 1 }, 0);
    }
  }]);

  return Ship;
}();

exports.default = Ship;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _enemy = __webpack_require__(3);

var _enemy2 = _interopRequireDefault(_enemy);

var _bullets = __webpack_require__(0);

var _aliens = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BULLETS = [_bullets.pinkBullet, _bullets.blueBullet, _bullets.greenBullet, _bullets.purpleBullet];

var ALIENS = [_aliens.PinkAlien, _aliens.BlueAlien, _aliens.GreenAlien, _aliens.PurpleAlien];

var Boss = function (_EnemyShip) {
  _inherits(Boss, _EnemyShip);

  function Boss(velX, velY, game, health) {
    _classCallCheck(this, Boss);

    var _this = _possibleConstructorReturn(this, (Boss.__proto__ || Object.getPrototypeOf(Boss)).call(this, velX, velY, game, health));

    _this.enemy = new createjs.Bitmap('assets/orangeAlien.png');
    _this.enemy.regX = 129;
    _this.enemy.regY = 118;
    _this.ship = _this.game.ship.ship;
    _this.isTweening = 'dead';
    _this.width = 100;
    _this.height = 100;
    return _this;
  }

  _createClass(Boss, [{
    key: 'initiate',
    value: function initiate(x, y) {
      this.enemy.x = x;
      this.enemy.y = y;
      var $health = $('footer.health');
      $health.addClass('active');
      this.stage.addChild(this.enemy);
      this.game.boss.push(this);
    }
  }, {
    key: 'move',
    value: function move() {
      var _this2 = this;

      if (this.isTweening === 'dead') {
        this.isTweening = 'reviving';
        createjs.Tween.get(this.enemy, { useTicks: true }).to({ y: 250 }, 200, createjs.Ease.backOut).call(function () {
          return _this2.isTweening = 'alive';
        });
      } else if (this.isTweening === 'alive') {
        this.isTweening = 'reviving';
        var x = Math.random() * 300 + 100;
        var attackId = Math.floor(Math.random() * 5);
        this.attackType = attackId;
        createjs.Tween.get(this.enemy, { useTicks: true }).to({ x: x }, 60, createjs.Ease.backOut).call(function () {
          return _this2.attack();
        }).wait(120).call(function () {
          return _this2.isTweening = 'alive';
        });
      }
    }
  }, {
    key: 'attack',
    value: function attack() {
      switch (this.attackType) {
        case 0:
          this.rain();
          break;
        case 1:
          this.multipleCircleAttack();
          break;
        case 2:
          this.line();
          break;
        case 3:
          this.shotgun();
          break;
        case 4:
          this.spiralAttack();
          this.burst();
          break;
      }
      if (Math.random() < 0.25) {
        var num = Math.floor(Math.random() * 4);
        var x = num < 2 ? 100 : 500;
        var alien = new ALIENS[num](0, 0, game, 10);
        alien.initiate(x, 0);
      }
    }
  }, {
    key: 'rain',
    value: function rain() {
      var _this3 = this;

      var i = 0,
          velX = -3,
          x = 600;
      if (Math.random() < 0.5) {
        velX = 3;
        x = 0;
      }
      var id = setInterval(function () {
        var bulletId = Math.floor(Math.random() * 4);
        var bullet1 = new BULLETS[bulletId](velX, 1, _this3.game);
        var bullet2 = new BULLETS[bulletId](velX, 1, _this3.game);
        var bullet3 = new BULLETS[bulletId](velX, 1, _this3.game);
        var bullet4 = new BULLETS[bulletId](velX, 1, _this3.game);
        var bullet5 = new BULLETS[bulletId](velX, 1, _this3.game);
        var bullet6 = new BULLETS[bulletId](velX, 1, _this3.game);
        bullet1.shoot(x, 250);
        bullet2.shoot(x, 350);
        bullet3.shoot(x, 450);
        bullet4.shoot(x, 550);
        bullet5.shoot(x, 650);
        bullet6.shoot(x, 750);
        _this3.game.enemyBullets.push(bullet1);
        _this3.game.enemyBullets.push(bullet2);
        _this3.game.enemyBullets.push(bullet3);
        _this3.game.enemyBullets.push(bullet4);
        _this3.game.enemyBullets.push(bullet4);
        _this3.game.enemyBullets.push(bullet5);
        _this3.game.enemyBullets.push(bullet6);
        i += 1;
        if (i > 10) {
          clearInterval(id);
        }
      }, 250);
    }
  }, {
    key: 'line',
    value: function line() {
      var _this4 = this;

      var i = 0;
      var velY = 4;
      var y = 0;
      if (Math.random() < 0.5) {
        velY = -4;
        y = 920;
      }
      var id = setInterval(function () {
        var x = Math.floor(Math.random() * 200) + 0;
        var bulletId = Math.floor(Math.random() * 4);
        var bullet1 = new BULLETS[bulletId](0, velY, _this4.game);
        var bullet2 = new BULLETS[bulletId](0, velY, _this4.game);
        var bullet3 = new BULLETS[bulletId](0, velY, _this4.game);
        var bullet4 = new BULLETS[bulletId](0, velY, _this4.game);
        bullet1.shoot(x, y);
        bullet2.shoot(x + 150, y);
        bullet3.shoot(x + 300, y);
        bullet4.shoot(x + 450, y);
        _this4.game.enemyBullets.push(bullet1);
        _this4.game.enemyBullets.push(bullet2);
        _this4.game.enemyBullets.push(bullet3);
        _this4.game.enemyBullets.push(bullet4);
        i += 1;
        if (i > 10) {
          clearInterval(id);
        }
      }, 250);
    }
  }, {
    key: 'shotgun',
    value: function shotgun() {
      var _this5 = this;

      var i = 0;
      var id = setInterval(function () {
        _this5.shotgunAttack();
        i += 1;
        if (i > 3 || _this5.health <= 0) {
          clearInterval(id);
        }
      }, 1000);
    }
  }, {
    key: 'burst',
    value: function burst() {
      var _this6 = this;

      var i = 0;
      var id = setInterval(function () {
        _this6.singleAttack();
        i += 1;
        if (i > 6) {
          clearInterval(id);
        }
      }, 300);
    }
  }]);

  return Boss;
}(_enemy2.default);

exports.default = Boss;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ship = __webpack_require__(6);

var _ship2 = _interopRequireDefault(_ship);

var _score = __webpack_require__(5);

var _score2 = _interopRequireDefault(_score);

var _level = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WAVES = [_level.waveOne, _level.waveTwo, _level.waveThree, _level.waveFour, _level.waveFive, _level.bossWave];

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.canvas = document.getElementById('canvas');
    this.stage = new createjs.Stage(this.canvas);
    this.ship = new _ship2.default(this);
    this.score = new _score2.default();
    this.explosion = this.createExplosionSprite();
    this.paused = false;
    this.isOver = false;
    this.ticker = createjs.Ticker;
    this.bullets = [];
    this.enemies = [];
    this.enemyBullets = [];
    this.otherProjectiles = [];
    this.boss = [];
    this.wave = 0;
    this.inProgress = false;
    this.bar = $('div.bar');
  }

  _createClass(Game, [{
    key: 'createExplosionSprite',
    value: function createExplosionSprite() {
      var data = {
        images: ['assets/explosion-1.png', 'assets/explosion-2.png', 'assets/explosion-3.png', 'assets/explosion-4.png', 'assets/explosion-5.png', 'assets/explosion-6.png', 'assets/explosion-7.png', 'assets/explosion4.png', 'assets/explosion5.png'],
        frames: { width: 50, height: 50, regX: 25, regY: 25, spacing: 0, margin: 0 },
        framerate: 2,
        animations: {
          still: {
            frames: [6, 7, 8, 7],
            next: "still"
          },
          explode: {
            frames: [0, 1, 2, 3, 4, 5, 6],
            next: "still"
          }
        }
      };

      var explosion = new createjs.SpriteSheet(data);
      return explosion;
    }
  }, {
    key: 'start',
    value: function start() {
      var _this = this;

      this.ship.initiate();
      document.addEventListener('DOMContentLoaded', function () {
        var $start = $('button.start');
        var $section = $('section.start');
        var $score = $('aside.score');
        var $power = $('aside.power');
        var $pause = $('section.pause');
        $('button.restart').on('click', function () {
          return location.reload();
        });
        $('button.resume').on('click', function () {
          $pause.toggleClass('paused');
          _this.paused ? _this.paused = false : _this.paused = true;
        });
        $start.on('click', function () {
          $section.addClass('playing');
          $score.addClass('active');
          $power.addClass('active');
          document.addEventListener('keydown', function (e) {
            if (e.keyCode === 27 && !_this.isOver) {
              $pause.toggleClass('paused');
              _this.paused ? _this.paused = false : _this.paused = true;
            }
          });
          _this.play();
          $start.off();
        });
      });
    }
  }, {
    key: 'findTopScores',
    value: function findTopScores(storage) {
      var scores = [];
      for (var key in storage) {
        scores.push(storage[key]);
      }
      scores = scores.sort(function (a, b) {
        if (parseInt(a) < parseInt(b)) {
          return 1;
        } else {
          return -1;
        }
      });
      return scores.slice(0, 3);
    }
  }, {
    key: 'populateRankings',
    value: function populateRankings() {
      var $ranking = $('ul.ranking');
      var topScores = this.findTopScores(localStorage);
      $ranking.empty();
      for (var i = 0; i < 3; i++) {
        var $li = $('<li>' + (i + 1) + '. ' + (topScores[i] ? topScores[i] : '') + '</li>');
        $ranking.append($li);
      }
    }
  }, {
    key: 'gameover',
    value: function gameover() {
      this.ship.isRespawning = true;
      var $score = $('span.finalscore');
      var $start = $('section.start');
      var $section = $('section.end');
      var $button = $('button.play');
      var $health = $('footer.health');
      $health.removeClass('active');
      $score.text(this.score.scoreText);
      localStorage.setItem('' + Math.random(), this.score.score);
      this.populateRankings();
      $section.addClass('active');
      $button.on('click', function () {
        location.reload();
      });
    }
  }, {
    key: 'play',
    value: function play() {
      var _this2 = this;

      this.ticker.framerate = 60;
      this.ticker.addEventListener('tick', function () {
        if (!_this2.paused) {
          if (!_this2.inProgress) {
            _this2.inProgress = true;
            WAVES[_this2.wave](_this2);
            if (_this2.wave < 5) _this2.wave += 1;
          }
          if (_this2.isOver) {
            _this2.stage.removeAllChildren();
            _this2.ticker.removeAllEventListeners();
            _this2.stage.clear();
            setTimeout(function () {
              return _this2.gameover();
            }, 200);
            return;
          }
          _this2.ship.playerAction();
          _this2.moveBoss();
          _this2.moveBullets();
          _this2.moveEnemies();
          _this2.moveEnemyBullets();
          _this2.moveOther();
          _this2.stage.update();
        }
      });
    }
  }, {
    key: 'moveBullets',
    value: function moveBullets() {
      var _this3 = this;

      this.bullets.forEach(function (bullet, idx) {
        if (bullet.move() || _this3.hitEnemy(bullet)) {
          _this3.bullets.splice(idx, 1);
        }
        _this3.hitBoss(bullet);
      });
    }
  }, {
    key: 'moveBoss',
    value: function moveBoss() {
      this.boss.forEach(function (b) {
        return b.move();
      });
    }
  }, {
    key: 'hitBoss',
    value: function hitBoss(bullet) {
      var _this4 = this;

      if (this.boss[0] === undefined) return;
      this.bar.css('width', this.boss[0].health / 100 + '%');
      if (bullet.hitEnemy(this.boss[0])) {
        this.boss = [];
        this.enemies.forEach(function (enemy) {
          _this4.explode(enemy.enemy.x, enemy.enemy.y);
          _this4.stage.removeChild(enemy.enemy);
        });
        this.enemyBullets.forEach(function (bullet) {
          _this4.explode(bullet.bullet.x, bullet.bullet.y);
          _this4.stage.removeChild(bullet.bullet);
        });
        this.enemyBullets = [];
        this.enemies = [];
        setTimeout(function () {
          return _this4.isOver = true;
        }, 2000);
      }
    }
  }, {
    key: 'hitEnemy',
    value: function hitEnemy(bullet) {
      var _this5 = this;

      return this.enemies.some(function (enemy, idx) {
        if (bullet.hitEnemy(enemy)) {
          _this5.enemies.splice(idx, 1);
          return true;
        }
      });
    }
  }, {
    key: 'hitPlayer',
    value: function hitPlayer(bullet) {
      return bullet.hitPlayer(this.ship);
    }
  }, {
    key: 'collideWithPlayer',
    value: function collideWithPlayer(enemy) {
      return enemy.collideWithPlayer(this.ship);
    }
  }, {
    key: 'pickUpItem',
    value: function pickUpItem(item) {
      return item.pickUpItem(this.ship);
    }
  }, {
    key: 'moveEnemyBullets',
    value: function moveEnemyBullets() {
      var _this6 = this;

      this.enemyBullets.forEach(function (bullet, idx) {
        if (bullet.move()) {
          _this6.enemyBullets.splice(idx, 1);
        } else if (_this6.hitPlayer(bullet)) {
          _this6.resetPlayer();
        }
      });
    }
  }, {
    key: 'moveEnemies',
    value: function moveEnemies() {
      var _this7 = this;

      this.enemies.forEach(function (enemy, idx) {
        if (enemy.move()) {
          _this7.enemies.splice(idx, 1);
        } else if (_this7.collideWithPlayer(enemy)) {
          _this7.resetPlayer();
        }
      });
    }
  }, {
    key: 'moveOther',
    value: function moveOther() {
      var _this8 = this;

      this.otherProjectiles.forEach(function (item, idx) {
        if (item.move() || _this8.pickUpItem(item)) {
          _this8.otherProjectiles.splice(idx, 1);
        }
      });
    }
  }, {
    key: 'resetPlayer',
    value: function resetPlayer() {
      var _this9 = this;

      this.score.reset();
      this.explode(this.ship.ship.x, this.ship.ship.y);
      this.ship.isRespawning = true;
      setTimeout(function () {
        return _this9.ship.isRespawning = false;
      }, 2000);
      this.ship.initiate();
      this.ship.resetAnimation();
    }
  }, {
    key: 'explode',
    value: function explode(x, y) {
      var _this10 = this;

      var explosion = new createjs.Sprite(this.explosion, "explode");
      explosion.x = x;
      explosion.y = y;
      this.stage.addChild(explosion);
      setTimeout(function () {
        return _this10.stage.removeChild(explosion);
      }, 300);
    }
  }]);

  return Game;
}();

var game = new Game();
game.start();
window.game = game;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PowerUp = function () {
  function PowerUp(game) {
    _classCallCheck(this, PowerUp);

    this.game = game;
    this.powerup = new createjs.Bitmap('assets/powerup.png');
    this.isTweening = 'dead';
    this.power = $('aside.power');
  }

  _createClass(PowerUp, [{
    key: 'drop',
    value: function drop(x, y) {
      this.powerup.x = x;
      this.powerup.y = y;
      this.game.stage.addChild(this.powerup);
      this.game.otherProjectiles.push(this);
    }
  }, {
    key: 'convertToText',
    value: function convertToText(power) {
      this.power.text('Power Level: ' + power);
    }
  }, {
    key: 'pickUpItem',
    value: function pickUpItem(ship) {
      var x = Math.abs(ship.ship.x - this.powerup.x);
      var y = Math.abs(ship.ship.y - this.powerup.y);
      if (x < 30 && y < 30) {
        this.game.stage.removeChild(this.powerup);
        this.game.score.update(5000);
        ship.powerLevel += 1;
        this.convertToText(ship.powerLevel);
        return true;
      }
      return false;
    }
  }, {
    key: 'move',
    value: function move() {
      var _this = this;

      if (this.isTweening == 'dead') {
        this.isTweening = 'reviving';
        createjs.Tween.get(this.powerup).to({ y: this.powerup.y - 50 }, 600, createjs.Ease.getPowOut(2.1)).to({ y: this.powerup.y }, 600, createjs.Ease.getPowIn(2.1)).call(function () {
          _this.isTweening = 'alive';;
        });
      } else if (this.isTweening === 'alive') {
        this.powerup.y += 3;
      }

      if (this.outofBounds()) {
        this.game.stage.removeChild(this.powerup);
        return true;
      }
      return false;
    }
  }, {
    key: 'outofBounds',
    value: function outofBounds() {
      if (this.powerup.x < -200 || this.powerup.x > 800 || this.powerup.y < -100 || this.powerup.y > 930) {
        return true;
      }
      return false;
    }
  }]);

  return PowerUp;
}();

exports.default = PowerUp;

/***/ })
/******/ ]);