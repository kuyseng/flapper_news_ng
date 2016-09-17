angular.module('flapperNews', [])
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.posts = [
      { title: 'post 1', upvotes: 5},
      { title: 'post 2', upvotes: 2},
      { title: 'post 3', upvotes: 1},
      { title: 'post 4', upvotes: 3},
      { title: 'post 5', upvotes: 0}
    ]
    $scope.addPost = addPost;
    $scope.increaseUpVotes = increaseUpVotes;

    function addPost() {
      if(!$scope.title || $scope.title==='') return;
      $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
      $scope.title = '';
      $scope.link = '';
    }

    function increaseUpVotes(post) {
      post.upvotes += 1;
    }
  }])
