(function() {
	var $usernameFld, $passwordFld, $verifyPasswordFld;
	var $registerBtn;
	var $error, $errorText;
	var userService = new UserService();
	$(main);

	function main() {
		$usernameFld = $('#username');
		$passwordFld = $('#password');
		$verifyPasswordFld = $('#verifyPassword');
		$error = $('#errorMsg');
		$errorText = $('#errorText');
		$registerBtn = $('#registerBtn');
		$registerBtn.click(register);
		$error.hide();
	}
	
	function register(e) {
		e.preventDefault();
		var usernameStr = $usernameFld.val();
		var passwordStr = $passwordFld.val();
		
		if(passwordStr != $verifyPasswordFld.val()){
			$error.show();
			$errorText.text("Passwords do not match!");
		}
		else{
			$error.hide();
		}
		
		var user = {
			username : usernameStr,
			password : passwordStr,
		}
		return userService.register(user, validateRegister);
	}
	
	function validateRegister(user, response){
		if(response.status == 409){
			$error.show();
			$errorText.text("Username already exists");
		}
		else if(response.status == 500){
			$error.show();
			$errorText.text("Registration failed!");
		}
		else{
			$error.hide();
			window.location.href='../profile/profile.template.client.html#' + user.username;
		}
	}
})();
