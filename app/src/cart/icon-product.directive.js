angular.module('app')
.directive('iconProduct',function(){
    return{
        template: '<div ng-repeat="p in productsOne">{{p}}</div>',
        controller:function($scope,productFactory){
           $scope.productsOne = productFactory.getProductById();
           
    }
}
})