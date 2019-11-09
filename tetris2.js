
var level = 0;
var rot = 0;
var fi;
var over = false;
var speed = 100;
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
var next;
var figures = [2,4,6,8,10,12,14];
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




function shape_O(s,rot)
{
	//0//4//5

	var num;
	
	if(s == 'fall')
	{
	 num = 4;
	}
	if(s == 'block')
	{
	 num = 5;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
	
		over = true;
	}

	
	
	field[y][x] =  num;
	field[y][x+1] =  num;
	field[y+1][x] =  num;
	field[y+1][x+1] =  num;		
	
}
function shape_J(s,rot)
{
	//0//12//13




	var num;
	
	if(s == 'fall')
	{
	 num = 12;
	}
	if(s == 'block')
	{
	 num = 13;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
		over = true;
	}
	switch(rot)
	{	
		case 0:
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+2][x-1] = num;
		break;
		case 1:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y-1][x+2] = num;
		break;
		case 2:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y+1][x+2] = num;
		break;
		case 3:
		field[y][x] = num;
		field[y][x-1] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		break;

	}
	
}
function shape_L(s,rot)
{
	
	var num;
	
	if(s == 'fall')
	{
	 num = 2;
	}
	if(s == 'block')
	{
	 num = 1;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
		over = true;
	}


	switch(rot)
	{	case 0:
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+2][x+1] = num;
		break;
		case 1:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y-1][x+2] = num;
		break;
		case 2:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y+1][x+2] = num;
		break;
		case 3:
		field[y][x] = num;
		field[y][x-1] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		break;
	}
	
}
function shape_I(s,rot)
{
	var num;
	
	if(s == 'fall')
	{
	 num = 6;
	}
	if(s == 'block')
	{
	 num = 7;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
		over = true;
	}
	switch(rot)
	{	
		case 0:
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+3][x] = num;
		break;
		case 1:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y][x+3] = num;
		break;
		
	}

	
}
function shape_S(s,rot)
{

	var num;
	
	if(s == 'fall')
	{
	 num = 10;
	}
	if(s == 'block')
	{
	 num = 11;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
		over = true;
	}
	
	switch(rot)
	{
		case 0:
		field[y][x] = num;
		field[y][x-1] = num;
		field[y+1][x-1] = num;
		field[y+1][x-2] = num;
		break;
		case 1:
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+1][x-1] = num;
		field[y+2][x-1] = num;	///fix and collide fix pls
		break;
	}		
}
function shape_Z(s,rot)
{


	var num;
	
	if(s == 'fall')
	{
	 num = 8;
	}
	if(s == 'block')
	{
	 num = 9;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
		over = true;
	
	}

	

	switch(rot)
	{
		case 0:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y+1][x+1] = num;
		field[y+1][x+2] = num;
		break;
		case 1:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y+1][x+1] = num;
		field[y-1][x] = num;
		break;
	}


	
}
function shape_T(s,rot)
{

	var num;
	
	if(s == 'fall')
	{
	 num = 14;
	}
	if(s == 'block')
	{
	 num = 15;	
	}
	if(s == 'air')
	{
	 num = 0;	
	}
	if(field[0][0] % 2 == 1 || field[0][1] % 2 == 1 || field[0][2] % 2 == 1 || field[0][3] % 2 == 1 || field[0][4] % 2 == 1 || field[0][5] % 2 == 1 || field[0][6] % 2 == 1 || field[0][7] % 2 == 1 || field[0][8] % 2 == 1)
	{
		over = true;
	}
	 	
	switch(rot)
	{
		case 0:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y+1][x+1] = num;
		break;
		case 1:
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+1][x+1] = num;
		break;
		case 2:
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y-1][x+1] = num;
		break;
		case 3:
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+1][x-1] = num;
		break;
	}


	
}
function Next()
{
	rot = 0;
	x = 4;
	y = 0;

	switch(next)
	{
		case 2:	
  		shape_L('fall',0);
		break;
		case 4:
		shape_O('fall',0);
		break;
		case 6:
		shape_I('fall',0);
		break;
		case 8:
		shape_Z('fall',0);
		break;
		case 10:
		shape_S('fall',0);
		break;
		case 12:
		shape_J('fall',0);
		break;
		case 14:
		shape_T('fall',0);
		break;
	}
	next = figures[randomFigure()];




}

