function User(){
	var username, password;

	function doLogin(user,pw) {
		username = user;
        password = pw;
        
        // do the rest of the login work
        return "Perfect";
	}

	var publicAPI = {
		login: doLogin
	};

	return publicAPI;
}

// create a `User` module instance
//If I use new User() I waste resource but why?
var fred = User();

fred.login( "fred", "12Battery34!" );