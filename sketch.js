


/* Coding Challenge 2

Take this code that gives a basic bouncing ball and change it in 2 major ways


1)refactor it so that you have a ball class, and write a draw loop 
that has many bouncing balls. 

2) instead of a ball change it into a more interesting shape, or a picture or something
also change the name of your class to reflect your sketch better
*/


//add the current speed to the location
x = x + xspeed;
y = y + yspeed;

if ((x > width) || (x < 0)) {
  xspeed = xspeed * -1;
}

if ((y > height) || (y < 0)) {
  yspeed = yspeed * -1;
}

//display circle at x location
stroke(0)
strokeWeight(2);
fill(127);
elllipse(x, y, 48, 48);
