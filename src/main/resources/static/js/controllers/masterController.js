'use strict';
app.controller('masterCtrl', ['$rootScope', '$scope', 'masterService', '$window', '$document', '$uibModal', function($rootScope, $scope, masterService, $window, $document, $uibModal){

  console.log('I am alive!! *evil laugh*');
  if(!$scope.data){
    console.log('ok getting info');
    getInfo();
  }
  if(!$scope.experiences){
    console.log('ok getting exp');
    getExperiences();
  }
  $scope.selectedPosition = 1;
  $scope.arrow = 'fa fa-caret-right';
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


  function getInfo(){
    // scrollTo(0, 0);
    masterService.fetchInfo().then(function(data){
      $scope.data = data;
    });
  }

  function getExperiences(){
    masterService.fetchExperiences().then(function(data){
      $scope.experiences = data;
    });
  }

  $scope.image = '/lib/Kunal.png';

  $scope.getVCard = function(){
    var start = 'BEGIN:VCARD\nVERSION:2.1\nN;LANGUAGE=en-us:Jaiswal;Kunal';
    var end = '\nEND:VCARD';
    var name = '\nFN:' + $scope.data.firstName + ' ' + $scope.data.lastName;
    var phone = '\nTEL;HOME;VOICE:' + $scope.data.phone + '\nTEL;CELL;VOICE:' + $scope.data.phone;
    var address = '\nADR;HOME;PREF:;;45 Hubbard St;Middletown;CT;06457;United States of America\nLABEL;HOME;PREF;ENCODING=QUOTED-PRINTABLE:45 Hubbard St=0D=0A=\nMiddletown, CT  06457\nX-MS-OL-DEFAULT-POSTAL-ADDRESS:1';
    var email = '\nEMAIL;PREF;INTERNET:' + $scope.data.email;
    var skype = '\nX-MS-IMADDRESS:' + $scope.data.skypeUserName;
    var vCard = start + name + phone + address + email + skype + end;
    var blob = new Blob([ vCard ], { type: 'application/octet-stream' });
    if(window.navigator.msSaveOrOpenBlob){
      var fileName = 'Kunal Jaiswal.vcf';
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    }
    else{
      $scope.link = window.URL.createObjectURL(blob);
      setTimeout(function(){
        console.log('revoking URL');
        window.URL.revokeObjectURL($scope.link);
      }, 5000);

    }

  }

  var lastScroll = 0;
  var scrollingDown = true;
  $document.on('scroll', function(){
    $scope.$apply(function(){
      if($window.scrollY >= 0 && $window.scrollY <= 621){
        $scope.sec.sec1.active = 'active';
        $scope.sec.sec1.position = 'latched';
        $scope.selectedPosition = 1;
        releaseLock('sec1');


      }
      else if($window.scrollY > 630 && $window.scrollY < 1331){
        // console.log('2 -- ' + $window.scrollY);
        $scope.sec.sec2.position = 'latched';
        $scope.sec.sec2.active = 'active';
        $scope.selectedPosition = 2;
        releaseLock('sec2');

      }
      else if($window.scrollY > 1340 && $window.scrollY < 2041){
        // console.log('3 -- ' + $window.scrollY);
        $scope.sec.sec3.position = 'latched';
        $scope.sec.sec3.active = 'active';
        $scope.selectedPosition = 3;
        releaseLock('sec3');
      }
      else if($window.scrollY > 2050 && $window.scrollY < 2751){
        // console.log('4 -- ' + $window.scrollY);
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
    var y = elm.offsetTop;
    var node = elm;

    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    }
    return y;
  }

  $scope.smoothScroll = function(pos) {
    var eID = 'section' + pos;
    var offset = 0;
    if(pos < $scope.selectedPosition){
      offset = 500;
    }
    else if(pos == $scope.selectedPosition){
      return;
    }
    $scope.selectedPosition = pos;
    var startY = currentYPosition();
    var stopY = elmYPosition(eID) - offset;

    var distance = stopY > startY ? stopY - startY : startY - stopY;
    // if (distance < 100) {
    //   scrollTo(0, stopY); return;
    // }
    var speed = Math.round(distance / 150);
    if (speed >= 10) speed = 10;
    var step = Math.round(distance /70);
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

  $scope.getStyleClass = function(name){
    var companyClass = {
      'ICICI Bank': '',
      'Aviva Life Insurance': 'aviva',
      'Moser Baer': 'moser',
      'Johnson & Johnson': 'johnson',
      'IMCS Group': 'imcs',
      'UHG - Optum': 'uhg',
      'Java Developer': 'left'
    };
    return companyClass[name];
  }

  $scope.openMoreInfo = function(companyName){
    $rootScope.companyName = companyName;
    $uibModal.open({
      windowClass: 'more-info-page-modal',
      templateUrl: '/moreInfoModal.html',
      controller: 'modalCtrl',
      backdrop: 'static',
      size: 'lg',
      animate: true
    });
  }

  $scope.downloadResume = function(){
    console.log('downloading resume');
  }

}]);
