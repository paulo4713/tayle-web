window.addEventListener('load', function () {

    let shoppingCart = document.querySelector('.cart_list');
    let emptyMessage = document.querySelector('.empty_cart');

    var elementosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if (elementosCarrito == null) {
        elementosCarrito = [];
    }

    elementosCarrito.forEach(function (elem) {
        shoppingCart.innerHTML += `<tr class="checkout_product"><td class="item_img"><img src="${elem.img}" alt=""></td><td class="item_name">${elem.name}</td><td class="item_price the_price">${elem.price}</td></tr>`;
    });

    var cartList = document.querySelectorAll('.checkout_product');

    if (cartList.length == 0) {
        document.querySelector('.cart_list_wrap').style = "display:none";
        emptyMessage.style = "display:block";
    }

    var preciosDeProductos = [];
    var totalDeCompra = 0;

    document.querySelectorAll('.the_price').forEach(function (elem) {
        var precio = parseInt(elem.textContent);
        preciosDeProductos.push(precio);
        
    });

    preciosDeProductos.forEach(function(elem){
        totalDeCompra = totalDeCompra + elem;
    });

    document.querySelector('.totalCompra').innerHTML = totalDeCompra;
    
    document.querySelector('.pay_btn').addEventListener('click', function(){
        document.querySelector('.checkout_form').style ="display:block";
    });


});