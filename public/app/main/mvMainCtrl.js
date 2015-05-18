angular.module('app').controller('mvMainCtrl',function($scope,mvCashedCourses){
    $scope.courses = mvCashedCourses.query();
});
