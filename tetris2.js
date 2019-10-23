var speed = 5;
var accelerate = 1;
var delay;
var x = 4;
var y = -1;
var timer;
var bsize = 30;
var height;
var width;
var score = 0;


var canvas;

var field =
[[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0]
];




function start()
{

	for(var j = 0; j<12; j++)
   
   {
   		for(var i = 0; i<9; i++)	 
   	 	{
   			
			field[i][j] = 0;
		}
   }
   	
   	delay = speed;
  	timer = 1;

	field[x][y] = 2;

	canvas = document.getElementById("2d");
	width = canvas.scrollWidth;
	height = canvas.scrollHeight;
	setInterval(update, 100);
	canvas.requestAnimationFrame(update);

	
}

function keyd(e)
{
	switch (e.keyCode)
	 {
		case 39:
		//add check for wall

			if(x > 7 || field[x+1][y] == 1)
			{
			
			}
			else
			{
				field[x][y] = 0;
				x++;
				field[x][y] = 2;
			}
			break;
		case 37:
			
			if(x < 1 || field[x-1][y] == 1)
			{
			
			}
			else
			{
				field[x][y] = 0;
				x--;
				field[x][y] = 2;
			}
			
			break;
			
		case 40:

			delay = accelerate;
		
			break;

		default :
			break;		
	}
}
function keyu(e)
{
	switch (e.keyCode)
	 {
		case 40:
		delay = speed;
		break;
	}

}



function update()
{

var ctx = canvas.getContext("2d");
ctx.clearRect(0,0,width,height); // clear canvas

	ctx.fillStyle = "rgb(200,0,0)";	

	if(timer <= 0 )
	{

		if(field[x][y+1] == null)
		{
		field[x][y] = 1;
		x = 4;
		y = 0;
		field[x][y] = 2;
		}

		if(field[x][y+1] == 1)
		{
		field[x][y] = 1;
		x = 4;
		y = 0;
		field[x][y] = 2;
		}
		else
		{
		field[x][y] = 0;
		field[x][y + 1] = 2;
		y++;
		}
		timer = delay;
	}
	else
	{
		timer--;
	}	

var c = 0;

	for(var j = 0; j<18; j++)
   
   {
   		for(var i = 0; i<9; i++)	 
   	 	{
   			if(field[i][j] == 1)
   			{	
   				
				c++;
				if(c == 9)
				{
					score++;
					for(var k = 0; k<9; k++)
					{
						field[k][j] = 0;
					}	 
   	 			
						
				}
			}
			
		}
		c = 0;
   }
	for(var j = 0; j<18; j++)
   
   {
   		for(var i = 0; i<9; i++)	 
   	 	{
   			if(field[i][j] == 1 || field[i][j] == 2)
   			{	
   				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			//ctx.fillText(field[i][j], 20*i, 50*j);
		}
   }
   ctx.fillText("Score: " + score, 200, 500);

	canvas.requestAnimationFrame(update);	
}
addEventListener("keydown", keyd, false);
addEventListener("keyup", keyu, false);
