window.addEventListener('load', function(){
    var elementosCarrito = JSON.parse(localStorage.getItem('carrito'));
    if(elementosCarrito == null){
        elementosCarrito = [];
    }
    

    function renderCarrito(){
        let total = 0;
        elementosCarrito.forEach(function(elem){
            total += parseInt(elem.price);
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
                name: elem.getAttribute('data-name'),
                price: elem.getAttribute('data-price'),
                img: elem.getAttribute('data-img'),
            };

            elementosCarrito.push(obj);
            
            console.log(elementosCarrito);
            localStorage.setItem('carrito', JSON.stringify(elementosCarrito));

            renderCarrito();
/*
            let variables = new URLSearchParams();
            variables.append('name', obj.name);

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
*/
        });
    });
});