angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/modal-creditos.html', {
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

.controller('MyCtrl', function($scope) {
  $scope.groups = [
    {
      "id": 1,
      "name": "Saladas",
      "childItems": [
        {
          "childName": "Salada Simples",
          "childPrice": 12
        },
        {
          "childName": "Tabule Tropical",
          "childPrice": 18
        },
        {
          "childName": "Salada de Grão de Bico",
          "childPrice": 20
        }
      ]
    },
    {
      "id": 2,
      "name": "Aves",
      "childItems": [
        {
          "childName": "Frango à Passarinho Assado",
          "childPrice": 14
        },
        {
          "childName": "Frango Assado com Batatas",
          "childPrice": 21
        },
        {
          "childName": "Bife à Rolê",
          "childPrice": 30
        }
      ]
    },
    {
      "id": 3,
      "name": "Pratos Quentes",
      "childItems": [
        {
          "childName": "Costelinha de Porco Recheada",
          "childPrice": 52
        },
        {
          "childName": "Lagarto Recheado",
          "childPrice": 45
        },
        {
          "childName": "Carne Assada na Panela de Pressão",
          "childPrice": 38
        },
        {
          "childName": "Almôndegas de Carne Moída",
          "childPrice": 26
        }
      ]
    },
    {
      "id": 4,
      "name": "Sanduiches",
      "childItems": [
        {
          "childName": "Sanduíche Natural de Atum",
          "childPrice": 16
        }
      ]
    },
    {
      "id": 5,
      "name": "Sobremesas",
      "childItems": [
        {
          "childName": "Torta Gelada de Morango",
          "childPrice": 28
        },
        {
          "childName": "Trufa de Chocolate",
          "childPrice": 5
        }
      ]
    },
    {
      "id": 6,
      "name": "Drinks",
      "childItems": [
        {
          "childName": "Vanilla Cuba Libre",
          "childPrice": 13
        },
        {
          "childName": "Caju Cremoso",
          "childPrice": 8
        }
      ]
    },
    {
      "id": 7,
      "name": "Aperitivos",
      "childItems": [
        {
          "childName": "Bolinha de Queijo (6 unidades)",
          "childPrice": 12
        }
      ]
    },
    {
      "id": 8,
      "name": "Carnes",
      "childItems": [
        {
          "childName": "Bolinha de Queijo (6 unidades)",
          "childPrice": 20
        }
      ]
    },
    {
      "id": 9,
      "name": "Destilados",
      "childItems": [
        {
          "childName": "Johnnie Walker Black Label",
          "childPrice": 110
        },
        {
          "childName": "Glenfiddich 12yo",
          "childPrice": 150
        }
      ]
    }
  ];
  
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
    $ionicScrollDelegate.resize();
  }

  $scope.toggleSubGroup = function(item) {
    if ($scope.isSubGroupShown(item)) {
      $scope.shownChild = null;
    } else {
      $scope.shownChild = item;
    }
    // $ionicScrollDelegate.resize();
  }

  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  }

  $scope.isSubGroupShown = function(item) {
    return $scope.shownChild === item;
  }

  $scope.openLink = function(item) {
    $window.open('https://www.google.com', '_blank');
  }

});