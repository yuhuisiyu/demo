// import controllers from './controllers.js';
// var userController = require('./view/user/user.controller.js');
// var tableController = require('./view/table/table.controller.js');
// var fileController = require('./view/file/file.controller.js');
// var barController = require('./view/bar/bar.controller.js');

    angular.module('Demo', ['ui.router','ui.select','ui.bootstrap'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('user', {
                url:'/user',
                templateUrl: 'src/view/user/user.view.html',
                controller: 'userController',
                controllerAs:'vm'
            })
            .state('table',{
                url:'/table',
                templateUrl: 'src/view/table/table.view.html',
                controller: 'tableController',
                controllerAs:'vm'
            })
            .state('file',{
                url:'/file',
                templateUrl: 'src/view/file/file.view.html',
                controller: 'fileController',
                controllerAs:'vm'
            })
            .state('bar',{
                url:'/bar',
                templateUrl: 'src/view/bar/bar.view.html',
                controller: 'barController',
                controllerAs:'vm'
            })
    }
