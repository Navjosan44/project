const products = [

{
id:1,
name:"Laptop",
price:50000,
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Phone",
price:25000,
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Headphones",
price:3000,
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"Smart Watch",
price:7000,
image:"https://picsum.photos/300?4"
}

];

let cart=[];

const productsDiv=document.getElementById("products");

products.forEach(product=>{

productsDiv.innerHTML+=`

<div class="product">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addToCart(${product.id})">
Add to Cart
</button>

</div>

`;

});

function addToCart(id){

const item=products.find(p=>p.id===id);

const exist=cart.find(p=>p.id===id);

if(exist){

exist.quantity++;

}

else{

cart.push({

...item,

quantity:1

});

}

updateCart();

}

function updateCart(){

const cartItems=document.getElementById("cart-items");

cartItems.innerHTML="";

let total=0;

let count=0;

cart.forEach(item=>{

total+=item.price*item.quantity;

count+=item.quantity;

cartItems.innerHTML+=`

<div class="cart-item">

<div>

<h4>${item.name}</h4>

<p>

₹${item.price}

x

${item.quantity}

</p>

</div>

<div>

<button onclick="increase(${item.id})">+</button>

<button onclick="decrease(${item.id})">-</button>

<button class="remove"

onclick="removeItem(${item.id})">

Remove

</button>

</div>

</div>

`;

});

document.getElementById("total").innerHTML=total;

document.getElementById("cart-count").innerHTML=count;

}

function increase(id){

cart.find(item=>item.id===id).quantity++;

updateCart();

}

function decrease(id){

const item=cart.find(item=>item.id===id);

item.quantity--;

if(item.quantity<=0){

cart=cart.filter(i=>i.id!==id);

}

updateCart();

}

function removeItem(id){

cart=cart.filter(item=>item.id!==id);

updateCart();

}