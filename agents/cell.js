//A cell is the base class for all objects in the ecosystem. 
//it can only move up down left or right randomly
//it has no memory, no vision and can only move, eat, die , or be eaten
//it consumes simple particles for food
//it has a very short life and it's dna deteriotes quickly
//if it runs out of fuel its movement slows proportionally
//if it is full of fuel and it consumes food, the food is stored as fat
//it uses fuel to travel
//as it gets fatter it gets slower and uses more fuel to move
//its nutritional value is equal to its base mass + current fuel
//it matures at a certain time
//it can asexually reproduce
//it has a concept of dna and also epigenetics which alter dna


var Cell = function() {
		
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

			//this.acceleration z p5.Vector.sub(mouse, this.position);
			this.acceleration.setMag(0.2);

			// this.acceleration = createVector(cos(angle),sin(angle));
			// this.acceleration.mult(random(2));

			this.velocity.add(this.acceleration);
			this.velocity.limit(this.topspeed);
			this.position.add(this.velocity);
		}


}