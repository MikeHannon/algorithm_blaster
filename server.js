var mongoose = require( 'mongoose' ),
    express  = require( 'express' ),
    parser   = require( 'body-parser' ),
    path     = require( 'path' ),
    root     = __dirname,
    port     = process.env.PORT || 8080,
    app      = express();


app.use( express.static( path.join( root, 'client' )));
app.use(express.static(path.join(root, 'bower_components')));
app.use( parser.urlencoded( { extended: true } ));
app.use( parser.json() );


app.set( 'views', path.join( root, 'server/views' ));

// require( './server/config/mongoose.js' );
// require( './server/config/routes.js' )( app );

app.listen( port, function() {
  console.log( `server running on port ${ port }` );
});
