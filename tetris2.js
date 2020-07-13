
var level = 0;
var rot = 0;
var fi;
var over = false;
var speed = 100;
var accelerate = 1;
var delay;
var x = 4;
var y = 0;

var x1;
var y1;
var x2;
var y2;
var x3;
var y3;


var timer;
var bsize = 10;
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



var IMG_restart;
var IMG_left;
var IMG_up;
var IMG_accelerate;
var IMG_right;
var IMG_rotate;





var restx = bsize*8;
var resty = bsize*16;
var rests = bsize*4;




function check()
{
	var chk;
	if(field[x+1][y]/2 != 1  || field[x][y+1]/2 != 1 || field[x+1][y+1]/2 != 1 || field[x-1][y]/2 != 1 || field[x][y-1]/2 != 1 || field[x-1][y-1]/2 != 1 )
	{

		chk = true;

	}
	else
	if(field[x1+1][y1]/2 != 1 || field[x1][y1+1]/2 != 1 || field[x1+1][y1+1]/2 != 1 || field[x1-1][y1]/2 != 1 || field[x1][y1-1]/2 != 1 || field[x1-1][y1-1]/2 != 1)
	{

		chk = true;

	}
	else
	if(field[x2+1][y2]/2 != 1 || field[x2][y2+1/2 != 1 || field[x2+1][y2+1]/2 != 1 || field[x2-1][y2]/2 != 1 || field[x2][y2-1]/2 != 1 || field[x2-1][y2-1]/2 != 1)
	{

		chk = true;

	}
	else
	if(field[x3+1][y3]/2 != 1 || field[x3][y3+1]/2 != 1 || field[x3+1][y3+1]/2 != 1 || field[x3-1][y3]/2 != 1 || field[x3][y3-1]/2 != 1 || field[x3-1][y3-1]/2 != 1)
	{

		chk = true;

	}
	else
	{
		chk = false;
	}
	return chk;

}
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

	y1 = y;
	x1 = x+1;
	y2 = y+1;
	x2 = x;
	y3 = y+1;
	x3 = x+1;

	field[y][x] =  num;
	field[y1][x1] =  num;
	field[y2][x2] =  num;
	field[y3][y3] =  num;

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
		y1 = y+1;
		x1 = x;
		y2 = y+2;
		x2 = x;
		y3 = y+2;
		x3 = x-1;
		break;
		case 1:
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y-1;
		x3 = x+2;
		break;
		case 2:
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y+1;
		x3 = x+2;
/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y+1][x+2] = num;
		*/
		break;
		case 3:
		y1 = y;
		x1 = x-1;
		y2 = y+1;
		x2 = x;
		y3 = y+2;
		x3 = x;
		/*
		field[y][x] = num;
		field[y][x-1] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;*/
		break;

	}
	field[y][x] = num;
	field[y1][x1] = num;
	field[y2][x2] = num;
	field[y3][x3] = num;

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
		y1 = y+1;
		x1 = x;
		y2 = y+2;
		x2 = x;
		y3 = y+2;
		x3 = x+1;

		/*
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+2][x+1] = num;
		*/
		break;
		case 1:
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y-1;
		x3 = x+2;
		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y-1][x+2] = num;
		*/
		break;
		case 2:
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y+1;
		x3 = x+2;

		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y+1][x+2] = num;
		*/
		break;
		case 3:
		y1 = y;
		x1 = x-1;
		y2 = y+1;
		x2 = x;
		y3 = y+2;
		x3 = x;

		/*
		field[y][x] = num;
		field[y][x-1] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		*/
		break;
	}
	field[y][x] = num;
	field[y1][x1] = num;
	field[y2][x2] = num;
	field[y3][x3] = num;

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
		y1 = y+1;
		x1 = x;
		y2 = y+2;
		x2 = x;
		y3 = y+3;
		x3 = x;


		/*
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+3][x] = num;*/
		break;
		case 1:
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y;
		x3 = x+3;

		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y][x+3] = num;
		*/
		break;


	}

	field[y][x] = num;
	field[y1][x1] = num;
	field[y2][x2] = num;
	field[y3][x3] = num;

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
		y1 = y;
		x1 = x-1;
		y2 = y+1;
		x2 = x-1;
		y3 = y+1;
		x3 = x-2;



	/*
		field[y][x] = num;
		field[y][x-1] = num;
		field[y+1][x-1] = num;
		field[y+1][x-2] = num;
		*/
		break;
		case 1:
		y1 = y+1;
		x1 = x;
		y2 = y+1;
		x2 = x-1;
		y3 = y+2;
		x3 = x-2;
		/*
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+1][x-1] = num;
		field[y+2][x-1] = num;	///fix and collide fix pls*/
		break;
	}
	field[y][x] = num;
	field[y1][x1] = num;
	field[y2][x2] = num;
	field[y3][x3] = num;

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
		y1 = y;
		x1 = x+1;
		y2 = y+1;
		x2 = x+1;
		y3 = y+1;
		x3 = x+2;

		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y+1][x+1] = num;
		field[y+1][x+2] = num;*/
		break;
		case 1:
		y1 = y;
		x1 = x+1;
		y2 = y+1;
		x2 = x+1;
		y3 = y-1;
		x3 = x;
		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y+1][x+1] = num;
		field[y-1][x] = num;*/
		break;
	}
	field[y][x] = num;
	field[y1][x1] = num;
	field[y2][x2] = num;
	field[y3][x3] = num;




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
		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y+1][x+1] = num;*/
		break;
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y+1;
		x3 = x+1;
		case 1:
		y1 = y+1;
		x1 = x;
		y2 = y+2;
		x2 = x;
		y3 = y+1;
		x3 = x+1;
		/*
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+1][x+1] = num;*/
		break;
		case 2:
		y1 = y;
		x1 = x+1;
		y2 = y;
		x2 = x+2;
		y3 = y-1;
		x3 = x+1;
		/*
		field[y][x] = num;
		field[y][x+1] = num;
		field[y][x+2] = num;
		field[y-1][x+1] = num;*/
		break;
		case 3:
		y1 = y+1;
		x1 = x;
		y2 = y+2;
		x2 = x;
		y3 = y+1;
		x3 = x-1;
		/*
		field[y][x] = num;
		field[y+1][x] = num;
		field[y+2][x] = num;
		field[y+1][x-1] = num;*/
		break;
	}
	field[y][x] = num;
	field[y1][x1] = num;
	field[y2][x2] = num;
	field[y3][x3] = num;




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

	IMG_rotate = new Image();
	IMG_right = new Image();
	IMG_accelerate = new Image();
	IMG_left = new Image();
	IMG_restart = new Image();


	IMG_rotate.src = "img/rotate.svg";
	IMG_right.src =  "img/right.svg";
	IMG_accelerate.src = "img/accelerate.svg";
	IMG_left.src = "img/left.svg" ;
	IMG_restart.src = "img/restart.svg";







   	addEventListener("touchstart", touchButtd, false);
   	addEventListener("touchend", touchButtu, false);
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
	 canvas.width  = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;

