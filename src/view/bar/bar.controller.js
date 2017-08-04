// export default function barController() {
//
//     var vm = this;
//
// }

angular.module('Demo').controller('barController',barController);

function barController($uibModal,$scope,$log) {

    var vm = this;

    vm.tasks = [
        {id:'1', title:'吃饭', value:20 , description:"每天吃饭"},
        {id:'2', title:'睡觉',value:50, description:"11点睡觉"},
        {id:'3',title:'打豆豆',value:30, description:"打一天打一次豆豆"}
    ];

    vm.open = open;
    // vm.create = create;

    function open() {
        var modalInstance = $uibModal.open({
            animation: vm.animationsEnabled,
            templateUrl: 'modal.html',
            scope: $scope,
            controllerAs: vm
        });
        modalInstance.result.then(function (selectedItem) {
            $ctrl.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    //
    // vm.max = 200;
    // vm.sliderValue = 6;
    // vm.bar = {
    //     min: 3,
    //     step: 1,
    //     max: 10,
    //     value: 20};
    //
    //
    // vm.random = function() {
    //     var value = Math.floor(Math.random() * 100 + 1);
    //     var type;
    //
    //     if (value < 25) {
    //         type = 'success';
    //     } else if (value < 50) {
    //         type = 'info';
    //     } else if (value < 75) {
    //         type = 'warning';
    //     } else {
    //         type = 'danger';
    //     }
    //
    //     vm.showWarning = type === 'danger' || type === 'warning';
    //     vm.showhint = type ==='info' || type === 'success';
    //
    //     vm.dynamic = value;
    //     vm.type = type;
    // };
    //
    // vm.random();
    //
    // vm.randomStacked = function() {
    //     vm.stacked = [];
    //     var types = ['success', 'info', 'warning', 'danger'];
    //
    //     for (var i = 0, n = Math.floor(Math.random() * 4 + 1); i < n; i++) {
    //         var index = Math.floor(Math.random() * 4);
    //         vm.stacked.push({
    //             value: Math.floor(Math.random() * 30 + 1),
    //             type: types[index]
    //         });
    //     }
    // };
    //
    // vm.randomStacked();
}