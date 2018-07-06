(function () {
    var $usernameFld, $passwordFld;
    var $loginBtn;
    var userService = new UserService();
    $(main);

    function main() {
    	$usernameFld=$('#username');    
    	$passwordFld=$('#password'); 
    	$loginBtn = $('#loginBtn')
    	$loginBtn.click(login); 
    }
    
    function login() {
    	var user = {
    			username: $usernameFld,
    			password: $passwordFld
    	}
    	userService.login(user);
    }
})();
