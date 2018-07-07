(function () {
    var $usernameFld, $passwordFld;
    var $removeBtn, $editBtn, $createBtn;
    var $updateBtn, $searchBtn;
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
		$searchBtn = $('.wbdv-search');
		
		$createBtn.click(createUser);
		$updateBtn.click(updateUser);
		$searchBtn.click(findUserById);
		
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
    	
    	var user = new User(usernameStr, passwordStr, firstNameStr, lastNameStr, "", "", roleStr, "");
    	userService.createUser(user, reloadCallback);
    }
    
    function findAllUsers() {
    	userService.findAllUsers(renderUsers);
    }
    
    function findUserById() {
    	var id = $(this)
    				.closest('tr')
    				.attr('id');
    	var user = userService.findUserById(id);
    	updateId = id;
    	
    	$usernameFld
    		.val(user.getUsername)
    		.attr("disabled", true);
		$passwordFld.val(user.getPassword);
		$firstNameFld.val(user.getFirstName);	
		$lastNameFld.val(user.getLastName);	
		$roleFld.val(user.getRole);	
    }
    
    function deleteUser() {    	    	
    	var id = $(this)
					.closest('tr')
					.attr('id');
    	
    	userService.deleteUser(id);
    }
    
    function updateUser() {
    	var usernameStr = $usernameFld.val();
    	var passwordStr = $passwordFld.val();
    	var firstNameStr = $firstNameFld.val();
    	var lastNameStr = $lastNameFld.val();
    	var roleStr = $roleFld.val();
    	
    	var user = new User(usernameStr, passwordStr, firstNameStr, lastNameStr, "", "", roleStr, "");
    	
    	userService.updateUser(updateId, user);
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
    	location.reload();
    }
    
})();
