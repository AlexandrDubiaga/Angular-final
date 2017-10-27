angular.module('app').factory('shopingCart',function(){
var items = ['Book 1','Book 2','book 3','book 4'];
return{
    getItems:function(){
        return items;
    },
    getItemCount:function(){
        return items.length;
    }
}
})

angular.module('app').factory('productFactory',function(){
   
    var product = [
        {
            productId:1,
            name:'Ananas'
        },
        {
            productId:2,
            name:'Kakos'
        },
        {
            productId:3,
            name:'Ogurec'
        },
        {
            productId:4,
            name:'Abloco'
        }
    ];    return{
        getProducts:function(){
            return product;
        },
        getProductById:function(){
            return product;
        }
    }
    })