var a = [
	1,
	function(){ /*..*/ },
	2,
	function(){ /*..*/ }
];

JSON.stringify( a ); // "[1,null,2,null]"

JSON.stringify( a, function(key,val){
	if (typeof val == "function") {
		// force `ToBoolean` coercion of the function
		return !!val;
	}
	else {
		return val;
	}
} );
// "[1,true,2,true]"