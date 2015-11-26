adminGui.service('loginService', function () {

	var data = {
		email:"admin@admin",
		password:"admin"
	};

	var logged = false;

	this.getLogin = function(){
		return this.logged;  
	};

	this.setLogin = function(state){
		this.logged = state;
	};
	this.validate = function(signupData){
		return (signupData.email === data.email && signupData.password === data.password) ? true : false;
	};


});