const express = require( 'express' );
const hbs = require('hbs');

const app = express();
const port = 4000;

// * Handlebars
app.set( 'view engine', 'hbs' );
hbs.registerPartials( __dirname + '/views/partials' );

// * Servir contenido estático
app.use( express.static( 'public' ) );

app.get('/', ( req, res ) => {
    res.render( 'home', {
        nombre: 'Alexis',
        titulo: 'Ejemplo en Node'
    });
});

app.get('/generic', ( req, res ) => {
    res.sendFile( __dirname + '/public/generic.html' );
});

app.get('/elements', ( req, res ) => {
    res.sendFile( __dirname + '/public/elements.html' );
});

// * Para que entre si no exite la ruta en la que estan accediendo
app.get('*', ( req, res ) => {
    res.send( '404 | Page not found' );
    // res.sendFile( __dirname + '/public/404.html' );
});

app.listen( port, () => {
    console.log( `Example app listen at http://localhost:${ port }` );
});