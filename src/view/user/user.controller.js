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

 function userController($uibModal) {

     var vm = this;
     vm.selectedArray = [
         {id: '1', address: '珠海市'},
         {id: '2', address: '广州市'},
         {id: '3', address: '汕头市'},
         {id: '4', address: '中山市'}
     ];


     //event handlers
     vm.click = click;
     vm.open = open;


     //click function: change the message when click
     function click() {
         vm.message = "lalala";
     }

     //to open a modal
     function open() {
          $uibModal.open({
             animation: vm.animationsEnabled,
             templateUrl: 'modal.html'
         });

     }
 }
