/**
 * Created by CWei on 2016/9/18.
 */
app.module('com.ngnice.app')
   .config(
     function($stateProvider,$urlRouterProvider){

       //define the home page
       $stateProvider.state(
         'home',{
           url:'/',
           templateUrl:'controllers/home/index.html',
           controller:'HomeIndexCtrl as vm'
         }
       );
       //define the notFound page
       $stateProvider.state(
         'notFound',{
           url:'/notFound',
           templateUrl:'controllers/home/notFound.html',
           controller:'HomeNotFoundCtrl as vm'
         }
       );
       //define the default route
       $urlRouterProvider.otherwise('/notFound');

       //define the father route
       $urlRouterProvider.state(
         'reader',{
           url:'/reader',
           template:'<div ui-view></div>',
           abstract:true
         }
       );
       //define the child route
       $urlRouterProvider.state(
         'reader.create',{
           url:'/create',
           templateUrl:'controllers/reader/create.html',
           controller:'ReaderCreateCtrl as vm'
         }
       );

     }
   )
