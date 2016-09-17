angular.module('flapperNews', [])
  .controller('MainCtrl', [
    '$scope',
    function($scope) {
      $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 1},
        {title: 'post 4', upvotes: 3},
        {title: 'post 5', upvotes: 6},
        {title: 'post 6', upvotes: 7},
        {title: 'post 7', upvotes: 0}
      ];

      $scope.addPost= function() {
        if(!$scope.title || $scope==='') return;
        $scope.posts.push({title: $scope.title, link: $scope.link, upvotes: 0});
        $scope.title ='';
        $scope.link ='';
      };
      $scope.increaseUpvotes = function(post) {
        post.upvotes += 1;
      }
    }
  ])

