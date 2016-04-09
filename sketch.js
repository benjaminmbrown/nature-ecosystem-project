 var mover;
var movers = [];
function setup() {
  createCanvas(800, 500);
  for(var i = 0; i<30;i++){
  	movers[i]= new Mover();

  }

 // mover = new Mover();

}

function draw() {
	background(255);
	
	 for(var i = 0; i<movers.length;i++){
	 	movers[i].update();
	
	 	movers[i].display();
	 }
}

