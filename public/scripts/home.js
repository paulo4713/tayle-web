window.addEventListener('load', function(){
var arregloServicios = [
    {
        img: './icons/optotype.png',
        titulo: 'Exámen Visual Detallado',
        descripcion: 'Durante este exámen, se medirá como se desempeña su visión de lejos en comparación con la mayoría de personas.',
        boton: 'Conoce más',
    }
    ,
    {
        img: './icons/test-glasses.png',
        titulo: 'Servicio Óptico Completo',
        descripcion: 'Una evaluación completa incluye el examen refractivo, binocular, examen de la percepción visual y examen de salud ocular.',
        boton: 'Conoce más',
    }
    ,
    {
        img: './icons/contact-lens.png',
        titulo: 'Estudio de Lentes de Contacto',
        descripcion: 'Si usa o desea usar lentes de contacto, necesita un examen de lentes de contacto además de un examen completo de la vista.',
        boton: 'Conoce más',
    }
    ,
    {
        img: './icons/eye-drops.png',
        titulo: 'Cuidado en Salud Visual',
        descripcion: 'Nos preocupamos por el correcto funcionamiento de ojos, nervios y músculos involucrados en el proceso de la visión.',
        boton: 'Conoce más',
    }
];

function constructorServicio(objeto) {
    return `<article class="services__wrap__item">
                <img src="${objeto.img}" class="services__wrap__item__img" alt="Ícono de ${objeto.titulo}">
                <h4>${objeto.titulo}</h4>
                <p class="services__wrap__item__description">${objeto.descripcion}</p>
                <a href="#">${objeto.boton}
                    <i class="fas fa-angle-right"></i>
                </a>
            </article>`
}

var servicios = document.querySelector('.services__wrap');

for (var i = 0; i < arregloServicios.length; i++) {
    servicios.innerHTML += constructorServicio(arregloServicios[i]);
}

var botonPersonajes = document.querySelectorAll('.tabs__buttons__link');

function openServiceArea(serviceArea) {
    var x = document.querySelectorAll('.service_area');
    for (var i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.querySelector(serviceArea).style.display = "block";
}

botonPersonajes[0].addEventListener('click', function (event) { openServiceArea('.visual_exam'); });
botonPersonajes[1].addEventListener('click', function (event) { openServiceArea('.visual_health'); });
botonPersonajes[2].addEventListener('click', function (event) { openServiceArea('.visual_rehab'); });


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


function cambiarBlur() {
    var blur = output.innerText/20;
    if (blur>1) {
        document.querySelector('.interaction__background').style="filter:blur("+blur+"px)";
    } else {
        document.querySelector('.interaction__background').style="filter:blur(0)";
    }
    
}

var interevaloBanner = setInterval(cambiarBlur, 10);

});