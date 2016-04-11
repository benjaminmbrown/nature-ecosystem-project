var Attractor = function(x,y){
this.mass = 20;
this.x = x;
this.y = y;
this.location = createVector(this.x, this.y);

//this allows us to send an object with position and we can say whether
//or not it is inside the liquid's bounds
this.contains = function(entity){
	var l = entity.position;
	//returns true if object is inside liquid
	return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h;

}




	this.display = function(){
		stroke(0);
		fill(175,200);
		rect(locations.x,location.y, mass*2, mass*2);
	}

}