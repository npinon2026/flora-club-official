// Variables
var totalPrice = 0;
var cartArr = [];
var noItemCtr = 0;

// Functions
function addToCart(name, price) {
  // Add item to array
  cartArr.push({
    prod_name: name,
    prod_price: price
  });

  // Misc
  noItemCtr++;

  // Show order
  showOrder();
}

function showOrder() {
  // No Item
  if(noItemCtr == 0)
  {
    document.querySelector("#cart-price").innerHTML = "Total: PHP 0.00";
    document.querySelector("#cart-items").innerHTML = '';
    document.querySelector("#cart-items").innerHTML += "<li class='list-group-item' id='noItem'></li>";
    document.querySelector("#noItem").innerHTML = "No item in the cart.";
  }
  else
  {
    totalPrice = 0;
    document.querySelector("#cart-items").innerHTML = '';
    // List of items
    for(var i=0; i < cartArr.length; i++)
    {
      document.querySelector("#cart-items").innerHTML +=
      "<li class='list-group-item' id='noItem'>" + cartArr[i].prod_name + "</li>" +
      "<li class='list-group-item' id='noItem'>Price:" + cartArr[i].prod_price +"</li>" +
      "<button onclick='removeItem("+i+")' class='w3-button w3-margin-bottom w3-text-white w3-hover-light-grey w3-hover-text-dark-grey' style='background-color:rgb(192, 131, 112)'>Remove</button>";
    }

    // Show total price
    for(var j=0; j < cartArr.length; j++)
    {
      totalPrice += cartArr[j].prod_price;
    }
    document.querySelector("#cart-price").innerHTML = "Total: PHP " + totalPrice;
  }

  // JSON Stringify
  document.querySelector("#customer-order").value = JSON.stringify(cartArr);
}

function removeItem(i)
{
  // Splice
  cartArr.splice(i,1);

  // Check if empty
  if(cartArr.length <= 0)
  {
    noItemCtr = 0;
  }

  showOrder();
}




