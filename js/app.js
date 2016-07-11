/**
 * Created by user on 08/07/2016.
 */
var app = angular.module('app', ['ui.router','ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider)  {

    $urlRouterProvider.otherwise('/main');

    $stateProvider
        .state('main', {
            url: '/main',
            templateUrl: '../views/main.html',
            controller: 'moviesCtl'
        })
        .state('order', {
            url: '/order/:movie_name',
            templateUrl: '../views/order.html',
            controller: 'orderCtl'
        })
        .state('loading', {
            url: '/loading',
            templateUrl: '../views/loading.html',
            controller: ''
        })
        .state('enjoy', {
            url: '/enjoy',
            templateUrl: '../views/enjoy.html',
            controller: ''
        })
        .state('payment', {
            url: '/payment',
            templateUrl: '../views/payment.html',
            controller: 'paymentCtl'
        })
        .state('movieTicket', {
            url: '/movieTicket',
            templateUrl: '../views/movieTicket.html',
            controller: 'movieTicketCtl'
        })
        .state('myOrders', {
            url: '/myOrders',
            templateUrl: '../views/myOrders.html',
            controller: 'movieUserCtl'
        });
});