'use strict';

adminGui.service('ModalService', function () {

	var userDataModal = null;

	this.getData = function(){
		return this.userDataModal;  
	};

	this.setData = function(userData){
		this.userDataModal = userData;
	};


});