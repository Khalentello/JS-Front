var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');
var mobileMenuIcon = document.querySelector('.menu');
var mobileMenu = document.querySelector('.mobile-menu');
var shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
var shoppingCartList = document.querySelector('.product-detail');

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