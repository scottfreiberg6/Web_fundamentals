var bannerImage = document.querySelector('banner-image');
var cartCount= document.querySelector('#cart-count');

function nextImage() {
    bannerImage.src = './ad';
}

function prevImage() {
    bannerImage.src ='./ad';
}

function addItem () {
    cart_Count.innerText++;
}

