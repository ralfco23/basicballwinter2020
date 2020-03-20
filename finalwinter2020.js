
const barWidth = 20;
let lastBar = -1;






let particles=[]
function setup(){
	createCanvas(710, 400);
	colorMode(HSB, height, height, height);
    noStroke();
    background(0);

	
	for (let i = 0; i < 100; i++){
		particles[i] = new particle();
	}
}
function draw(){
	

	let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;

	ellipse(width/2, height/2, 100,100);
	
	for (let i = 0; i < 100; i++){
		particles[i].move();
		particles[i].display();
		background(0);
	}
}
class particle {
	constructor(){
		this.x = random(width);
		this.y = random(height);
		this.xspeed = random(0,1);
		this.yspeed = random(0,1);
	}
	display(){
		ellipse(this.x, this.y, 5,5 )

	}
	move(){

		this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;

       if ((this.x > width) || (this.x < 0)) {
       this.xspeed = this.xspeed * -1;
       }

       if ((this.y > height) || (this.y < 0)) {
       this.yspeed = this.yspeed * -1;
       }

		
	}
}
