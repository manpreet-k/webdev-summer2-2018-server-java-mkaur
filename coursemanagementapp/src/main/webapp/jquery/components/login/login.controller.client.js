(function() {
	var $usernameFld, $passwordFld;
	var $loginBtn;
	var userService = new UserService();
	$(main);

	function main() {
		$usernameFld = $('#username');
		$passwordFld = $('#password');
		$loginBtn = $('#loginBtn')
		$loginBtn.click(login);
	}

	function login() {
		var usernameStr = $usernameFld.val();
		var passwordStr = $passwordFld.val();
		var user = {
			username : usernameStr,
			password : passwordStr,
		}
		return userService.login(user);
	}
})();
