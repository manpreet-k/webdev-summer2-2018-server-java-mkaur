function UserService() {
	this.login = login;
	this.login_url = '/api/login'
	var self = this;

	function login(user) {
		var userObjStr = JSON.stringify(user);
		return fetch(self.login_url, {
		      method: 'post',
		      headers: {
		        'Content-Type': 'application/json'
		      },
		      body: userObjStr
		    });
	}
}
