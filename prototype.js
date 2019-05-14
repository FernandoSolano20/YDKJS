var foo = {
	a: 42
};

//pattern behavior delegation
// create `bar` and link it to `foo`
var bar = Object.create( foo );

bar.b = "hello world";

bar.b;		// "hello world"
bar.a;	