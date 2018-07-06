function UserService() {
	this.login = login;
	this.login_url = '/api/login'
	var self = this;
		
	function login(user) {
		return fetch(self.login_url, {
			method: 'POST',
			body: JSON.stringify(user)
		});
	}
}
