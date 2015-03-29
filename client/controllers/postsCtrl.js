angular.module('flapperNews').controller('PostsCtrl', [
  '$scope',
  '$meteor',
  '$stateParams',
  '$rootScope',
  function($scope, $meteor, $stateParams, $rootScope){
    $scope.post = $meteor.object(Posts, $stateParams.id);

    $scope.addComment = function(){
      if($scope.body === '') { return; }
      if (!$scope.post.comments)
        $scope.post.comments = [];
      $scope.post.comments.push({
        body: $scope.body,
        author: $rootScope.currentUser.emails[0].address,
        upvotes: 0
      });
      $scope.body = '';
    };

    $scope.incrementUpvotes = function(comment){
      comment.upvotes++;
    };
  }]);