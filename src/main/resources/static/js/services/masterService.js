app.service('masterService', ['$http', '$q', function($http, $q){

  var service = {
    fetchInfo: fetchInfo,
    fetchExperiences: fetchExperiences,
    fetchDescriptions: fetchDescriptions
  }

  return service;

  function fetchInfo(){
    var deferred = $q.defer();
    var path = '/getInfo';
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    $http.get(path, config).then(function(d){
      deferred.resolve(d.data);
    }, function(err){
      console.log('Error while getting response');
      deferred.reject(err);
    });
    return deferred.promise;
  }

  function fetchExperiences(){
    var deferred = $q.defer();
    var path = '/getExperiences';
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    $http.get(path, config).then(function(d){
      deferred.resolve(d.data);
    }, function(err){
      console.log('Error while getting response  ' + JSON.stringify(err));
      deferred.reject(err);
    });
    return deferred.promise;
  }

  function fetchDescriptions(){
    var deferred = $q.defer();
    var path = '/getDescriptions';
    var config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    $http.get(path, config).then(function(d){
      deferred.resolve(d.data);
    }, function(err){
      console.log('Error while getting response  ' + JSON.stringify(err));
      deferred.reject(err);
    });
    return deferred.promise;
  }

}]);
