window.addEventListener('load', function(){

    let carrito = document.querySelector('.lista-carrito');

    var elementosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if(elementosCarrito == null){
        elementosCarrito = [];
    }

    elementosCarrito.forEach(function(elem){
        carrito.innerHTML += `<tr> <td><img src="${elem.img}" alt=""></td><td>${elem.name}</td><td>${elem.price}</td></tr>`;
    });

});