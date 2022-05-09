//select the canvas element
let canvas2 = document.getElementById('canvas2'),

    //select Context Type
    context2 = canvas2.getContext('2d')

context2.fillStyle = "white";
context2.fillRect(0, 0, canvas2.width, canvas2.height);


// begin the path
context2.beginPath();


//border styling
context2.lineWidth = 8;
context2.strokeStyle = "darkred";

context2.arc(300, 200, 150, 0, 6.28319);


//draw the path
context2.stroke();

//fill the shape
context2.fillStyle = "darkred";
context2.fill();