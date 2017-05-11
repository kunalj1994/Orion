'use strict';
app.controller('masterCtrl', ['$scope', '$http', '$window', '$document', '$anchorScroll', '$location', function($scope, $http, $window, $document, $anchorScroll, $location){

  console.log('I am alive!! *evil laugh*');
  getInfo();

  $scope.selectedPosition = 1;

  $scope.sec = {
    sec1: {
      position:'latched',
      active: 'active'
    },
    sec2: {
      position: 'relative',
      active: ''
    },
    sec3: {
      position: 'relative',
      active: ''
    },
    sec4: {
      position:'relative',
      active: ''
    }
  };

  console.log('sec1 ' + $scope.sec.sec1.position);

  function getInfo(){
    var scr = currentYPosition();
    console.log('scrolling at ' + scr);
    var config = {
      headers:{
        'Content-Type': 'application/json'
      }
    }
    $http.get('/getInfo', config).then(function(d){
      $scope.data = d.data;
    }, function(err){
      console.log('err ' + JSON.stringify(err));
    });
  }
    //$scope.goToAnchor = function(x){
    //    console.log('x is ' + x);
    //    console.log('working')
    //    console.log('My location is ' + $location.hash());
    //
    //    var newHash = x;
    //    if($location.hash() !== newHash){
    //        console.log('here')
    //        console.log($location.hash());
    //        $location.hash(newHash);
    //        console.log('now is ' + $location.hash());
    //
    //    }
    //    else{
    //        $anchorScroll();
    //    }
    //}

  $document.on('scroll', function(){
    $scope.$apply(function(){
      if($window.scrollY >= 0 && $window.scrollY <= 411){
        console.log('1 -- ' + $window.scrollY);
        $scope.sec.sec1.active = 'active';
        $scope.sec.sec1.position = 'latched';
        $scope.selectedPosition = 1;
        releaseLock('sec1');

      }
      else if($window.scrollY > 441 && $window.scrollY < 911){
        console.log('2 -- ' + $window.scrollY);
        $scope.sec.sec2.position = 'latched';
        $scope.sec.sec2.active = 'active';
        $scope.selectedPosition = 2;
        releaseLock('sec2');

      }
      else if($window.scrollY > 941 && $window.scrollY < 1411){
        console.log('3 -- ' + $window.scrollY);
        $scope.sec.sec3.position = 'latched';
        $scope.sec.sec3.active = 'active';
        $scope.selectedPosition = 3;
        releaseLock('sec3');
      }
      else if($window.scrollY > 1441 && $window.scrollY < 1911){
        console.log('4 -- ' + $window.scrollY);
        $scope.sec.sec4.position = 'latched';
        $scope.sec.sec4.active = 'active';
        $scope.selectedPosition = 4;
        releaseLock('sec4');
      }
    });
  });

  function releaseLock(section){
    for(var i in $scope.sec){
      if(i != section){
        $scope.sec[i].position = 'relative';
        $scope.sec[i].active = '';
      }
    }
    return $scope.sec;
  }

  function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    console.log('elm is ');console.log(elm);
    var y = elm.offsetTop;
    console.log('y is ' + y);
    var node = elm;
    console.log('node.offsetParent ' + node.offsetParent);

    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      console.log('node is in while ' + node);
      y += node.offsetTop;
    }
    console.log('final y is ' + y);
    return y;
  }

  $scope.smoothScroll = function(pos) {
    var eID = 'section' + pos;
    var offset = 0;
    console.log('it is ' + eID);
    if(pos < $scope.selectedPosition){
      console.log('inside pos< if');
      offset = 500;
    }
    else if(pos == $scope.selectedPosition){
      console.log('inside pos= ifelse');
      return;
    }
    $scope.selectedPosition = pos;
    var startY = currentYPosition();
    var stopY = elmYPosition(eID) - offset;

    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      }
      return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
    return false;
  }


}]);
