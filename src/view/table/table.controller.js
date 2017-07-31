// export default function tableController() {
//
//     var vm = this;
//
// }

angular.module('Demo').controller('tableController',tableController);

function tableController($scope) {

    var vm = this;

    vm.totalItems = 100;
    vm.currentPage = 2;
    vm.maxSize = 3;
    vm.bigmaxSize = 5;
    vm.bigTotalItems = 175;
    vm.bigCurrentPage = 4;
}