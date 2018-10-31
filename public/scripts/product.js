window.addEventListener('load', function () {
    let productImgs = document.querySelectorAll('.other_images div');


    productImgs.forEach(function (elem) {
       
        elem.addEventListener('click', function () {
            let newSrc = elem.querySelector('img').getAttribute("src");
            document.querySelector('.ppal_img img').setAttribute("src", newSrc);

            elem.setAttribute("class", "active");
        });
    });
});