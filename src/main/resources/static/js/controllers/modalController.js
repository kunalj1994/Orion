'use strict';
app.controller('modalCtrl', ['$rootScope', '$scope', '$uibModalInstance', 'masterService', function($rootScope, $scope, $uibModalInstance, masterService){
  console.log('I have been granted life!');

  getDescription();

  $scope.closeModal = function(){
    $uibModalInstance.close();
  }
  $scope.tech = ['java', 'J2EE', 'XML', 'Spring', 'Hibernate', 'Rest WS', 'JSP', 'Servlets'];

  function getDescription(){
    masterService.fetchDescriptions().then(function(data){
      console.log(data);
      for(var i = 0; i < data.length; i++){
        if($rootScope.companyName === data[i].companyName){
          $scope.description = data[i];
          // break;
        }
      }
    });
  }

}]);
