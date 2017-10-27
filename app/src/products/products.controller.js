function productsController($scope, productFactory){
    $scope.getProducts = function(){
        return productFactory.getProducts();
    }

    }