angular.module('op', [])

.controller('op-controller', function ($scope, $http) {
	$scope.posts = [];

	$scope.getPosts = function () {
	    $http.get('https://opendiscussion.herokuapp.com/api/posts').then(function (res) {
		$scope.posts = res.data;
	    });
	};

	$scope.createPost = function () {
		if ($scope.title == undefined || $scope.author == undefined || $scope.content == undefined) {
			console.error('Missing input.');
		} else {
			var post = {
				"author": $scope.author,
				"title": $scope.title,
				"content": $scope.content
			}
			$http.post('https://opendiscussion.herokuapp.com/api/post', post);
			$scope.author = $scope.title = $scope.content = undefined;
			$scope.getPosts();
		}
	}

	$scope.getPosts();
});
