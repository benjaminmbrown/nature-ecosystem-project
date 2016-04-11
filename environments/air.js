var Air = function(x, y, w, h,c){
this.x = x;
this.y = y;
this.w = w;
this.h = h;
this.c = c;

//this allows us to send an object with position and we can say whether
//or not it is inside the liquid's bounds
this.contains = function(entity){
	var l = entity.position;
	//returns true if object is inside liquid
	return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h;

}

//calculates the drag of any entity (requires velocity);
	this.calculateDrag = function(entity){

		var speed = entity.velocity.mag();
		var dragMag = this.c * speed * speed;

		//direction of drag is opposite of velocity
		var dragForce = entity.velocity.copy(); //need a copy so we don't modify the core velocity
		dragForce.mult(-1);

		//scale it based on magnitute
		dragForce.normalize();
		dragForce.mult(dragMag);
		return dragForce;
	}


	this.display = function(){
		noStroke();
		fill(50);
		rect(this.x,this.y,this.w,this.h);
	}

}