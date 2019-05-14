var a = new Boolean( false );
/*Objs are truthy*/
if (!a) {
	console.log( "Oops" ); // never runs
}