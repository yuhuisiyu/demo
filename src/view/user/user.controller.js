// export default function userController() {
//
//         var vm = this;
//
//         //functions
//         vm.click = click;
//
//         //click function: change the message when click
//         function click() {
//             vm.message = "lalala";
//         }
//     }

angular.module('Demo').controller('userController',userController);

 function userController($uibModal,$scope,$log) {

     var vm = this;
     vm.selectedCity = [
         {id: '1', address: '珠海市'},
         {id: '2', address: '广州市'},
         {id: '3', address: '汕头市'},
         {id: '4', address: '中山市'}
     ];



     vm.daterange = {startDate:null,endDate:null};

     //event handlers
     vm.click = click;
     vm.open = open;
     vm.complete= complete;


     //click function: change the message when click
     function click() {
         vm.message = "lalala";
     }

     //to complete the email input
     function complete(){

     }

     //to open a modal
     function open() {
         greet();
         var modalInstance = $uibModal.open({
             animation: vm.animationsEnabled,
             templateUrl: 'modal.html',
              scope:$scope,
              controllerAs:vm
         });
         modalInstance.result.then(function (selectedItem) {
             $ctrl.selected = selectedItem;
         }, function () {
             $log.info('Modal dismissed at: ' + new Date());
         });

         function greet(){
             if(vm.user.gender === "male") {
                 gender = "先生"
             } else if (vm.user.gender === "female") {
                 gender = "女士"
             } else {
                 gender = ""
             }
             vm.greetmessage = "你好！" + vm.user.name + gender
         }
     }
 }
