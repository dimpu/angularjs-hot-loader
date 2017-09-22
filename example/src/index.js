import angular from 'angular';
import '@uirouter/angularjs';

let formComposerModule = angular
.module('my-app', ['ui.router'])
.config(($stateProvider, $urlRouterProvider)=>{
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('test-comp', {
            url: '/',
            template: '<test-comp></test-comp>'
        });
})
// .directive('testComp', function() {
//     return {
//         template: '<h1>Test Component </h1>'
//     }
// })
.component('test', function() {
  return {
      template: '<h1>Test Component </h1>'
  }
})
// .component('hi', function() {
//   return {
//       template: '<h1>Dimpu ARvind</h1>'
//   }
// })
    // .component('test-comp', {
    //   template:'<h1>Hellow</h1>',
    //   //templateUrl: 'templateUrl',
    //   controller: ControllerController,
    //   bindings: {
    //     Binding: '=',
    //   },
    // });

  // ControllerController.$inject = ['dependency1'];
  // function ControllerController(dependency1) {
  //   var $ctrl = this;
    

  //   ////////////////

  //   $ctrl.$onInit = function() { };
  //   $ctrl.$onChanges = function(changesObj) { };
  //   $ctrl.$onDestroy = function() { };
  // }
