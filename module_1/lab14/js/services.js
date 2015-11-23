angular.module('ContactPeopleService', [])

.service('Contact', function(){
	// Cargando un contacto de ejempo que podria ser del consumo de un servicio

	var user_id = 1;

	 var people = [
		 {
		 	"name": "Alejandro Romero",
		 	"email": "alejo8591@gmail.com",
		 	"mobile": "3211119191"
		 }
	];


	this.save = function(contact){

		if (contact.id == null || contact.id == "") {
			contact.id = user_id++;
			people.push(contact);
		
		} else {
			for (i in people) {
				if (people[i].id == contact.id) {
					people[i] = contact;
				};
			}
		}
	};


	this.get = function(_id){
		for (i in people){
			if (people[i].id == _id){
				return people[i];
			}
		}
	};


	this.delete = function(_id){
		for (i in people){
			if (people[i].id == _id){
				people.splice(i, 1);
			};
		}
	};

	
	this.list = function(){
		return people;
	};

});