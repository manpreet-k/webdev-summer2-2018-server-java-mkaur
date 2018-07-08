(function() {
	var $usernameFld, $passwordFld, $verifyPasswordFld;
	var $registerBtn;
	var userService = new UserService();
	$(main);

	function main() {
		$usernameFld = $('#username');
		$passwordFld = $('#password');
		$verifyPasswordFld = $('#verifyPassword');
		$registerBtn = $('#registerBtn')
		$registerBtn.click(register);
	}
	
	function register(e) {
		e.preventDefault();
		var usernameStr = $usernameFld.val();
		var passwordStr = $passwordFld.val();
		var user = {
			username : usernameStr,
			password : passwordStr,
		}
		return userService.register(user, validateRegister);
	}
	
	function validateRegister(data){
		if(data.username == null){
			console.log("Error");
		}
		else{
			window.location.href='../profile/profile.template.client.html#' + data.username;
		}
	}
})();
