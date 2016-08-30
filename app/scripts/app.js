'use strict';

/**
 * @ngdoc overview
 * @name hackathon2017App
 * @description
 * # hackathon2017App
 *
 * Main module of the application.
 */
 $(document).ready(function(){

  $(this).scrollTop(0);
 });



// Scroll To specified tab
$('.nav-scroll').on('click',function(event) {
  event.preventDefault();
  var target = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 800);
});










var app=angular
  .module('hackathon2017App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      
      .otherwise({
        redirectTo: '/'
      });
  });

app.directive('main',function(){

return {


  restrict:'E',
  templateUrl:'views/main.html'


}



})