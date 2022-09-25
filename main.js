var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenuIcon = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu');
var shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
var shoppingCartList = document.querySelector('.product-detail');
var cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenuIcon.addEventListener('click',toggleMobileMenu);
shoppingCartIcon.addEventListener('click',toggleShoppingCartList);

function toggleDesktopMenu (){
    desktopMenu.classList.toggle('inactive')
    shoppingCartList.classList.add('inactive')
}
function toggleMobileMenu (){
    mobileMenu.classList.toggle('inactive')
    shoppingCartList.classList.add('inactive')
}
function toggleShoppingCartList (){
    shoppingCartList.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
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