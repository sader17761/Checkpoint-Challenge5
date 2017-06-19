/*---- SERVICES ----*/

myApp.service('MessageService', function($http){
  var sv = this;

  sv.addMessage = function(message){
    console.log('Inside addMessage with message:', message);
    $http({
      method: 'POST',
      url: '/messages',
      data: message
    }).then(function(response){
      console.log('Back from server with:', response);
    });
  };

  sv.findAllMessages = function(){
    console.log('Inside of findAllMessages function.');
    return $http.get('/messages').then(function(response){
      console.log('This is our response from the db:', response);
      sv.dataWeWant = response.data;
    });
  };


}); // end RealestateService
