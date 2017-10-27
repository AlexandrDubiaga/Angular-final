angular.module('app')
.directive('iconProducts',function(){
    return{
        template: '<div ng-repeat="p in product">{{p.name}}<a ui-sref="product({productId:p.productId})"> Перейти</a></div>',
        controller:function($scope,productFactory){
           $scope.product = productFactory.getProducts();
           
    }
}
})