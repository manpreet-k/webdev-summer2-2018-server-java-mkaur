(function() {
	var userService = new UserService();
	var $success, $error;
	var $username, $firstname, $lastname, $email, $phone, $role, $dob;
	$(main);

	function main() {
		var username = window.location.hash.substring(1);
		
		$success = $('#successMsg');
		$error = $('#errorMsg');
		$username = $('#username');
		$firstName = $('#firstName');
		$lastName = $('#lastName');
		$email = $('#email');
		$phone = $('#phone');
		$role = $('#role');
		$dob = $('#dob');

		$('#logoutBtn').click(logout);
		$('#updateBtn').click(updateProfile);
		$username.val(username).prop('disabled', true);
		$error.hide();
		$success.hide();
		findUserByUsername(username);
	}
	
	function findUserByUsername(username) {
    	userService.findUserByUsername(username, populateData);
    }
    
    function populateData(users) {
    	var user = users[0];
    	$firstName.val(user.firstName);
    	$lastName.val(user.lastName);
    	$phone.val(user.phone);
    	$email.val(user.email);	
    	$dob.val(user.dateOfBirth);	
		$role.val(user.role);	
    }

	function logout(e) {
		e.preventDefault();
		return userService.logout(redirectLogin);
	}

	function updateProfile(e) {
		e.preventDefault();
		var user = new User($username.val(), 
							null, 
							$firstName.val(), 
							$lastName.val(), 
							$phone.val(),
							$email.val(), 
							$role.val(), 
							$dob.val())
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
