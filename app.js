angular.module('flapperNews', [])
  .controller('MainCtrl', ['$scope', 'postService', function($scope, postService) {
    $scope.posts = postService.posts;
    $scope.addPost = addPost;
    $scope.increaseUpVotes = increaseUpVotes;
    $scope.deletePost = deletePost;

    function addPost() {
      if(!$scope.title || $scope.title==='') return;
      $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
      $scope.title = '';
      $scope.link = '';
    }

    function increaseUpVotes(post) {
      post.upvotes += 1;
    }

    function deletePost(index) {
      $scope.posts.splice(index, 1);
    }
  }])
  .factory('postService', [function() {
    var obj = {
      posts: []
    }

    return obj;
  }])
