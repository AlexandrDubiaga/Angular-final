function productController($scope, productFactory,$stateParams){
console.log($stateParams)
    $scope.getProductById = function(){
        return productFactory.getProductById();
    }

    }