function UserService() {
	this.login = login;
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.loginUrl = '/api/login'
	this.userUrl = '/api/user';
	var self = this;

	function login(user) {
		var userObjStr = JSON.stringify(user);
		return fetch(self.loginUrl, {
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : userObjStr
		});
	}

	function createUser(user, callback) {
		var userObjStr = JSON.stringify(user);
		return fetch(self.userUrl, {
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : userObjStr
		}).then(callback);
	}

	function findAllUsers(callback) {
		return fetch(self.userUrl, {
			method : 'get',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			callback(data);
		});

	}

	function findUserById(userId, callback) {

	}

	function updateUser(userId, user, callback) {

	}

	function deleteUser(userId, callback) {
		
	}
}