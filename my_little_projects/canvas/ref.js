  //select the canvas element
  let canvas1 = document.getElementById('canvas1'),

      //select Context Type
      context = canvas1.getContext('2d')

  //the gradient
  gradient = context.createLinearGradient(0, 0, 250, 0);

  //add color stops
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');

  //select the image"
  let canvimg = document.getElementById('canvimg');

  //create the pattern
  let pattern = context.createPattern(canvimg, "repeat-y");

  //choose fill style
  context.fillStyle = pattern; //color,gradient,pattern

  //draw rectangel
  context.fillRect(0, 0, canvas1.width, canvas1.height);




  // ANOTHER 




  //select the canvas element
  let canvas1 = document.getElementById('canvas1'),

      //select Context Type
      context = canvas1.getContext('2d')

  //the gradient
  gradient = context.createLinearGradient(0, 0, 250, 0);

  //add color stops
  gradient.addColorStop(0, 'red');
  gradient.addColorStop(1, 'blue');

  //context.lineWidth = 1; for context border.

  //choose fill style
  context.strokeStyle = gradient //color,gradient,pattern
      //draw rectangel
  context.strokeRect(50, 50, 200, 100);



  //set font
  context.font = "32px Tahoma";

  //create filled text
  context.fillStyle = gradient;
  context.strokeText("Hello Bodzz", 70, 110)



  // ANOTHER FOR THE PASS



  // starting point
  context.moveTo(0, 200);

  // select the  points
  context.lineTo(700, 200);

  // adjust style and line width 
  context.strokeStyle = "#00f";
  context.lineWidth = 10;





  //ANOTHER #SHAPE-DRAWING





  //select the canvas element
  let canvas1 = document.getElementById('canvas1'),

      //select Context Type
      context = canvas1.getContext('2d')

  // begin the path
  context.beginPath();

  // starting point
  context.moveTo(100, 100);

  // select the  points
  context.lineTo(100, 300);
  context.lineTo(300, 300);
  context.lineTo(400, 200);
  // 

  //close path 
  context.closePath();

  //border styling
  context.lineWidth = 8;
  context.strokeStyle = "darkred";

  //fill the shape
  //context.fillStyle = "blue";
  context.fill();


  //draw the path
  context.stroke();




  //JAPAN FLAG 




  //select the canvas element
  let canvas1 = document.getElementById('canvas1'),

      //select Context Type
      context = canvas1.getContext('2d')

  context.fillStyle = "white";
  context.fillRect(0, 0, canvas1.width, canvas1.height);


  // begin the path
  context.beginPath();


  //border styling
  context.lineWidth = 8;
  context.strokeStyle = "darkred";

  context.arc(300, 200, 150, 0, 6.28319);


  //draw the path
  context.stroke();

  //fill the shape
  context.fillStyle = "darkred";
  context.fill();