function UserService() {
	this.login = login;
	this.createUser = createUser;
	this.findAllUsers = findAllUsers;
	this.findUserById = findUserById;
	this.deleteUser = deleteUser;
	this.updateUser = updateUser;
	this.register = register;
	this.updateProfile = updateProfile;
	this.logout = logout;
	this.loginUrl = '/api/login'
	this.userUrl = '/api/user';
	this.registerUrl = '/api/register';
	this.profileUrl = '/api/profile';
	this.logoutUrl = '/api/logout';
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
		return fetch(self.userUrl + '/' + userId, {
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

	function updateUser(userId, user, callback) {
		var userObjStr = JSON.stringify(user);
		return fetch(self.userUrl + '/' + userId, {
			method : 'put',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : userObjStr
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			callback(data);
		});
	}

	function deleteUser(userId, callback) {
		return fetch(self.userUrl + '/' + userId, {
			method : 'delete',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(callback);
	}

	function register(user, callback) {
		var userObjStr = JSON.stringify(user);
		return fetch(self.registerUrl, {
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : userObjStr
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			callback(data);
		});
	}

	function updateProfile(user, callback) {
		var userObjStr = JSON.stringify(user);
		return fetch(self.profileUrl, {
			method : 'put',
			headers : {
				'Content-Type' : 'application/json'
			},
			body : userObjStr
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			callback(data);
		});
	}

	function logout(callback) {
		return fetch(self.logoutUrl, {
			method : 'post',
			headers : {
				'Content-Type' : 'application/json'
			}
		}).then(function(response) {
			return response.json();
		}).then(function(data) {
			callback(data);
		});
	}
}
