
let xpos = 0;
let frames = 0;




const barWidth = 20;
let lastBar = -1;



let particles=[];
function setup(){


	createCanvas(710, 400);
    colorMode(HSB, height, height, height);
    noStroke();
    
    

	
	for (let i = 0; i < 100; i++){
		particles[i] = new particle();


	}
}
function draw(){
	

    frames++;
    frames = frames % 650;
    xpos = map(frames, 0, 650, 0, width);



    background(0); 
   
	
	let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
    background(0);



}

	ellipse(xpos, height/2, 50, 2);
	ellipse(xpos, height/4, 50, 4);
	ellipse(xpos, height/1, 50, 1);
	ellipse(xpos, height/8, 50, 8);
	ellipse(xpos, height/3, 50, 3);
	ellipse(xpos, height/10, 50, 10);
	ellipse(xpos, height/5, 50, 5);
	ellipse(xpos, height/7, 50, 7);
	ellipse(xpos, height/6, 50, 6);
	ellipse(xpos, height/12, 50, 12);




   
      
	for (let i = 0; i < 100; i++){
		particles[i].move();
		particles[i].display();


      

	}
}


class particle {
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(0,1);
		this.yspeed = random(0,1);
		this.distance = random(width/1,1);
	}
	display(){
		ellipse(this.x, this.y, 5,5 )

	}
	move(){

		this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

       if ((this.x > this.distance) || (this.x < 0)) {
       this.xspeed = this.xspeed * -1;
       }

       if ((this.y > this.distance) || (this.y < 0)) {
       this.yspeed = this.yspeed * -1;
       }

		
	}
}
