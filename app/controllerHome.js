angular.module('AppControllers',[])
.controller('controllerHome', [ 'RestClient', '$scope', '$http', '$window', 
  function (RestClient, $scope,$http,$window ) {

  init();

  function init(){
    console.log('ci sono! frontend');
    RestClient.products( function(response){

      console.log(response.data);

    });
  }

  }]
);
