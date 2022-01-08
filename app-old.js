const http = require( 'http' );

http.createServer(( req, res ) => {
    // * Para poner un estatus
    // res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.writeHead(200, { 'Content-Type': 'application/json' });
    // res.setHeader( 'Content-Disposition', 'attchment; filename=lista.csv' );
    // res.writeHead(200, { 'Content-Type': 'application/csv' });

    // const persona = {
    //     id: 1,
    //     nombre: 'Alexis'
    // }
    // res.write( JSON.stringify( persona ) );

    // res.write( 'id, nombre\n' );
    // res.write( '1, Fernando\n' );
    // res.write( '2, Maria\n' );
    // res.write( '3, Juan\n' );
    // res.write( '4, Pedro\n' );
    res.end();
}).listen( 4000 );

console.log( 'Escuchando en el puesto: ', 4000 );