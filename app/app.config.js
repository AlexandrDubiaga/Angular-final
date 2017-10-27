angular.module('app').config(function($stateProvider) {
    var productsState = {
      name: 'products',
      url: '/products',
      component:'products'
    }
    var productState = {
      name: 'product',
      url: '/product:productId',
      component:'product'
    }
    $stateProvider.state(productsState);
    $stateProvider.state(productState);
  });