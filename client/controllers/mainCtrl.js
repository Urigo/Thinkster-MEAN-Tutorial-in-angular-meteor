angular.module('flapperNews').controller('MainCtrl', ['$scope', '$meteor', '$rootScope',
  function($scope, $meteor, $rootScope){
    $scope.test = 'Hello world!';

    $scope.posts = $meteor.collection(Posts);

    $scope.addPost = function(){
      if($scope.title === '') { return; }
      if(!$rootScope.currentUser) { return; }
      $scope.posts.push({
        owner: $rootScope.currentUser._id,
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };

    $scope.incrementUpvotes = function(post) {
      post.upvotes++;
    };

  }]);