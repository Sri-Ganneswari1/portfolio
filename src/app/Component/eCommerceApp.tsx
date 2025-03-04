<!DOCTYPE html>
<html lang="en">

<head>
  <title>Shopping Cart</title>
  <style>
    body {
      font-family: 'Verdana', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
    }

    header {
      background: lightsalmon;
      padding: 25px;
    }

    header button {
      background-color: #ffffff;
      border: none;
      color: black;
      font-size: 18px;
      padding: 10px 20px;
      border-radius: 20px;
      cursor: pointer;
      margin-left: 90%;
    }

    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 50px;
      padding: 100px;
      margin-top: 70px;
    }

    .product {
      border: 1px solid #ddd;
      border-radius: 10px;
      padding: 30px;
      width: 150px;
      text-align: center;
      background-color: #ffffff;
    }

    .product img {
      width: 100%;
      height: 100px;
      object-fit: cover;
      border-radius: 5px;
    }

    .product p {
      font-size: 14px;
      margin: 10px 0;
      color: #333;
    }

    .product .add-to-cart {
      background-color: #ff5722;
      color: #fff;
      border: none;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 13px;
    }

    .product .add-to-cart:hover {
      background-color: #e64a19;
    }

    .logo {
      font-size: 300%;
      position: absolute;
      left: 8%;
      margin-left: 10px;
      top: 14px;
      color: white;
    }

    .cartList {
      display: none;
      position: fixed;
      top: 20%;
      right: 10%;
      background-color: white;
      border: 1px solid #ddd;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 300px;
    }

    .cartList ul {
      list-style-type: none;
      padding: 0;
    }

    .cartList li {
      margin: 5px 0;
    }

    .quantity-controls {
      display: flex;
      justify-content: space-evenly;
      flex-direction: row;
      margin-top: 30px;
    }
  </style>
</head>

<body>
  <header>
    <div class="logo">ORANGEFOODS</div>
    <button id="cartButton">Cart</button>
    <div class="cartList">
      <h3>Cart Items:</h3>
      <ul id="cartItemsList"> </ul>
    </div>
  </header>
  <main>
    <div class="product">
      <img src="c:\Users\Sanju\OneDrive\Desktop\sravya\download1.jpg" alt="Product 1">
      <p>Product 1</p>
      <button class="add-to-cart">Add to Cart</button>
      <div class="quantity-controls">
        <button class="decrease">-</button>
        <p type="text" class="quantity" value="1">1</p>
        <button class="increase">+</button>
      </div>
    </div>
    <div class="product">
      <img src="c:\Users\Sanju\OneDrive\Desktop\sravya\download2.jpg" alt="Product 2">
      <p>Product 2</p>
      <button class="add-to-cart">Add to Cart</button>
      <div class="quantity-controls">
        <button class="decrease">-</button>
        <p type="text" class="quantity" value="1">1</p>
        <button class="increase">+</button>
      </div>
    </div>
    <div class="product">
      <img src="c:\Users\Sanju\OneDrive\Desktop\sravya\download3.jpg" alt="Product 3">
      <p>Product 3</p>
      <button class="add-to-cart">Add to Cart</button>
      <div class="quantity-controls">
        <button class="decrease">-</button>
        <p type="text" class="quantity" value="1">1</p>
        <button class="increase">+</button>
      </div>
    </div>
    <div class="product">
      <img src="c:\Users\Sanju\OneDrive\Desktop\sravya\download4.jpg" alt="Product 4">
      <p>Product 4</p>
      <button class="add-to-cart"  onclick="addToCartCustomButton(this)">Add to Cart</button>
      <div class="quantity-controls">
        <button class="decrease">-</button>
        <p type="text" class="quantity" value="1">1</p>
        <button class="increase">+</button>
      </div>
    </div>
    <div class="product">
      <img src="c:\Users\Sanju\OneDrive\Desktop\sravya\images5.jpg" alt="Product 5">
      <p class="product-name">Product 5</p>
      <button class="add-to-cart">Add to Cart</button>
      <div class="quantity-controls">
        <button class="decrease">-</button>
        <p type="text" class="quantity" value="1"  class="product-quantity">1</p>
        <button class="increase">+</button>
      </div>
    </div>

  </main>
  <script>
    const cartButton = document.getElementById('cartButton');
    const cartList = document.querySelector('.cartList');
    const cartItemsList = document.getElementById('cartItemsList');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const quantityInputs = document.querySelectorAll('.quantity');

    let cart = []
    cartButton.onclick = function () {
      if ( cartList.style.display === "block") {
        cartList.style.display = "none";
        console.log("close")
      }
      else {
        cartList.style.display = "block";
        console.log("open")

      }
    }
    console.log(cartButton)
    //add to cart

    addToCartButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        console.log("add", button)
        const productName = document.querySelectorAll('.product p')[index].textContent;
        console.log(productName,"productName ")
        cart.push({ name: productName })
        console.log("cart", cart)
        if (cart.length === 0) {
          cartItemsList.innerHTML = "<li>Your cart is empty</li>"
          console.log("list", cartItemsList)
        } else {
          cart.forEach(item => {
            console.log("item", item)
            
            const listShow = document.createElement('div');
            listShow.innerHTML = `<div>${item.name}</div>`;
            cartItemsList.appendChild(listShow);
          });
        }
      })
    })

   //  edhi increase ki
   increaseButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const quantityElement = quantityInputs[index];
        console.log('Quantity:', quantityElement);

        let currentQuantity = parseInt(quantityElement.textContent);
        console.log('Current:', currentQuantity);

        quantityElement.textContent = currentQuantity + 1;
        console.log('Updated:', quantityElement.textContent);
      });
    });

    // edhi decrease ki
    decreaseButtons.forEach((button, index) => {
      button.addEventListener('click', function () {
        const quantityElement = quantityInputs[index];
        let currentQuantity = parseInt(quantityElement.textContent);
        if (currentQuantity > 1) {
          quantityElement.textContent = currentQuantity - 1;
        }
      });
    });


  </script>

</body>

</html>