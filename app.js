angular.module('flapperNews', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/home.html',
        controller: 'MainCtrl'
      })
      .state('posts', {
        url: '/posts/{id}',
        templateUrl: '/posts.html',
        controller: 'PostsCtrl'
      })

    $urlRouterProvider.otherwise('home');
  }])
  .controller('MainCtrl', ['$scope', 'postService', function($scope, postService) {
    $scope.posts = postService.posts;
    $scope.addPost = addPost;
    $scope.increaseUpVotes = increaseUpVotes;
    $scope.deletePost = deletePost;

    function addPost() {
      if(!$scope.title || $scope.title==='') return;
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0,
        comments: [
          {author: 'Joe', body: 'Cool post!', upvotes: 0},
          {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
        ]
      });
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
  .controller('PostsCtrl', ['$scope', '$stateParams', 'postService', function($scope, $stateParams, postService) {
    index = parseInt($stateParams.id)
    $scope.post = postService.posts[index];
  }])
  .factory('postService', [function() {
    var obj = {
      posts: [{title: 'test', upvotes: 1}, {title: 'test again',  upvotes: 0}]
    }

    return obj;
  }])


