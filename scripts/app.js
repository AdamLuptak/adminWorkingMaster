  var adminGui = angular
  .module('AdminGui', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar'
    ])
  adminGui.config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {

    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    //defualt page 
    $urlRouterProvider.otherwise('/login');

    $stateProvider
    .state('dashboard', {
      url:'/dashboard',
      templateUrl: 'views/dashboard/main.html',
      data: {
        requireLogin: false },
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
            return $ocLazyLoad.load(
            {
              name:'AdminGui',
              files:[
              'scripts/directives/header/header.js',
              'scripts/directives/header/header-notification/header-notification.js',
              'scripts/directives/sidebar/sidebar.js',
              'scripts/directives/sidebar/sidebar-search/sidebar-search.js',
              'scripts/service/dashtaskService.js',
              'scripts/service/taskService.js',
              'scripts/service/usersService.js'
              ]
            }),
            $ocLazyLoad.load(
            {
             name:'toggle-switch',
             files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
             "bower_components/angular-toggle-switch/angular-toggle-switch.css"
             ]
           }),
            $ocLazyLoad.load(
            {
              name:'ngAnimate',
              files:['bower_components/angular-animate/angular-animate.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngCookies',
              files:['bower_components/angular-cookies/angular-cookies.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngResource',
              files:['bower_components/angular-resource/angular-resource.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngSanitize',
              files:['bower_components/angular-sanitize/angular-sanitize.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngTouch',
              files:['bower_components/angular-touch/angular-touch.js']
            })
          }
        }
      })
  .state('dashboard.home',{
    url:'/home',
    controller: 'MainCtrl',
    templateUrl:'views/dashboard/home.html',
    data: {
      requireLogin: false },
      resolve: {
        loadMyFiles:function($ocLazyLoad) {
          return $ocLazyLoad.load({
            name:'AdminGui',
            files:[
            'scripts/controllers/main.js',
            'scripts/directives/dashboard/stats/stats.js',
            'scripts/service/dashstatsService.js',
            'scripts/directives/dashboard/tasks/tasks.js',
            'scripts/service/dashtaskService.js'
            ]
          })
        }
      }
    })
  .state('dashboard.tasks',{
    templateUrl: 'views/tasks.html',
    url: '/tasks',
    controller: 'TaskController', 
    data: {
      requireLogin: false
    },
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'AdminGui',
          files:['scripts/controllers/taskController.js',]
        });
      }
    }
    
  })
  .state('login',{
    templateUrl:'views/pages/login.html',
    url:'/login',
    controller:'LoginController',
    data: {
      requireLogin: false
    },
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'AdminGui',
          files:[
          'scripts/controllers/loginController.js',
          'scripts/service/loginService.js',
          'scripts/directives/errorDirectives.js',
          ]
        })
      }
    }
  })
  .state('dashboard.users',{
    controller: 'usersController',
    templateUrl: 'views/users.html',
    url:'/users',
    params: {userData: null},
    data: {
      requireLogin: false
    },
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'AdminGui',
          files:[
          'scripts/controllers/usersController.js',
          'scripts/directives/usersTable/usersTable.js',
          'scripts/service/usersService.js',
          'scripts/service/taskService.js',
          ]
        })
      }
    }
  })
  .state('dashboard.chart',{
    templateUrl:'views/pages/chart.html',
    url:'/chart',
    controller:'ChartCtrl',
    data: {
      requireLogin: false
    },
    resolve: {
      loadMyFile:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'chart.js',
          files:[
          'bower_components/angular-chart.js/dist/angular-chart.min.js',
          'bower_components/angular-chart.js/dist/angular-chart.css'
          ]
        }),
        $ocLazyLoad.load({
          name:'AdminGui',
          files:['scripts/controllers/chartController.js',
          'scripts/service/chartService.js',
          'scripts/directives/chartDirective/chartDirective.js']
        })
      }
    }
  })
  .state('dashboard.tasks1',{
    templateUrl:'views/pages/tasks1.html',
    url:'/tasks1',
    controller:'TasksController',
    resolve: {
      loadMyFiles:function($ocLazyLoad) {
        return $ocLazyLoad.load({
          name:'AdminGui',
          files:['scripts/controllers/tasksController.js',]
        })
      }
    }
  }) 

}]);



  adminGui.run(function ($rootScope,authService, $location) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      var requireLogin = toState.data.requireLogin;

      if (requireLogin) {
        if(!authService.getLogState())
        {
          $location.path( "/login" );
          event.preventDefault();

        }
      }
    });

  });

  adminGui.service('authService', function () {
    var logState = false;

    this.getLogState = function(){
      return logState;
    };

    this.setLogState = function(state){
     logState = state;
   }

 });

