//importamos los paquetes
const express = require('express');
const path = require('path');
const hbs = require('express-handlebars')
var mongo = require('mongodb');
var assert = require('assert');

//MongoClient.connect("mongodb://localhost:27017/tayle-web", { useNewUrlParser: true });
//Asociamos express a la app
const app = express();

//configuramos nuestro servidor para archivos locales
app.use(express.static('public'));

//configuramos la app para usar handlebars
//hbs recibe un objeto, layoutsDir nos sirve para direccionar el response.render a la carpeta de mis layouts

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var products = require('./products.js');

//RUTA ESTÁTICA
//Se hace un llamado por página
app.get('/', function(request, response){
    //para llamar algun archivo se debe usar path.join(__dirname, 'ruta del archivo')
        //var ruta = path.join(__dirname, 'public/index.html');
        var contexto = {
        };
    response.render('index', contexto);
});

app.get('/optica', function(request, response){
    var contexto = {
        products: [
            {
                name: 'El nombre',
                img: 'La imagen',
                price: 'El precio'
            },
            {
                name: 'El nombre2',
                img: 'La imagen2',
                price: 'El precio2'
            },
            {
                name: 'El nombre2',
                img: 'La imagen2',
                price: 'El precio2'
            },
            {
                name: 'El nombre2',
                img: 'La imagen2',
                price: 'El precio2'
            },
            {
                name: 'El nombre2',
                img: 'La imagen2',
                price: 'El precio2'
            }
          ]
    };
    response.render('optica', contexto);
    /*
    var resultArray = [];
    mongo.connect(url, function(err, db){
        assert.equal(null, err);
        var cursor = db.collection('productos').find();
        cursor.forEach(function(doc, err){
            assert.equal(null, err);
            resultArray.push(doc);
        }, function () {
            db.close;   
            res.render('optica', {items: resultArray});
        });
    });
    */

  
});


//RUTA DINÁMICA
//Al usar /: estoy usando una variable
app.get('/optica/:producto', function(request, response){
    var prod = request.params.producto;
    response.send('página de producto: '+prod);
});

app.listen(8080);