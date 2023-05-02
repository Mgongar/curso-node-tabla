

const colors = require('colors');
const { option } = require('yargs');
const { crearArchivo }= require('./helpers/multiplicar2');

const argv = require('./config/yargs');//aquí importamos




console.log(argv);


console.log('base: yargs', argv.b);


// const base=5 ;


//en esta parte corremos la aplicación
crearArchivo( argv.b, argv.l, argv.h )
.then(nombreArvhivo=> console.log(nombreArvhivo.rainbow, 'creado'))
.catch( err => console.log(err));