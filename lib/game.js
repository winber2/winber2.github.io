
  let canvas = document.getElementById('canvas')
  let stage = new createjs.Stage(canvas);
  let circle = new createjs.Shape();
  let ship = new createjs.Bitmap('assets/ship.png')

  var shape = new createjs.Shape();
  shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
  // stage.addChild(shape);

  circle.graphics.beginFill('blue').drawCircle(0,0,50)
  circle.x = circle.y = 50;
  // stage.addChild(circle);
  stage.addChild(ship)
  setTimeout( () => stage.update(), 100);
