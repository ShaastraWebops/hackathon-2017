'use strict';

/**
 * @ngdoc overview
 * @name hackathon2017App
 * @description
 * # hackathon2017App
 *
 * Main module of the application.
 */


// Function to validate date in proper format
jQuery.validator.addMethod( "dateITA", function( value, element ) {
  var check = false,
    re = /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    adata, gg, mm, aaaa, xdata;
  if ( re.test( value ) ) {
    adata = value.split( "/" );
    gg = parseInt( adata[ 0 ], 10 );
    mm = parseInt( adata[ 1 ], 10 );
    aaaa = parseInt( adata[ 2 ], 10 );
    xdata = new Date( Date.UTC( aaaa, mm - 1, gg, 12, 0, 0, 0 ) );
    if ( ( xdata.getUTCFullYear() === aaaa ) && ( xdata.getUTCMonth() === mm - 1 ) && ( xdata.getUTCDate() === gg ) ) {
      check = true;
    } else {
      check = false;
    }
  } else {
    check = false;
  }
  return this.optional( element ) || check;
}, $.validator.messages.date );






$(document).ready(function(){
 
    
            
  $(this).scrollTop(0);
 });


// Scroll To specified tab
$('.nav-scroll').on('click',function(event) {
  event.preventDefault();
  var target = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(target).offset().top-50
  }, 800);
});





 $("#regForm").validate({
       errorElement:'p',
    rules: {
      name: "required",
      email: {
        required: true,
        email: true,
      },
      passwd: {
        required: true,
        minlength: 6,
      },
      confpasswd: {
        required: true,
        minlength: 6,
        equalTo:'#passwd',
      },
      dob:{required:true,
       dateITA:true,
      },
      agree:"required",
    },
    messages: {
      name: "Please enter your name",
      passwd: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long"
      },
      confpasswd: {
        required: "Please provide a password confirmation",
        minlength: "Your password must be at least 6 characters long",
        equalTo:"Your passwords do not match"
      },
      dob:{required: "Please enter your  date of birth",
  dateITA:"Please enter date in format DD/MM/YYYY",
      },
      email: {email:"Please enter a valid email address",
      required:"Please enter your email address",},
      agree:"Please accept our terms and conditions",
    },
    
    submitHandler: function(form) {
      
$(".btn-custom").val("THANK YOU!");
      form.submit();
    }
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