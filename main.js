var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenuIcon = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu');
var shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
var closeProductDetailIcon = document.querySelector('.product-detail-close');
var shoppingCartList = document.querySelector('#shoppingCartContainer');
var productDetail = document.querySelector('#productDetailContainer');
var cardsContainer = document.querySelector('.cards-container');
var darkDiv = document.querySelector('.dark');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCartList);
closeProductDetailIcon.addEventListener('click',closeProductDetail);


function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive');
    shoppingCartList.classList.add('inactive');
    productDetail.classList.add('inactive');
}
function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive');
    productDetail.classList.add('inactive');
    productDetail.classList.add('inactive');
}
function toggleShoppingCartList (){
    shoppingCartList.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
    productDetail.classList.add('inactive');
}
function openProductDetail (){
    productDetail.classList.remove('inactive');
    darkDiv.classList.remove('inactive');
    shoppingCartList.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}
function closeProductDetail (){
    productDetail.classList.add('inactive');
    darkDiv.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Pantalla',
    price: 2000,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'PC',
    price: 150,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

{/* <div class="product-card">
    <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
    <div class="product-info">
        <div>
            <p>$120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
        </figure>
    </div>
</div> */}

function renderProducts(arr){
    for (const product of arr) {
        const productCard = document.createElement ('div');
        productCard.classList.add('product-card');

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click',openProductDetail);

        const productInfo = document.createElement ('div');
        productInfo.classList.add('product-info');

        const productInfoDiv = document.createElement ('div');

        const productPrice = document.createElement ('p');
        productPrice.innerText = '$' + product.price

        const productName = document.createElement ('p');
        productName.innerText = product.name

        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);

        const productInfoFig = document.createElement ('figure');

        const productImgCart= document.createElement ('img');
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");

        productInfoFig.appendChild(productImgCart);

        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFig);

        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);

        cardsContainer.appendChild(productCard);
    }
}
renderProducts(productList);

