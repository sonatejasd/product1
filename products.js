let displayFlag=false;
let productsDiv = document.getElementById("products");
let productCount = 0;
let allProductsData;

const productDiv = document.getElementsByClassName("product");
const modal = document.getElementById("productModal");



function fetchData() {
  fetch("https://fakestoreapi.com/products")
  .then(function(response){
    return response.json();
  })
  .then(function(products){
    allProductsData=products;
    getProduct(products)
  })
  .catch(function(){
    console.log("unable to fetch product");
  })
}

fetchData();

function getProduct(products){
  products.forEach(function(product) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
      const productImg = document.createElement("img");
      productImg.src = product.image;
      productImg.alt = "product image";
      productImg.title = product.description;
      const productTitle = document.createElement("p");
      productTitle.textContent = product.title;
      const productPrice = document.createElement("p");
      productPrice.textContent = "$"+product.price;
      const addProduct = document.createElement("button");
      addProduct.textContent = "add to cart";
      addProduct.addEventListener("click",increment);
      productDiv.append(productImg, productTitle,productPrice,addProduct);
      productsDiv.appendChild(productDiv);
  });
}

for(let i=0; i<productDiv; i++){
  productDiv[i].addEventListener("click",function(){
    console.log(productData[2].title);
    modal.style.display = "block";
    const imageDiv = document.createElement("img");
    imageDiv.src = product[i].image;
    const titleDiv = document.createElement("div");
    titleDiv.textContent = product[i].title;
    const descriptionDiv = document.createElement("div");
    descriptionDiv.textContent = product[i].description;
    const priceDiv = document.createElement("div");
    priceDiv.textContent = product[i].price;
    const addProduct = document.createElement("button");
    addProduct.textContent = "add to cart"
    const cancelButton = document.createElement("div");
    modal.append(titleDiv,imageDiv,descriptionDiv,priceDiv,addProduct,cancelButton)
  });
}


function increment(){
    document.getElementById("counter").textContent = ++productCount;
}

function loginModal(){
    if(!displayFlag){
        let modal = document.getElementById("loginModal");
        modal.style.display = "inline-block";
        displayFlag=true;

    }
    else{
        document.getElementById("loginModal").style.display = "none";
        displayFlag=false;
    }
    
}

function changeTheme(){
    document.querySelector(".main").classList.toggle("theme");
}