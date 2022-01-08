const express = require( 'express' );
const app = express();
const port = 4000;

// * Servir contenido estático
app.use( express.static( 'public' ) );

// app.get('/', ( req, res ) => {
//     res.send( 'Home page' );
// });

app.get('/hola-mundo', ( req, res ) => {
    res.send( 'Home Mundo en su respetiva ruta' );
});

// * Para que entre si no exite la ruta en la que estan accediendo
app.get('*', ( req, res ) => {
    // res.send( '404 | Page not found' );
    res.sendFile( __dirname + '/public/404.html' );
});

app.listen( port, () => {
    console.log( `Example app listen at http://localhost:${ port }` );
});