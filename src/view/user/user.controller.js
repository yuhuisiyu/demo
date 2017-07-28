export default function userController() {

        var vm = this;

        //functions
        vm.click = click;

        //click function: change the message when click
        function click() {
            vm.message = "lalala";
        }
    }