window.addEventListener('load', function(){
    var elementosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if(elementosCarrito == null){
        elementosCarrito = [];
    }
    

    function renderCarrito(){
        let total = 0;
        elementosCarrito.forEach(function(elem){
            total += parseInt(elem.precio);
        });
        document.querySelector('.carrito').innerText = 'Total: $' + total;
        document.querySelector('.quantity').innerText = elementosCarrito.length;
    }

    renderCarrito();
    
    document.querySelector('.clear_carrito').addEventListener('click', function(){
        localStorage.removeItem('carrito');
        renderCarrito();
    });

    document.querySelectorAll('.addtocart').forEach(function(elem){
        elem.addEventListener('click', function(){

            let obj = {
                title: elem.getAttribute('data-title'),
                precio: elem.getAttribute('data-price'),
                img: elem.getAttribute('data-img'),
            };

            elementosCarrito.push(obj);

            localStorage.setItem('carrito', JSON.stringify(elementosCarrito));

            renderCarrito();

            let variables = new URLSearchParams();
            variables.append('titulo', obj.titulo);

            fetch('/api/agregarAlCarrito', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: variables.toString(),
                })
                .then(function(respuesta) {
                    return respuesta.text();
                })
                .catch(function(error){
                    console.error(error);
                })
                .then(function(mensaje){
                    console.log(mensaje);
                });
        });
    });
});