/*---- CONTROLLERS ----*/

console.log('JS is working');

var myApp = angular.module( 'myApp', [] );

myApp.controller('MessageController', function(MessageService){
  var vm = this;

  vm.sendMessage = function(){
    // create object to send
    newMessage = {
        name : vm.nameIn,
        message : vm.messageIn
    }; // end newMessage object

    console.log('This is our message:', newMessage);
    // send object to service
    MessageService.addMessage(newMessage);
    vm.getMessages();
  }; // end of sendMessage function

  vm.getMessages = function(){
    console.log('In getMessages function.');
    MessageService.findAllMessages().then(function(){
      console.log('Back in the controller with:', MessageService.dataWeWant);
      vm.data = MessageService.dataWeWant;
    }); // end of findAllMessages function
  }; // end of getMessages function


}); // end of MessageController