//    canvas.width = document.documentElement.clientWidth - 10;
  //  canvas.height = document.documentElement.clientHeight;
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
function touchButtd(evt)
{

// console.log("touchstart.");

 	var tch = evt.targetTouches[0];

		if(tch.pageX > 0
			&& tch.pageX < 50
			&& tch.pageY > 600
			&& tch.pageY < 650)
		{
			window.navigator.vibrate(100);
			keyd( new KeyboardEvent('keydown', {'keyCode':37, 'which':37}));
		}

		if(tch.pageX > 100
			&& tch.pageX < 150
			&& tch.pageY > 600
			&& tch.pageY < 650)
		{
			window.navigator.vibrate(100);
			keyd( new KeyboardEvent('keydown', {'keyCode':39, 'which':39}));
		}
		if(tch.pageX > 350
			&& tch.pageX < 400
			&& tch.pageY > 600
			&& tch.pageY < 650)
		{
			window.navigator.vibrate(100);
			keyd( new KeyboardEvent('keydown', {'keyCode':38, 'which':40}));
		}

		if(tch.pageX > 200
			&& tch.pageX < 300
			&& tch.pageY > 600
			&& tch.pageY < 650)
		{
			window.navigator.vibrate(100);
			keyd( new KeyboardEvent('keydown', {'keyCode':40, 'which':40}));
		}
        if(over == true)
            {
                if(tch.pageX >  restx
			     && tch.pageX < restx + rests
                && tch.pageY > resty
                && tch.pageY < resty+rests)
		      {
			     window.navigator.vibrate(100);
			     keyd( new KeyboardEvent('keydown', {'keyCode':40, 'which':40}));
		      }
            }




}
function touchButtu(evt)
{

		   var tch = evt.changedTouches[0];
			if(tch.pageX > 200
			&& tch.pageX < 300
			&& tch.pageY > 600
			&& tch.pageY < 650)
			{
			keyu( new KeyboardEvent('keyup', {'keyCode':40, 'which':40}));
			}

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
				|| (rot == 1 && (x > 5  || field[y-1][x+3]%2 == 1 || field[y][x+3]%2 == 1))
				|| (rot == 2 && (x > 5  || field[y+1][x+3]%2 == 1 || field[y][x+3]%2 == 1))
				|| (rot == 3 && (x > 7  || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x]%2 == 1)))
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
					|| (rot == 1 && (x > 4 || field[y][x+4]%2 == 1)))
				{

				}
				else
				{
					shape_I('air',rot);
					x++;
					shape_I('fall',rot);
				}
				break;
					//сделать блокировку поворта

				case 8:
				if((rot == 0 && (x > 5 || field[y][x+1]%2 == 1 || field[y+1][x+3]%2 == 1))
					|| (rot == 1 && (x > 6 || field[y][x+2]%2 == 1 || field[y+1][x+2]%2 == 1)))
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
				|| (rot == 1 && (x > 6 || field[y][x+1]%2 == 1 || field[y+1][x]%2 == 1)))
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
					||(rot == 1 && (x > 5 || field[y][x+3]%2 == 1 || field[y-1][x+3]%2 == 1))
					||(rot == 2 && (x > 5 || field[y][x+3]%2 == 1 || field[y+1][x+3]%2 == 1))
					||(rot == 3 && (x > 7 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1)))
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
				if((rot == 0 && (x > 5 || field[y][x+3]%2 == 1 || field[y+1][x+2]%2 == 1))
				|| (rot == 1 && (x > 5 || field[y][x+2]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1))
				|| (rot == 2 && (x > 5 || field[y][x+3]%2 == 1 || field[y-1][x+2]%2 == 1))
				|| (rot == 3 && (x > 5 || field[y][x+1]%2 == 1 || field[y+1][x+1]%2 == 1 || field[y+2][x+1]%2 == 1)))
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
				||(rot == 1 && (x < 1 || field[y][x-1]%2 == 1 || field[y-1][x-1]%2 == 1))
				||(rot == 2 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x+1]%2 == 1))
				||(rot == 3 && (x < 2 || field[y][x-2]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1)))
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
				|| (rot == 1 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1)))
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
				if((rot == 0 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x]%2 == 1))
				|| (rot == 1 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y-1][x-1]%2 == 1)))
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
				|| (rot == 1 && (x < 3 || field[y][x-1]%2 == 1 || field[y+1][x-2]%2 == 1 || field[y+2][x-3]%2 == 1)))
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
				|| (rot == 1 && (x < 2 || field[y][x-1]%2 == 1 || field[y-1][x-1]%2 == 1))
				|| (rot == 2 && (x < 2 || field[y][x-1]%2 == 1 || field[y+1][x+1]%2 == 1))
				|| (rot == 3 && (x < 2 || field[y][x-1]%2 == 1 || field[y][x-1]%2 == 1 || field[y][x-2]%2 == 1)))
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
				||(rot == 1 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-1]%2 == 1 || field[y+2][x-1]%2 == 1))
				||(rot == 2 && (x < 1 || field[y][x-2]%2 == 1 || field[y-1][x-1]%2 == 1))
				||(rot == 3 && (x < 1 || field[y][x-1]%2 == 1 || field[y+1][x-2]%2 == 1 || field[y+2][x-1]%2 == 1)))
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
				if(y > 1 && x > 1)
				{
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
				}
				break;

				case 4:
				rot = 0;
				break;

				case 6:
				if(y > 1 && x > 1)
				{
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
				}
				break;

				case 8:
				if(y > 1 && x > 1)
				{
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
				}
				break;

				case 10:
				if(y > 1 && x > 1)
				{
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
				}
				break;

				case 12:
				if(y > 1 && x > 1)
				{
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
				}
				break;

				case 14:
				if(y > 1 && x > 1)
				{
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
				}
				break;
				}
				//break;
			//}

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

	 	ctx.fillText("Score: " + score, bsize*8, bsize*10);
	  	ctx.fillText("Level: " + level, bsize*8, bsize*12);
	    ctx.fillText("Game Over", bsize*8, bsize*14);
        ctx.drawImage(IMG_restart, bsize*8 , bsize*16 , bsize*4, bsize*4);
	    bsize = window.innerHeight/25;
	    ctx.font=bsize + "px Georgia";

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
		|| ((rot == 1) && (field[y+1][x] % 2 == 1 || field[y+2][x+1] % 2 == 1 )))
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
		|| ((rot == 1) && (field[y+2][x] % 2 == 1 || field[y+3][x-1] % 2 == 1)))

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
   		/*
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
		*/

		ctx.drawImage(IMG_accelerate, bsize,  bsize*19,  bsize, bsize);
		ctx.drawImage(IMG_left, bsize*2.5 , bsize*19 , bsize, bsize);
		ctx.drawImage(IMG_right, bsize*3.5 , bsize*19 , bsize, bsize);
		ctx.drawImage(IMG_rotate, bsize*4.5 , bsize*19 , bsize, bsize);





   }

	for(var j = 0; j<19; j++)

   {
   		for(var i = 0; i<9; i++)
   	 	{

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
		//move left
		var panx = bsize*10;
		var pany = bsize*3;



		ctx.font=bsize + "px Georgia";
		ctx.fillStyle = "rgb(0,0,0)";
		ctx.fillText('Next:',panx,pany-pany/2);
		if(next == 2)
		{
			ctx.fillStyle = "rgb(200,0,0)";
			ctx.fillRect(panx,pany,bsize,bsize);
			ctx.fillRect(panx,pany+bsize,bsize,bsize);
			ctx.fillRect(panx,pany+bsize+bsize,bsize,bsize);
			ctx.fillRect(panx+bsize,pany+bsize+bsize,bsize,bsize);
		}
		if(next == 4)
		{
			ctx.fillStyle = "rgb(0,200,0)";
			ctx.fillRect(panx,pany,bsize,bsize);
			ctx.fillRect(panx,pany+bsize,bsize,bsize);
			ctx.fillRect(panx+bsize,pany,bsize,bsize);
			ctx.fillRect(panx+bsize,pany+bsize,bsize,bsize);
		}
		if(next == 6)
		{
			ctx.fillStyle = "rgb(0,0,200)";
			ctx.fillRect(panx,pany,bsize,bsize);
			ctx.fillRect(panx,pany+bsize,bsize,bsize);
			ctx.fillRect(panx,pany+bsize*2,bsize,bsize);
			ctx.fillRect(panx,pany+bsize*3,bsize,bsize);
		}
		if(next == 8)
		{
			ctx.fillStyle = "rgb(32, 178, 170)";
			ctx.fillRect(panx,pany,bsize,bsize);
			ctx.fillRect(panx+bsize,pany,bsize,bsize);
			ctx.fillRect(panx+bsize,pany+bsize,bsize,bsize);
			ctx.fillRect(panx+bsize*2,pany+bsize,bsize,bsize);
		}
		if(next == 10)
		{
			ctx.fillStyle = "rgb(178, 32, 170)";
			ctx.fillRect(panx,pany,bsize,bsize);
			ctx.fillRect(panx+bsize,pany,bsize,bsize);
			ctx.fillRect(panx+bsize,pany+bsize,bsize,bsize);
			ctx.fillRect(panx+bsize*2,pany+bsize,bsize,bsize);
		}
		if(next == 12)
		{
			ctx.fillStyle = "rgb(178, 170, 32)";
			ctx.fillRect(panx,pany,bsize,bsize);
			ctx.fillRect(panx,pany+bsize,bsize,bsize);
			ctx.fillRect(panx,pany+bsize+bsize,bsize,bsize);
			ctx.fillRect(panx-bsize,pany+bsize+bsize,bsize,bsize);
		}

		if(next == 14)
		{
			ctx.fillStyle = "rgb(32, 32, 0)";
			ctx.fillRect(panx+bsize,pany,bsize,bsize);
			ctx.fillRect(panx+bsize*2,pany,bsize,bsize);
			ctx.fillRect(panx+bsize*3,pany,bsize,bsize);
			ctx.fillRect(panx+bsize*2,pany+bsize,bsize,bsize);
		}

   }
   ctx.fillStyle = "rgb(0,0,0)";
   ctx.fillText("Score: " + score, bsize*10, bsize*8);
      ctx.fillText("Level: " + level, bsize*10, bsize*10);

  	bsize = window.innerHeight/25;
   canvas.requestAnimationFrame(update);
   }
}
window.addEventListener('resize', function(){
	canvas.width  = window.innerWidth - 20;
    canvas.height = window.innerHeight - 20;
    canvas.style = "";
    width = canvas.scrollWidth;
	height = canvas.scrollHeight;

}, true);
addEventListener("keydown", keyd, false);
addEventListener("keyup", keyu, false);
