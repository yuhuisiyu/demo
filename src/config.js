import controllers from './controllers.js';

// var demo = angular.module('Demo', ['ui.router',controllers.name]);
//
//
// demo.config(function($stateProvider) {
//     $stateProvider
//         .state('user', {
//             url:'/user',
//             templateUrl: 'src/user/user.view.html',
//             controller: 'userController',
//             controllerAs:'vm'
//         })
//     // .state('table',{
//     //     url:'#/table',
//     //     templateUrl: 'table/table.view.html',
//     //     controller: 'tableController'
//     // })
//     // .state('file',{
//     //     url:'#/file',
//     //     templateUrl: 'file-upload/file.view.html',
//     //     controller: 'fileController'
//     // })
//     // .state('bar',{
//     //     url:'#/bar',
//     //     templateUrl: 'progressbar/bar.view.html',
//     //     controller: 'barController'
//     // })
// });
//
//
//
//
//



    angular.module('Demo', ['ui.router',controllers.name])
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
            // .state('table',{
            //     url:'/table',
            //     templateUrl: 'src/view/table/table.view.html',
            //     controller: 'tableController'
            // })
            // .state('file',{
            //     url:'/file',
            //     templateUrl: 'src/view/file/file.view.html',
            //     controller: 'fileController'
            // })
            // .state('bar',{
            //     url:'/bar',
            //     templateUrl: 'src/view/bar/bar.view.html',
            //     controller: 'barController'
            // })
    }
