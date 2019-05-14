function foo(a,b,c) {
	console.log( "a:" + a + ", b:" + b + "c:" + c);
}

// our DMZ empty object
var ø = Object.create( null );

// spreading out array as parameters
foo.apply( ø, [2, 3 , 4] ); // a:2, b:3

// currying with `bind(..)`
var bar = foo.bind( ø, 2 );
bar( 3, 4 ); // a:2, b:3