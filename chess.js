function Chess(x,y){
	this.positionX;
	this.positionY;
}

function Knight(positions)
{
	Chess.call(this, positions);
	this.Move = function(){
		positions[0]++;
		positions[1]--;
    }
}

Knight.prototype = Object.create(Chess.prototype);

Knight.prototype.constructor = Knight;

var piece = new Knight({
	x:5,
	y:6,
})

Knight.prototype === piece.__proto__