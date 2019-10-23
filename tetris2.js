var speed = 5;
var accelerate = 1;
var delay;
var x = 4;
var y = 0;
var timer;
var bsize = 30;
var height;
var width;
var score = 0;

                                                                 //even numbers are falling figures not even are static figures
var canvas;

var field =
[
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
[0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0],
[3,3,3,3,3,3,3,3,3],
];



function start()
{

   	
   	delay = speed;
  	timer = 1;

	field[y][x] = 2;

	canvas = document.getElementById("2d");
	width = canvas.scrollWidth;
	height = canvas.scrollHeight;
	setInterval(update, 10);
	canvas.requestAnimationFrame(update);

	
}

function keyd(e)
{
	switch (e.keyCode)
	 {
		case 39:
		//add check for wall

			if(x > 7 || field[y][x+1] == 1)
			{
			
			}
			else
			{
				field[y][x] = 0;
				x++;
				field[y][x] = 2;
			}
			break;
		case 37:
			
			if(x < 1 || field[y][x-1] == 1)
			{
			
			}
			else
			{
				field[y][x] = 0;
				x--;
				field[y][x] = 2;
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

function movedown()
{
	for(var j = 17; j>0; j--)
   	{
   		for(var i = 0; i<9; i++)	 
   	 	{
   	 		 var prev;
   	 		 //if(field[j][i] != 2 && field[j-1][i] != 2)
   	 		 //{	
   	 		 		prev  = field[j][i];
   	 		 		field[j][i] = field[j-1][i];
   	 		 		field[j-1][i] = prev;
   	 		 //}	
   	 	}
   	}
 



}


function update()
{

var ctx = canvas.getContext("2d");
ctx.clearRect(0,0,width,height); // clear canvas

	ctx.fillStyle = "rgb(200,0,0)";	

	if(timer <= 0 )
	{

		if(field[y+1][x] == 3)
		{
		field[y][x] = 1;
		x = 4;
		y = 0;
		field[y][x] = 2;
		}

		if(field[y+1][x] == 1)
		{
		field[y][x] = 1;
		x = 4;
		y = 0;
		field[y][x] = 2;
		}
		else
		{
		field[y][x] = 0;
		field[y+1][x] = 2;
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
   			if(field[j][i] == 1)
   			{	
   				
				c++;
				if(c == 9)
				{
					score++;
					for(var k = 0; k<9; k++)
					{
						field[j][k] = 0;
						

					}
					movedown();	 
   	 			
						
				}
			}
			
		}
		c = 0;
   }

	for(var j = 0; j<19; j++)
   
   {
   		for(var i = 0; i<9; i++)	 
   	 	{
   			if(field[j][i] == 1 || field[j][i] == 2)
   			{	
   				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			//ctx.fillText(field[j][i], 20*i, 50*j);
		
		}
   }
   ctx.fillText("Score: " + score, 200, 500);

	canvas.requestAnimationFrame(update);	
}

addEventListener("keydown", keyd, false);
addEventListener("keyup", keyu, false);
