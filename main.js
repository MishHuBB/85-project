//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Give specific height and width to the car image
orangecar_width = 75;
orangecar_height = 100;
background_image = "parkingLot.jpg";
orangecar_image = "car_topveiw_2.png";

//Set initial position for a car image.
orangecar_x = 5;
orangecar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	orangecar_imgTag = new Image();
	orangecar_imgTag.onload = uploadorangecar;
	orangecar_imgTag.src = orangecar_image;

}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadorangecar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(orangecar_imgTag, orangecar_x, orangecar_y, orangecar_width, orangecar_height);

	
}


window.addEventListener("keydown", my_keydown);
console.log(my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(orangecar_y >=0)
{
	orangecar_y = orangecar_y - 10;
	console.log("When up arrow is pressed, x = " + orangecar_x +"| y = " +orangecar_y);
	uploadBackground();
	uploadorangecar();
}
}

function down()
{
    if(orangecar_y <=500)
    {
        orangecar_y =orangecar_y+ 10;
        console.log("When down arrow is pressed,  x = " + orangecar_x + " | y = " +orangecar_y);
        uploadBackground();
        uploadorangecar();
    }
}

function left()
{
    if(orangecar_x >= 0)
    {
        orangecar_x =orangecar_x - 10;
        console.log("When left arrow is pressed,  x = " + orangecar_x + " | y = " +orangecar_y);
        uploadBackground();
        uploadorangecar();
    }
}

function right()
{
    if(orangecar_x <= 700)
    {
        orangecar_x =orangecar_x + 10;
        console.log("When right arrow is pressed,  x = " + orangecar_x + " | y = " +orangecar_y);
        uploadBackground();
        uploadorangecar();
   }
}
    
