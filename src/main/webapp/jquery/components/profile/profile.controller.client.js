(function() {
	var userService = new UserService();
	var $success, $error;
	var $username, $firstname, $lastname, $email, $phone, $role, $dob;
	var currentUser = null;
	$(main);

	function main() {
		//var username = window.location.hash.substring(1);
		
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
//		$username.val(username).prop('disabled', true);
		$username.prop('disabled', true);
		$error.hide();
		$success.hide();
		loadUserData();
	}
	
	function loadUserData() {
    	userService.getUserData(populateData);
    }
    
    function populateData(user) {
    	currentUser = user;
    	$username.val(user.username)
    	$firstName.val(user.firstName);
    	$lastName.val(user.lastName);
    	$phone.val(user.phone);
    	$email.val(user.email);	
    	//var d = new Date(user.dateOfBirth);	
    	//$dob.val(d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate());
    	var date2 = new Date().toISOString().substr(0, 10).replace('T', ' ');
    	$dob.val(date2);
		$role.val(user.role);	
    }

	function logout(e) {
		e.preventDefault();
		return userService.logout(redirectLogin);
	}

	function updateProfile(e) {
		e.preventDefault();

		currentUser.firstName = $firstName.val();
		currentUser.lastName = $lastName.val();
		currentUser.phone = $phone.val();
		currentUser.email = $email.val();
		currentUser.role = $role.val();
		currentUser.dateOfBirth = $dob.val();
		
		return userService.updateProfile(currentUser, showUpdateMsg);
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
