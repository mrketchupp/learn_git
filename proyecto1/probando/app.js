// Cargar variables del archivo .env
require('dotenv').config();

const apiKey = process.env.API_KEY;
let port = 3000;
let debug = true;

console.log(`apiKey: ${apiKey}`);
console.log(`Servidor corriendo en puerto ${port}`);
if (debug) {
    console.log('Modo depuración activado');
}
