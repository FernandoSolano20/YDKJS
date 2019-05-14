function foo() {
	console.log( this.a );
}

function doFoo(fn) {
	// `fn` is just another reference to `foo`

	fn.call(this); // <-- call-site!
}

var obj = {
	a: 2,
    foo: foo,
    doFoo: doFoo
};

var a = "oops, global"; // `a` also property on global object

obj.doFoo( obj.foo );