(function() {
	var userService = new UserService();
	var $success, $error;
	var $username;
	$(main);

	function main() {
		var username = window.location.hash.substring(1);
		
		$success = $('#successMsg');
		$error = $('#errorMsg');
		$username = $('#username');

		$('#logoutBtn').click(logout);
		$('#updateBtn').click(updateProfile);
		$username.val(username).prop('disabled', true);
		$error.hide();
		$success.hide();
	}

	function logout() {
		return userService.logout(redirectLogin);
	}

	function updateProfile() {
		var user = new User($username.val(), null, null, null, $('#phone').val(),
				$('#email').val(), $('#role').val(), $('#dob').val())
		return userService.updateProfile(user, showUpdateMsg);
	}
	
	function showUpdateMsg(user){
		if(user == null || user.username == null){
			$error.show();
			$success.hide();
		}
		else{
			$error.hide();
			$success.show();
		}
	}
	
	function redirectLogin(){
		window.location.href='../login/login.template.client.html';
	}
	
})();
