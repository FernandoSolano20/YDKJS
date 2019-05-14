var wantA = true;
var myObject = {
	a: 2
};

var idx;

if (wantA) {
	idx = "a";
}

// later

console.log( myObject[idx] );

var myObject = {};

Object.defineProperty( myObject, "a", {
	value: 2,
	writable: true,//cant change
	configurable: true,
	enumerable: true
} );

myObject.a; // 2