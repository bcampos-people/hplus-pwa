// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html'
      }
    }
  })

  .state('app.cadastro', {
    url: '/cadastro',
    views: {
      'menuContent': {
        templateUrl: 'templates/cadastro.html'
      }
    }
  })

  .state('app.inicio', {
    url: '/inicio',
    views: {
      'menuContent': {
        templateUrl: 'templates/inicio.html'
      }
    }
  })

  .state('app.welcome', {
    url: '/welcome',
    views: {
      'menuContent': {
        templateUrl: 'templates/welcome.html'
      }
    }
  })

  .state('app.room-service', {
    url: '/room-service',
    views: {
      'menuContent': {
        templateUrl: 'templates/room-service.html'
      }
    }
  })

  .state('app.room-service-incluir', {
    url: '/room-service-incluir',
    views: {
      'menuContent': {
        templateUrl: 'templates/room-service-incluir.html'
      }
    }
  })

  .state('app.room-obrigado', {
    url: '/room-obrigado',
    views: {
      'menuContent': {
        templateUrl: 'templates/room-obrigado.html'
      }
    }
  })

  .state('app.atracoes-eventos', {
    url: '/atracoes-eventos',
    views: {
      'menuContent': {
        templateUrl: 'templates/atracoes-eventos.html'
      }
    }
  })

  .state('app.extrato-conta', {
    url: '/extrato-conta',
    views: {
      'menuContent': {
        templateUrl: 'templates/extrato-conta.html'
      }
    }
  })

  .state('app.lista-ramais', {
    url: '/lista-ramais',
    views: {
      'menuContent': {
        templateUrl: 'templates/lista-ramais.html'
      }
    }
  })

  .state('app.guestone', {
    url: '/guestone',
    views: {
      'menuContent': {
        templateUrl: 'templates/guestone.html'
      }
    }
  })

  .state('app.guestone-pool', {
    url: '/guestone-pool',
    views: {
      'menuContent': {
        templateUrl: 'templates/guestone-pool.html'
      }
    }
  })

  .state('app.guestone-obrigado', {
    url: '/guestone-obrigado',
    views: {
      'menuContent': {
        templateUrl: 'templates/guestone-obrigado.html'
      }
    }
  })

  .state('app.guest-service', {
    url: '/guest-service',
    views: {
      'menuContent': {
        templateUrl: 'templates/guest-service.html'
      }
    }
  })

  .state('app.add-solicitacao', {
    url: '/add-solicitacao',
    views: {
      'menuContent': {
        templateUrl: 'templates/add-solicitacao.html'
      }
    }
  })

  .state('app.guestserv-obrigado', {
    url: '/guestserv-obrigado',
    views: {
      'menuContent': {
        templateUrl: 'templates/guestserv-obrigado.html'
      }
    }
  })

  .state('app.guestserv-andamento', {
    url: '/guestserv-andamento',
    views: {
      'menuContent': {
        templateUrl: 'templates/guestserv-andamento.html'
      }
    }
  })
  

  .state('app.editar-perfil', {
    url: '/editar-perfil',
    views: {
      'menuContent': {
        templateUrl: 'templates/editar-perfil.html'
      }
    }
  })

  
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/inicio');
});