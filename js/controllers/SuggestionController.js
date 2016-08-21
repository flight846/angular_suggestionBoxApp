app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function ($scope, $routeParams, suggestions) {
  $scope.post = suggestions.posts[$routeParams.id];

  $scope.addComment = function () {

    // if input empty, don't submit
    if (!$scope.new_comment || $scope.new_comment === '') {
			return;
		}

		$scope.post.comments.push({
			body: $scope.new_comment,
			upvotes: 0
		});

    // after submit, clear input
		$scope.new_comment = '';
  }

  $scope.upVoteComment = function (comment) {
    comment.upvotes += 1
  }
}])
