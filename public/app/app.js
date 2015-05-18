angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function ($routeProvider, $locationProvider) {
    var routeRoleChecks = {
        admin: {
            auth: function (mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin')
            }
        },
        user:{
            auth:function(){
                return mvAuth.authorizeAuthenticatedUserForRoute
            }
        }
    }
    $locationProvider.html5Mode({enabled: true, requireBase: true});
    $routeProvider
        .when('/',
        {
            templateUrl: '/partials/main/main',
            controller: 'mvMainCtrl'
        })
        .when('/admin/users',
        {
            templateUrl: '/partials/admin/user-list',
            controller: 'mvUserListCtrl',
            resolve: routeRoleChecks.adnin
        })
        .when('/signup',
        {
            templateUrl: '/partials/account/signup',
            controller: 'mvSignupCtrl'
        })
        .when('/profile',
        {
            templateUrl: '/partials/account/profile',
            controller: 'mvProfileCtrl',
            resole: routeRoleChecks.user
        })
        .when('/courses',
        {
            templateUrl: '/partials/courses/course-list',
            controller: 'mvCourseListCtrl'
        })
        .when('/courses/:id',
        {
            templateUrl: '/partials/courses/course-details',
            controller: 'mvCourseDetailCtrl'
        });
});

angular.module('app').run(function ($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        if (rejection === 'Not authorized') {
            $location.path('/');
        }
    });
});
