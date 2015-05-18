angular.module('app').factory('mvCashedCourses',function(mvCourse){
    var courseList;
    return {
        query:function(){
            if(!courseList){
                courseList = mvCourse.query();
            }
            return courseList;
        }
    }
});