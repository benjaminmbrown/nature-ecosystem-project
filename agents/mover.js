var Mover = function() {
	
		this.position = createVector(random(width),random(height));
		this.velocity = createVector();
		this.acceleration = createVector();
		this.topspeed = 10;

		this.display = function(){
			stroke(0);
			strokeWeight(2);
			fill(127);
			ellipse(this.position.x, this.position.y, 18,18);
		}

		this.checkEdges = function(){
			if(this.position.x > width){
				this.position.x = 0;
			}
			else if(this.position.x <0){
				this.position.x = width;
			}

			if(this.position.y > height){
				this.position.y=0;
			}
			else if(this.position.y <0){
				this.position.y  = height;
			}

		}

		this.update = function(){
			var mouse = createVector(mouseX,mouseY);

			this.acceleration = p5.Vector.sub(mouse, this.position);
			this.acceleration.setMag(0.2);

			// this.acceleration = createVector(cos(angle),sin(angle));
			// this.acceleration.mult(random(2));

			this.velocity.add(this.acceleration);
			this.velocity.limit(this.topspeed);
			this.position.add(this.velocity);
		}


}