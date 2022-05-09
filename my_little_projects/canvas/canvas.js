  //select the canvas element
  let canvas1 = document.getElementById('canvas1'),

      //select Context Type
      context = canvas1.getContext('2d')

  context.fillStyle = "red";
  context.fillRect(0, 0, canvas1.width, canvas1.height);


  // begin the path
  context.beginPath();


  //border styling
  context.lineWidth = 50;
  context.strokeStyle = "White";

  // begin the path
  context.beginPath();

  // starting point
  context.moveTo(200, 0);

  // select the  points
  context.lineTo(200, 400);


  // starting point
  context.moveTo(0, 200);

  // select the  points
  context.lineTo(600, 200);

  //draw the path
  context.stroke();