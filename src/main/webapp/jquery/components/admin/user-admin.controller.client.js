(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $updateBtn;
    var $firstNameFld, $lastNameFld;
    var $roleFld;
    var $userRowTemplate, $tbody;
    var userService = new UserService();
    var updateId;
    $(main);

    function main() {
    	$usernameFld = $('#usernameFld');
		$passwordFld = $('#passwordFld');
		$firstNameFld = $('#firstNameFld');
		$lastNameFld = $('#lastNameFld');
		$roleFld = $('#roleFld');		
		$tbody = $('.wbdv-tbody'); 
		$userRowTemplate = $('.wbdv-template.wbdv-user')
							.clone()
							.removeClass('wbdv-hidden'); 
		$createBtn = $('.wbdv-create');
		$updateBtn = $('.wbdv-update');
				
		$createBtn.click(createUser);
		$updateBtn.click(updateUser);
				
		findAllUsers();
		
		$tbody.on('click', '.wbdv-remove', deleteUser);
		$tbody.on('click', '.wbdv-edit', findUserById);		 
    }
    
    function createUser() {
    	var usernameStr = $usernameFld.val();
    	var passwordStr = $passwordFld.val();
    	var firstNameStr = $firstNameFld.val();
    	var lastNameStr = $lastNameFld.val();
    	var roleStr = $roleFld.val();
    	
    	var user = new User(usernameStr, passwordStr, firstNameStr, lastNameStr, null, null, roleStr, null);
    	userService.createUser(user, reloadCallback);
    }
    
    function findAllUsers() {
    	userService.findAllUsers(renderUsers);
    }
    
    function findUserById() {
    	var id = $(this)
    				.closest('tr')
    				.attr('id');
    	updateId = id;
    	userService.findUserById(id, findUserByIdData);
    }
    
    function findUserByIdData(user) {    	
    	$usernameFld
    		.val(user.username)
    		.attr("disabled", true);
		$firstNameFld.val(user.firstName);	
		$lastNameFld.val(user.lastName);	
		$roleFld.val(user.role);
		$passwordFld
			.val(user.password)
			.attr("disabled", true);
    }
    
    function deleteUser() {    	    	
    	var id = $(this)
					.closest('tr')
					.attr('id');
    	updateId = id;
    	userService.deleteUser(id, reloadCallback);
    }
    
    function updateUser() {
    	var usernameStr = $usernameFld.val();
    	var firstNameStr = $firstNameFld.val();
    	var lastNameStr = $lastNameFld.val();
    	var roleStr = $roleFld.val();
    	
    	var user = new User(usernameStr, null, firstNameStr, lastNameStr, null, null, roleStr, null);
    	
    	userService.updateUser(updateId, user, reloadCallback);
    }
    
    function renderUser(user) {
    	
    }
    
    function renderUsers(users) {
    	$tbody.empty();  
    	for(var u in users) {     
    		var user = users[u];     
    		var $row = $userRowTemplate.clone();    
    		$row.attr('id', user.id);
    		$row.find('.wbdv-username')
    			.html(user.username); 
    		$row.find('.wbdv-password')
				.html(user.password); 
    		$row.find('.wbdv-first-name')
				.html(user.firstName); 
    		$row.find('.wbdv-last-name')
				.html(user.lastName); 
    		$row.find('.wbdv-role')
				.html(user.role); 
    		
    		$tbody.append($row); 
    	}
    }
    
    function reloadCallback(){
    	findAllUsers();
    	resetFields();
    }
    
    function resetFields(){
    	$firstNameFld.val("");
    	$lastNameFld.val("");
    	$roleFld.val("");
    	$usernameFld
    		.val("")
    		.attr("disabled", false);
    	$passwordFld
    		.val("")
    		.attr("disabled", false);
    }
    
})();
