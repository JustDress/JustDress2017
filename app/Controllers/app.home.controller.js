var HomeController = function($scope,$http,$window, RestClient){
  init();

  function init(){
    console.log('ci sono! frontend');
    RestClient.products( function(response){

      console.log(response.data);

    });
  }
}
HomeController.$inject = ['$scope', '$http', '$window', 'RestClient'];