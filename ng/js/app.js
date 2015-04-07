angular.module("app", ["ngRoute"]).config(["$routeProvider", function($routeProvider) {
	$routeProvider.
	when("/users", {
		templateUrl:"/wp-content/plugins/ng_template/ng/templates/users.html",
		controller: "userCtrl"
	}).
	when("/details", {
		templateUrl: "/wp-content/plugins/ng_template/ng/templates/details.html",
		controller: "detailCtrl"
	}).
	when("/details/:id", {
		templateUrl: "/wp-content/plugins/ng_template/ng/templates/details.html",
		controller: "detailCtrl"
	}).
	otherwise({
    	redirectTo: "/users"
    });
}]);
