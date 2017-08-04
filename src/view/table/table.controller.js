// export default function tableController() {
//
//     var vm = this;
//
// }

angular.module('Demo').controller('tableController',tableController);

function tableController() {

    var vm = this;

    vm.bigmaxSize = 1;
    vm.bigTotalItems = 70;
    vm.bigCurrentPage = new Date().getDay();
}