
var shoppingCart = [{itemName: "orange", price:3}, {itemName:"apple", price:4},
                    {itemName:"pasta", price:2}];

for (i=0; i < shoppingCart.length; i++) {

  console.log(shoppingCart[i].itemName + " " +
              shoppingCart[i].price.toFixed(2));

};


var total=0;


shoppingCart.forEach(function(item){
total=total+item.price;
});

console.log("total price is" + " " + total.toFixed(2));
