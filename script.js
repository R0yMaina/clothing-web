const products = [
    { name: "Classic T-shirt", price: 20, Image:
        "https://via.placeholder.com/150"
    },
    { name: "Hoodie", price: 40, Image:
        "https://via.placeholder.com/150"
    },
    { name: "Sneakers", price: 80, Image:
        "https://via.placeholder.com/150"
    },
    { name: "summerdress", price: 100, Image:
        "https://via.placeholder.com/150" },
];

let cart = [];

const productGrid =
document.getElementById("product-grid");
const cartItems =
document.getElementById("cart-items");
const totalPrice =
document.getElementById("total-price");

function updatecart() {
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item) => {
        const Li = document.createElement("li");
        Li.textContent = `${item.name} - $$
        {item.price}` ;
        cartItems.appendChild(Li);
        total += item.price;
    });
    totalPrice.textContent = `$${total}` ;
}

products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML =  `
    <img src="${product.image}" alt="$
    {product.name}" />
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
    <button onclick='addTocart($
        {JSON.stringify(product)}
    )' >Add to cart </button>
    `;
    productGrid.appendChild(card);``
});

 function addTocart(product) {
    cart.push(product);
    updatecart();
 
 }

 function scrollToProducts() {
    document.getElementsById("products").scrollintoview
    ({ behavior: "smooth"});
 }

 document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Message sent! We'll get back to you soon.");
    this.reset();
 });