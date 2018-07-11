(function() {
	var $usernameFld, $passwordFld;
	var $loginBtn;
	var $error;
	var userService = new UserService();
	$(main);

	function main() {
		$error = $('#errorMsg1');
		$usernameFld = $('#username');
		$passwordFld = $('#password');
		$loginBtn = $('#loginBtn')
		$loginBtn.click(login);
		$error.hide();
	}

	function login(e) {
		e.preventDefault();
		var usernameStr = $usernameFld.val();
		var passwordStr = $passwordFld.val();
		var user = {
			username : usernameStr,
			password : passwordStr,
		}
		return userService.login(user, loginNavigate);
	}
	
	function loginNavigate(user){
		if(user == null || user.username == null){
			$error.show();
		}
		else{
			$error.hide();
			window.location.href='../profile/profile.template.client.html';
		}
	}
	
})();
