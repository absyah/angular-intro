(function(){

  var app = angular.module('store', [ 'ngRoute', 'store-products' ]);

  app.config(function($routeProvider){
    $routeProvider
      .when('/', { templateUrl: 'store.html' })
      .when('/other-page', { templateUrl: 'other-page.html' })
  })
  // CONTROLLER

  app.controller('StoreController', [ '$http', function($http){
    var store = this;

    store.products = [];

    $http.get('/products.json').success(function(data){
      store.products = data;
    });
    
  } ]);

  
  // panel controller ini sudah tidak dipakai, sudah pindah ke directive productPanels
  app.controller('PanelController', function(){
    this.tab = 1;
    
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
      return this.tab === checkTab
    };
  });

  // gallery controller ini sudah tidak dipakai, sudah pindah ke directive productGallery
  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });


  // // DIRECTIVE, moved to products.js
  // // Panels

  // app.directive('productTitle', function(){
  //   return {
  //     restrict: 'E', // E => Element, A => Attribute
  //     templateUrl: 'product-title.html' 
  //   };
  // });

  // app.directive('productPanels', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'product-panels.html',
  //     controller: function(){ // pindahkan controller panel ke sini
  //         this.tab = 1;
    
  //         this.selectTab = function(setTab) {
  //           this.tab = setTab;
  //         };

  //         this.isSelected = function(checkTab) {
  //           return this.tab === checkTab;
  //         };

  //     },
  //     controllerAs: 'panels'
  //   };
  // });

  // app.directive('productDescription', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'product-description.html'
  //   }
  // });

  // app.directive('productSpec', function(){
  //   return {
  //     restrict: 'A',
  //     templateUrl: 'product-spec.html'
  //   };
  // });

  // app.directive('productReview', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'product-review.html'
  //   };
  // });

  // // Gallery

  // app.directive('productGallery', function(){
  //   return {
  //     restrict: 'E',
  //     templateUrl: 'product-gallery.html',
  //     controller: function(){
  //       this.current = 0;
  //       this.setCurrent = function(newGallery){
  //         this.current = newGallery || 0;
  //       };
  //     },
  //     controllerAs: 'gallery'
  //   };
  // })

})();