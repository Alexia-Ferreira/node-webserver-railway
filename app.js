const express = require('express')
const hbs = require('hbs');
const app = express()
require('dotenv').config();
const port=process.env.PORT;
//para utilizar variables de entorno que contienen los purtos y demas datos

//HANDELBARS

//configuramos para usar handelbars
//al configurar por defecto, cuando le pedimos un vista esta se debe encotrar en una carpeta llamada views
app.set('view engine', 'hbs');

//para crear htmls parciales como componentes
hbs.registerPartials(__dirname+'/views/partials', function(err){

})

//Servir contenido estatico

//1. la parte de la carpeta publica tiene prioridad sobre las rutas que se definen mas adelante
app.use(express.static('public'));

//si la ruta o carpeta /hola-mundo no se encuentra en la carpeta public se ejecuta el siguiente codigo
app.get('/hola-mundo',  (req, res) =>{
    res.send('Hello World en su respectiva ruta')
})

app.get('/hola-mundo',  (req, res) =>{
    res.send('Hello World en su respectiva ruta')
})


//renderisamos los archivos hbs
app.get('/',  (req, res) =>{
    //no  hace falta la extension .hbs pq ya lo configuramos
    //el segundo parametro son las informaciones que enviamos a la vista
    res.render('home',{
        nombre:'Alexia Ferreira',
        titulo:'Curso de Node'
    });
})

//para que no sea necesario escribir generic.html en la url del navegador
//podemos crear rutas para cada archivo
app.get('/generic',  (req, res) =>{
    /*res.sendFile(__dirname+'/public/generic.html');*/
    res.render('generic',{
        nombre:'Alexia Ferreira',
        titulo:'Curso de Node'
    });
})

//para que no sea necesario escribir generic.html en la url del navegador
//podemos crear rutas para cada archivo
app.get('/elements',  (req, res) =>{
    /*res.sendFile(__dirname+'/public/elements.html');*/
    res.render('elements',{
        nombre:'Alexia Ferreira',
        titulo:'Curso de Node'
    });
})


//si no se encuntra en la carpeta publica ni en las rutas definidas mas arriba
//se ejecuta el siguiente codigo
app.get('*',  (req, res) =>{
    //construimos el path completo
    //__dirname es la direccion en donde se encuentra instalado o corriendo la aplicacion
    res.sendFile(__dirname+'/public/404.html');
})


app.listen(port,()=>{
    console.log('Ejemplo corriendo en el puerto '+port)
})