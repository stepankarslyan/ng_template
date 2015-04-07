angular.module("app").

controller("userCtrl", function($scope, userService) {
	$scope.init = function() {
		
		$scope.getUsers = function() {
			controller.getUsers();
		};

		$scope.deleteUser = function(id) {
			controller.deleteUser(id);
		};

		$scope.getUsers();
	};

	var controller = {

		getUsers: function() {
			userService.getUsers(function(result) {
				$scope.users = result;
			});
		},

		deleteUser: function(user) {
			userService.deleteUser(user.id, function(result) {
				$scope.users.splice($scope.users.indexOf(user), 1);
				console.log(result);
			});
		}
	};

	$scope.init();
});