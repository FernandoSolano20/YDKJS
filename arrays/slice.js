function foo() {
	var arr = Array.prototype.slice.call( arguments );
	arr.push( "bam" );
	console.log( arr );
}

foo( "bar", "baz" );

/*Covert string to array */
var c = Array.prototype.map.call( a, function(v){
	return v.toUpperCase();
} );
var d = a.split("");

/*Reverse string */
var e = a
	// split `a` into an array of characters
	.split( "" )
	// reverse the array of characters
	.reverse()
	// join the array of characters back to a string
	.join( "" );

	Object.prototype.toString.call(d)