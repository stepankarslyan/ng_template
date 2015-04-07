angular.module("app").

controller("detailCtrl", function($scope, $routeParams, userService) {

	$scope.init = function() {

		$scope.user = {};

		$scope.getUserById = function(id) {
			controller.getUserById(id);
		};

		$scope.editUser = function(id) {
			controller.editUser(id);
		};
		
		$scope.deleteUser = function(id) {
			controller.deleteUser(id);
		};
		
		$scope.saveUser = function(user) {
			controller.saveUser(user);
		};

		$scope.updateUser = function(user) {
			controller.updateUser(user);
		};

		if ($routeParams.id) {
			$scope.getUserById($routeParams.id);
		}
	};

	var controller = {
		getUserById: function(id) {
			userService.getUserById(id, function(result) {
				$scope.user = result;
				console.log(result);
			});
		},

		editUser: function(id) {
			userService.editUser(id, function(result) {
				console.log(result);
				$scope.user = result;
			});
		},

		deleteUser: function(id) {
			userService.deleteUser(id, function(result) {
				console.log(result);
			});
		},

		saveUser: function(user) {
			userService.saveUser(user, function(result) {
				console.log(result);
			});
		},

		updateUser: function(user) {
			userService.updateUser(user, function(result) {
				console.log(result);
			});
		}
	};

	$scope.init();
});