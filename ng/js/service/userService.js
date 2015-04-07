angular.module("app").
factory("userService", function() {

		
	var users = [
		{id: 1, name: "Levon"},
		{id: 2, name: "Styopa"},
		{id: 3, name: "Olivier"},
	];
	
	function findUserById(user_id) {
		var user;

		for (var i = 0; i < users.length; i++) {
			if (users[i].id == user_id) {
				user = users[i];
			}
		};

		return user;
	};

	return {
	
		getUserById: function(id, done) {
			/*$.ajax({
				url: "/rest/user" + id,
				method: "get",
				
				success: function (data) {
					done(data);
				},
				
				error: function(error) {
					console.log(error)
				}
			});*/
			var user = findUserById(id);
			done(user);
		},

		getUsers: function(done) {
			/*$.ajax({
				url: "/rest/user",
				method: "get",
				
				success: function (data) {
					done(data);
				},
				
				error: function(error) {
					console.log(error)
				}
			});*/
			done(users);
		},

		saveUser: function(user, done) {
			/*$.ajax({
				url: "/rest/user",
				method: "post",
				data: user,

				success: function (data) {
					done(data);
				},
				
				error: function(error) {
					console.log(error)
				}
			});*/
			done(user);
		},

		updateUser: function(user, done) {
			/*$.ajax({
				url: "/rest/user",
				method: "put",
				data: user,

				success: function (data) {
					done(data);
				},
				
				error: function(error) {
					console.log(error)
				}
			});*/
			done(user);
		},

		deleteUser: function(id, done) {
			/*$.ajax({
				url: "/rest/user" + id,
				method: "delete",

				success: function (data) {
					done(data);
				},
				
				error: function(error) {
					console.log(error)
				}
			});*/
			done(id);
		}

	};
});