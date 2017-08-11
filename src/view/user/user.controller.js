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
     vm.emailaddress = [
         {title:'@163.com'},
         {title:'@gmail.com'},
         {title:'@qq.com'},
         {title:'@yahoo.com'}
     ];
     vm.user =[
         {name:'yoyo',email:'1111@qq.com',gender:'女士',birth:'2016-08-19',address:'珠海市'},
         {name:'yoyo2',email:'2222@qq.com',gender:'先生',birth:'2016-08-20',address:'广州市'},
         {name:'yoyo3',email:'3333@qq.com',gender:'先生',birth:'2016-08-22',address:'深圳市'}
     ];
     vm.today = new Date();
     vm.daterange = {startDate:null,endDate:moment()};

     //event handlers
     // vm.click = click;
     vm.open = open;
     vm.usernamevalidation = usernamevalidation;
     vm.passwordvalidation = passwordvalidation;
     vm.complete = complete;
     vm.create = create;

     //create a new user
     function create(){
     //     console.log(vm.username);
     //     console.log(vm.password);
         if(vm.username === undefined || vm.username === "") {
             // vm.message = "请输入用户名";
             vm.usernameinput = true;
         }
         if(vm.password === undefined || vm.password === "") {
             // vm.message = "请输入密码";
             vm.passwordinput = true;
             return;
         }
         var uservalidate= /[A-z]{3,12}/;
         var passwordvalidate= /\d{3,9}/;
         if(uservalidate.test(vm.username)=== true) {
             vm.usernamevalidate = true;
         }
         if(passwordvalidate.test(vm.password)=== true) {
             vm.passwordvalidate = true;
         }
     }

     // //click function: change the message when click
     // function click() {
     //     vm.message = "lalala";
     // }


     //for username validation
     function usernamevalidation(){
         vm.usernameinput = true;
     }

     //for password validation
     function passwordvalidation(){
         vm.passwordinput = true;
     }

     //to complete the email input
     function complete(){
        var i = vm.email.length;
         if(vm.email.substring(i-1) === "@"){
             vm.show = true;
             vm.emailname = vm.email.substring(0,i-1)
         }
         var reg= /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
         if(reg.test(vm.email)=== true) {
             vm.show = false;
         }
     }

     //to open a modal
     function open() {
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
     }
 }
