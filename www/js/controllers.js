angular.module('starter.controllers', [])

.controller('TodoCtrl', function($scope,$ionicModal,Tasks) {
  $scope.tasks = Tasks.all();
  $scope.remove = function(task) {
    Tasks.remove(task);
  }
 
  $ionicModal.fromTemplateUrl('/templates/new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

})



.factory('Tasks', function() {

   var tasks = [{
    id: 0,
    title: 'You on your way?'
  }, {
    id: 1,
    title: 'Hey, it\'s me'
  }, {
    id: 2,
    title: 'Did you get the ice cream?'
  }, {
    id: 3,
    title: 'I should buy a boat'
  }, {
    id: 4,
    title: 'Look at my mukluks!'
  }];

  return {
    all: function() {
      return tasks;
    },
    remove: function(task) {
      tasks.splice(tasks.indexOf(task), 1);
    }
  }
})
