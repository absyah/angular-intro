(function(){
  
  var app = angular.module('store-products', []);

  // DIRECTIVE
  // Panels

  app.directive('productTitle', function(){
    return {
      restrict: 'E', // E => Element, A => Attribute
      templateUrl: 'product-title.html' 
    };
  });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){ // pindahkan controller panel ke sini
          this.tab = 1;
    
          this.selectTab = function(setTab) {
            this.tab = setTab;
          };

          this.isSelected = function(checkTab) {
            return this.tab === checkTab;
          };

      },
      controllerAs: 'panels'
    };
  });

  app.directive('productDescription', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-description.html'
    }
  });

  app.directive('productSpec', function(){
    return {
      restrict: 'A',
      templateUrl: 'product-spec.html'
    };
  });

  app.directive('productReview', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-review.html'
    };
  });

  // Gallery

  app.directive('productGallery', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-gallery.html',
      controller: function(){
        this.current = 0;
        this.setCurrent = function(newGallery){
          this.current = newGallery || 0;
        };
      },
      controllerAs: 'gallery'
    };
  })

})();