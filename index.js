//importamos los paquetes
const express = require('express');
const path = require('path');
const MongoClient = require('mongodb').MongoClient;

const hbs = require('express-handlebars')
var mongo = require('mongodb');
var assert = require('assert');

//Asociamos express a la app
const app = express();

/* ESTE BLOQUE ESTÁ OBSOLETO
const url = 'mongodb://localhost:27017';
const dbName = 'tayle-web';

const client = new MongoClient(url);
var db = null;

client.connect(function (err) {
    if (err) {
        console.error(err);
        return;
    }
    db = client.db(dbName);
});
*/

//configuramos nuestro servidor para archivos locales
app.use(express.static('public'));

//configuramos la app para usar handlebars
//hbs recibe un objeto, layoutsDir nos sirve para direccionar el response.render a la carpeta de mis layouts

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');

var bodyParser = require('body-parser');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());

//var products = require('./products.js');

//RUTA ESTÁTICA
//Se hace un llamado por página
app.get('/', function (request, response) {
    //para llamar algun archivo se debe usar path.join(__dirname, 'ruta del archivo')
    //var ruta = path.join(__dirname, 'public/index.html');
    // var contexto = {
    //   };
    response.render('index');
});

app.get('/optics', function (request, response) {
    const collection = db.collection('productos');
    
    collection.find({}).toArray(function(err, docs) {
        if (err){
            console.error(err);
            response.send(err);
            return;
        }
        var contexto = {
            productos: docs,
        };
        response.render('optics', contexto);
    });
});


//RUTA DINÁMICA
//Al usar /: estoy usando una variable
app.get('/optics/:producto', function (request, response) {
    var prodName = request.params.producto;
    const collection = db.collection('productos');
    collection.find({"name": prodName}).toArray(function(err, docs) {
        if (err){
            console.error(err);
            response.send(err);
            return;
        }
        var contexto = {
            productos: docs,
        };
        
        response.render('product', contexto);
    });
});


var carrito = [];

app.post('/api/agregarAlCarrito', function(req, res){

    

    let name = req.body.name;
    console.log(name);

    const collection = db.collection('productos');

    let glasses = collection.find({"name": name});

    carrito.push(glasses);

    res.send(carrito);
});


app.get('/checkout', function(req, res){
    var contexto = {
        carrito: carrito,
    };
    res.render('checkout', contexto);
});

app.listen(8080);