function start()
{

   	
   	delay = speed;
  	timer = 1;


  	field[y][x] = figures[randomFigure()];
  	next = figures[randomFigure()];
  	switch(field[y][x])
  	{

  		case 2:	
  		shape_L('fall',0);
		break;
		case 4:
		shape_O('fall',0);
		break;
		case 6:
		shape_I('fall',0);
		break;
		case 8:
		shape_Z('fall',0);
		break;
		case 10:
		shape_S('fall',0);
		break;
		case 12:
		shape_J('fall',0);
		break;
		case 14:
		shape_T('fall',0);
		break;
	
	}
	canvas = document.getElementById("2d");
	width = canvas.scrollWidth;
	height = canvas.scrollHeight;
	setInterval(update, 10);
	canvas.requestAnimationFrame(update);

	
}
function randomFigure()
{

	var rand =	Math.random() * 6;
	return rand.toFixed();
}


function keyd(e)
{
	switch (e.keyCode)
	 {
		case 39:
		//add check for wall
			switch(fi)
			{

				case 2:
				if((rot == 0 && (x > 6  || field[y+2][x+2]%2 == 1 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1))
				|| (rot == 1 && (x > 6  || field[y+2][x+2]%2 == 1 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1))
				|| (rot == 2 && (x > 6  || field[y+2][x+2]%2 == 1 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1))
				|| (rot == 3 && (x > 6  || field[y+2][x+2]%2 == 1 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1))) 
				{
					
				}
				else
				{
					shape_L('air',rot);
					x++;
					shape_L('fall',rot);
					
				}
				break;
				
				case 4:
				if(x > 6 || field[y][x+2]%2 == 1 || field[y+1][x+2]%2 == 1) //7
				{
					
				}
				else
				{
					shape_O('air',rot);
					x++;
					shape_O('fall',rot);
				}
				break;

				case 6:
				if((rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1 || field[y+3][x+1]%2 == 1)) 
					|| (rot == 1 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1 || field[y+3][x+1]%2 == 1))) 
				{
					
				}
				else
				{
					shape_I('air',rot);
					x++;
					shape_I('fall',rot);
				}
				break;


				case 8:
				if((rot == 0 && (x > 5 || field[y][x+1]%2 == 1 || field[y+1][x+3]%2 == 1)) 
					|| (rot == 0 && (x > 5 || field[y][x+1]%2 == 1 || field[y+1][x+3]%2 == 1)))
				{
					
				}
				else
				{
					shape_Z('air',rot);
					x++;
					shape_Z('fall',rot);
				}
				break;


				case 10:
				if((rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x]%2 == 1))
				|| (rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x]%2 == 1))) 
				{
					
				}
				else
				{
					shape_S('air',rot);
					x++;
					shape_S('fall',rot);
				}
				break;

				case 12:
				if ((rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1))
					||(rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1))
					||(rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1))
					||(rot == 0 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1))) 
				{
					
				}
				else
				{
					shape_J('air',rot);
					x++;
					shape_J('fall',rot);
				}
				break;

				case 14:
				if((rot == 0 &&(x > 5 || field[y][x+3]%2 == 1 || field[y+1][x+2]%2 == 1))
				|| (rot == 0 &&(x > 5 || field[y][x+3]%2 == 1 || field[y+1][x+2]%2 == 1))
				|| (rot == 0 &&(x > 5 || field[y][x+3]%2 == 1 || field[y+1][x+2]%2 == 1))
				|| (rot == 0 &&(x > 5 || field[y][x+3]%2 == 1 || field[y+1][x+2]%2 == 1)))	
				{
					
				}
				else
				{
					shape_T('air',rot);
					x++;
					shape_T('fall',rot);
				}
				break;

			
			}
			break;
		case 37:
			switch(fi)
			{

				case 2:
				if((rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1)) 
				||(rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1))
				||(rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1))
				||(rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1)))
				{
			
				}
				else
				{
					shape_L('air',rot);
					x--;
					shape_L('fall',rot);
				}
				break;

				case 4:
				if(x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 )
				{
			
				}
				else
				{
					shape_O('air',rot);
					x--;
					shape_O('fall',rot);
				}
				break;

				case 6:
				if((rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1 || field[y+3][x-1]%2 == 1))
				|| (rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1 || field[y+3][x-1]%2 == 1)))
				{
			
				}
				else
				{
					shape_I('air',rot);
					x--;
					shape_I('fall',rot);
				}
				break;

				case 8:
				if((rot == 0 && (x < 1 || field[y][x+1]%2 == 1 || field[y+1][x]%2 == 1))
				|| (rot == 0 && (x < 1 || field[y][x+1]%2 == 1 || field[y+1][x]%2 == 1))) 	
				{
			
				}
				else
				{
					shape_Z('air',rot);
					x--;
					shape_Z('fall',rot);
				}
				break;


				case 10:
				if((rot == 0 && (x < 3 || field[y][x-1]%2 == 1 || field[y+1][x-3]%2 == 1))
				|| (rot == 0 && (x < 3 || field[y][x-1]%2 == 1 || field[y+1][x-3]%2 == 1)))
				{
			
				}
				else
				{
					shape_S('air',rot);
					x--;
					shape_S('fall',rot);
				}
				break;


				case 12:
				if((rot == 0 && (x < 2 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-2]%2 == 1))
				|| (rot == 0 && (x < 2 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-2]%2 == 1))
				|| (rot == 0 && (x < 2 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-2]%2 == 1))
				|| (rot == 0 && (x < 2 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-2]%2 == 1)))	
				{
			
				}
				else
				{
					shape_J('air',rot);
					x--;
					shape_J('fall',rot);
				}
				break;


				case 14:
				if((rot == 0 && (x < 1 || field[y][x-2]%2 == 1 || field[y+1][x-1]%2 == 1))
				||(rot == 0 && (x < 1 || field[y][x-2]%2 == 1 || field[y+1][x-1]%2 == 1))
				||(rot == 0 && (x < 1 || field[y][x-2]%2 == 1 || field[y+1][x-1]%2 == 1))
				||(rot == 0 && (x < 1 || field[y][x-2]%2 == 1 || field[y+1][x-1]%2 == 1)))	
				{
			
				}
				else
				{
					shape_T('air',rot);
					x--;
					shape_T('fall',rot);
				}
				break;
			}
			break;


		case 38:
			switch(fi)
			{

				case 2:
				
				shape_L('air',rot);
				if(rot == 3)
				{
					rot = 0;
					shape_L('fall',rot);
				}
				else
				{
					rot++;
					shape_L('fall',rot);	

				}
				break;

				case 4:
				rot = 0;
				break;

				case 6:
				shape_I('air',rot);
				if(rot == 1)
				{
					rot = 0;
					shape_I('fall',rot);
				}
				else
				{
					rot++;
					shape_I('fall',rot);	
				}
				break;

				case 8:
				shape_Z('air',rot);
				if(rot == 1)
				{
					rot = 0;
					shape_Z('fall',rot);
				}
				else
				{
					rot ++;
					shape_Z('fall',rot);	
				}
				break;

				case 10:
				shape_S('air',rot);
				if(rot == 1)
				{
					rot = 0;
					shape_S('fall',rot);
				}
				else
				{
					rot ++;
					shape_S('fall',rot);	
				}
				break;

				case 12:
				shape_J('air',rot);
				if(rot == 3)
				{
					rot = 0;
					shape_J('fall',rot);
				}
				else
				{
					rot ++;
					shape_J('fall',rot);	
				}
				break;

				case 14:
				shape_T('air',rot);
				if(rot == 3)
				{
					rot = 0;
					shape_T('fall',rot);
				}
				else
				{
					rot ++;
					shape_T('fall',rot);	
				}
				break;
			}
			
		break;

		case 40:

			delay = accelerate;
			timer = delay;
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
/*
function movedown()									/// сделать сдвиг относительно заполнения а не последней строки
{
	for(var j = 17; j>0; j--)
   	{
   		for(var i = 0; i<9; i++)	 
   	 	{
   	 		 var prev;	
   	 		 prev  = field[j][i];
   	 		 field[j][i] = field[j-1][i];
   	 		 field[j-1][i] = prev;	 	
   	 	}
   	}
 
}
*/
/*
function movedown()									/// сделать сдвиг относительно заполнения а не последней строки
{
	for(var j = 17; j>0; j--)
   	{
   		for(var i = 0; i<9; i++)	 
   	 	{
   	 		 var prev;	
   	 		 prev  = field[j][i];
   	 		 if(field[j+1][i] == 3)
   	 		 {


   	 		 }
   	 		 else
   	 		 {

   	 		 	field[j+1][i] = prev;

   	 		 }
   	 		 //field[j][i] = field[j-1][i];
   	 		 //field[j-1][i] = prev;	 	
   	 	}
   	}
 
}
*/
function movedown(str)									/// сделать сдвиг относительно заполнения а не последней строки
{

	for(var k = str; k > 0; k--)
   	{
   		for(var i = 0; i<9; i++)	 
   	 	{

   	 		 
   	 		 if(field[k][i] == 3 || field[k-1][i]%2 == 0 )
   	 		 {


   	 		 }
   	 		 else
   	 		 {
   	 		 	var prev;	
   	 		 	prev  = field[k][i];
   	 		 	field[k][i] = field[k-1][i];
   	 		 	field[k-1][i] = prev;

   	 		 }
   	 	}
   	 }		 	
   	 	
   	
 
}
function update()
{
//alert(randomFigure());
var ctx = canvas.getContext("2d");
ctx.clearRect(0,0,width,height); // clear canvas
fi = field[y][x];


if(over == true)
{
	 ctx.fillText("Score: " + score, 200, 300);
	  ctx.fillText("Level: " + level, 200, 400);
	   ctx.fillText("Game Over", 200, 500);

}
else
{
	



if(timer <= 0 )
	{

		switch(fi)
		{
		case 2: 
		if(((rot == 0 ) && (field[y+3][x] % 2 == 1 || field[y+3][x+1] % 2 == 1 || field[y+3][x+1] % 2 == 1)) 
			|| ((rot == 1 ) && (field[y+1][x] % 2 == 1 || field[y+1][x+1] % 2 == 1 || field[y][x+2] % 2 == 1))
			|| ((rot == 2 ) && (field[y+1][x] % 2 == 1 || field[y+1][x+2] % 2 == 1 || field[y+1][x+3] % 2 == 1))
			|| ((rot == 3 ) && (field[y+3][x] % 2 == 1 || field[y][x] % 2 == 1 )))
		{
		shape_L('block',rot);
		Next();  ///		при спавне фигуры проверять начальные коооордыыыы !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! сделать переменную под вин/ не вин
		}
		else
		{
		shape_L('air',rot);
		y++;
		shape_L('fall',rot)
		}
		timer = delay;
		break;

		case 4:

		if(field[y+2][x] % 2 == 1 || field[y+2][x+1] % 2 == 1)
		{
			shape_O('block',rot);
			Next();
		}
		else
		{
		
			shape_O('air',rot);
	
			y++; /////

			shape_O('fall',rot);
		}
		timer = delay;
		break;

		case 6:

		if((rot == 0 && field[y+4][x] % 2 == 1)
			||(rot == 1 && (field[y+1][x] % 2 == 1 || field[y+1][x+1] % 2 == 1  || field[y+1][x+2] % 2 == 1  || field[y+1][x+3] % 2 == 1 )))
		{
			shape_I('block',rot);	
			Next();
		}
		else
		{
		
		shape_I('air',rot);
		y++;
		shape_I('fall',rot);
		}
		timer = delay;
		break;

		case 8:

		if (((rot == 0) && (field[y+1][x] % 2 == 1 || field[y+2][x+1] % 2 == 1 ||  field[y+2][x+2] % 2 == 1 )) 
			|| ((rot == 1) && (field[y][x] % 2 == 1 || field[y+2][x+1] % 2 == 1 )))
		{
		shape_Z('block',rot);
		Next();
		}
		else
		{
		shape_Z('air',rot);

		y++;

		shape_Z('fall',rot);
		}
		timer = delay;
		break;

		case 10:

		if(((rot == 0) && (field[y+2][x-2] % 2 == 1 || field[y+2][x-1] % 2 == 1 || field[y+1][x] % 2 == 1))
		|| ((rot == 1) && (field[y+2][x] % 2 == 1 || field[y+3][x+1] % 2 == 1)))

		{
		shape_S('block',rot);
		Next();
		}
		else
		{
		shape_S('air',rot);

		y++;

		shape_S('fall',rot);
		}
		timer = delay;
		break;

		case 12:

		if(((rot == 0) && (field[y+3][x] % 2 == 1 || field[y+3][x-1] % 2 == 1))
		 || ((rot == 1) && (field[y+1][x] % 2 == 1 || field[y+1][x+1] % 2 == 1 || field[y+1][x+2] % 2 == 1)) 
			|| ((rot == 2) && (field[y+2][x+2] % 2 == 1))
			|| ((rot == 3) && (field[y+3][x] % 2 == 1)))
		{
		shape_J('block',rot);
		Next();
		}
		else
		{
		shape_J('air',rot);

		y++;

		shape_J('fall',rot);

		}
		timer = delay;
		break;

		case 14:

		if(((rot == 0) && (field[y+1][x] % 2 == 1 || field[y+2][x+1] % 2 == 1 || field[y+1][x+2] % 2 == 1)) 
			|| ((rot == 1) && (field[y+3][x] % 2 == 1 || field[y+2][x+1] % 2 == 1))
			|| ((rot == 2) && (field[y+1][x] % 2 == 1 || field[y+1][x+1] % 2 == 1 || field[y+1][x+2] % 2 == 1))
			|| ((rot == 3) && (field[y+3][x] % 2 == 1 || field[y+2][x-1] % 2 == 1)))
		{
		shape_T('block',rot);
		
		Next();
		}

		else
		{
		shape_T('air',rot);
		y++;
		shape_T('fall',rot);
		}
		timer = delay;
		break;
		}
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
   			if(field[j][i]%2 == 1)
   			{	
   				
				c++;
				if(c == 9)
				{
					score++;

					if(score % 2 == 0  && speed > 1)
					{
						level++;
						speed -= 1;
					}

					for(var k = 0; k<9; k++)
					{
						field[j][k] = 0;
					}
					movedown(j);	
				}
			}
			
		}
		c = 0;
   }
   if(/Android|AppleWebKit|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
   {
   		ctx.fillStyle = "rgb(161, 108, 59)";				
		ctx.fillRect(0,600,50,50);
		ctx.fillStyle = "rgb(0, 0, 0)";	
		ctx.fillText('left',0,630);	
   		
   		ctx.fillStyle = "rgb(161, 108, 59)";				
		ctx.fillRect(100,600,50,50);
		ctx.fillStyle = "rgb(0, 0, 0)";	
		ctx.fillText('right',100,630);

		ctx.fillStyle = "rgb(161, 108, 59)";				
		ctx.fillRect(200,600,120,50);
		ctx.fillStyle = "rgb(0, 0, 0)";	
		ctx.fillText('accelerate',200,630);

		ctx.fillStyle = "rgb(161, 108, 59)";				
		ctx.fillRect(350,600,65,50);
		ctx.fillStyle = "rgb(0, 0, 0)";	
		ctx.fillText('rotate',350,630);

   }

	for(var j = 0; j<19; j++)
   
   {
   		for(var i = 0; i<9; i++)	 
   	 	{
   	 		/*
   			if(field[j][i] == 0)
   			{	
   				ctx.fillStyle = "rgb(0,0,0)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			*/

   			if(field[j][i] == 1 || field[j][i] == 2)
   			{	
   				ctx.fillStyle = "rgb(200,0,0)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			if(field[j][i] == 4 || field[j][i] == 5)
   			{	
   				ctx.fillStyle = "rgb(0,200,0)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			if(field[j][i] == 6 || field[j][i] == 7)
   			{	
   				ctx.fillStyle = "rgb(0,0,200)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}

			if(field[j][i] == 8 || field[j][i] == 9)
   			{	
   				ctx.fillStyle = "rgb(32, 178, 170)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			if(field[j][i] == 10 || field[j][i] == 11)
   			{	
   				ctx.fillStyle = "rgb(178, 32, 170)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}

			if(field[j][i] == 12 || field[j][i] == 13)
   			{	
   				ctx.fillStyle = "rgb(178, 170, 32)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
			if(field[j][i] == 14 || field[j][i] == 15)
   			{	
   				ctx.fillStyle = "rgb(64, 64, 0)";				
				ctx.fillRect(i*bsize,j*bsize,bsize,bsize);
			}
		//	ctx.fillText(field[j][i], 20*i, 50*j);
		}
		ctx.font="20px Georgia";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText('Next:',500,80);
		if(next == 2)
		{
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fillRect(500,100,bsize,bsize);
			ctx.fillRect(500,100+bsize,bsize,bsize);
			ctx.fillRect(500,100+bsize+bsize,bsize,bsize);
			ctx.fillRect(500+bsize,100+bsize+bsize,bsize,bsize);
		}
		if(next == 4)
		{
			ctx.fillStyle = "rgb(0,200,0)";
			ctx.fillRect(500,100,bsize,bsize);
			ctx.fillRect(500,100+bsize,bsize,bsize);
			ctx.fillRect(500+bsize,100,bsize,bsize);
			ctx.fillRect(500+bsize,100+bsize,bsize,bsize);
		}
		if(next == 6)
		{
			ctx.fillStyle = "rgb(0,0,200)";
			ctx.fillRect(500,100,bsize,bsize);
			ctx.fillRect(500,100+bsize,bsize,bsize);
			ctx.fillRect(500,100+bsize*2,bsize,bsize);
			ctx.fillRect(500,100+bsize*3,bsize,bsize);
		}
		if(next == 8)
		{
			ctx.fillStyle = "rgb(32, 178, 170)";
			ctx.fillRect(500,100,bsize,bsize);
			ctx.fillRect(500+bsize,100,bsize,bsize);
			ctx.fillRect(500+bsize,100+bsize,bsize,bsize);
			ctx.fillRect(500+bsize*2,100+bsize,bsize,bsize);
		}
		if(next == 10)
		{
			ctx.fillStyle = "rgb(178, 32, 170)";
			ctx.fillRect(500,100,bsize,bsize);
			ctx.fillRect(500+bsize,100,bsize,bsize);
			ctx.fillRect(500+bsize,100+bsize,bsize,bsize);
			ctx.fillRect(500+bsize*2,100+bsize,bsize,bsize);
		}
		if(next == 12)
		{
			ctx.fillStyle = "rgb(178, 170, 32)";	
			ctx.fillRect(500,100,bsize,bsize);
			ctx.fillRect(500,100+bsize,bsize,bsize);
			ctx.fillRect(500,100+bsize+bsize,bsize,bsize);
			ctx.fillRect(500-bsize,100+bsize+bsize,bsize,bsize);
		}

		if(next == 14)
		{
			ctx.fillStyle = "rgb(32, 32, 0)";
			ctx.fillRect(500+bsize,100,bsize,bsize);
			ctx.fillRect(500+bsize*2,100,bsize,bsize);
			ctx.fillRect(500+bsize*3,100,bsize,bsize);
			ctx.fillRect(500+bsize*2,100+bsize,bsize,bsize);
		}

   }
   ctx.fillStyle = "rgb(0,0,0)";	
   ctx.fillText("Score: " + score, 200, 700);
      ctx.fillText("Level: " + level, 500, 300);
   canvas.requestAnimationFrame(update);
   }	
}
addEventListener("keydown", keyd, false);
addEventListener("keyup", keyu, false);