function fun(j){
    setTimeout( function timer(){
        console.log( j );
    }, j*1000 );
}


for (var i=1; i<=5; i++) {
	fun(i);
}