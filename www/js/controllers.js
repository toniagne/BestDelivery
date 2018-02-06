angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $http, $timeout) {

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/social/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

 

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };




  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashCtrl', function($window, $rootScope, $location, $scope,  $http, $timeout, $state, $ionicLoading ) {

  var url =  'http://www.bestdelivery.com.br/aplicativo/clientes/simples/?callback=JSON_CALLBACK';
 $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
   $http.jsonp(url).
   success(function(data, status, headers, config) {
      $scope.itens = data;
      $ionicLoading.hide();
   }).
   error(function(data, status, headers, config) {
     console.log('erro');
     $ionicLoading.hide();
   });

})

.controller('ClienteDetalhe', function($window, $stateParams, $rootScope, $location, $scope,  $http, $timeout, $state, $ionicLoading ) {

var url =  'http://www.bestdelivery.com.br/aplicativo/clientespesquisa/'+$stateParams.prodId+'?callback=JSON_CALLBACK';
 $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
   $http.jsonp(url).
   success(function(data, status, headers, config) {
      $scope.data = data['dadoscliente'];
      $scope.produtos = data['produtos'];
      $ionicLoading.hide();
   }).
   error(function(data, status, headers, config) {
     console.log('erro');
   });

})

.controller('ProdutoDetalhe', function($window, $stateParams, $rootScope, $location,  $scope,  $http, $timeout, $state, $ionicLoading ) {

var url =  'http://www.bestdelivery.com.br/aplicativo/produtodetalhe/'+$stateParams.prodId+'?callback=JSON_CALLBACK';
 $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
   $http.jsonp(url).
   success(function(data, status, headers, config) { 
      $scope.produtos = data;
      $ionicLoading.hide();
      console.log(data);
   }).
   error(function(data, status, headers, config) {
     console.log('erro');
   });

});
