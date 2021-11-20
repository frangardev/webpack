//Lo primero es traer path (path ya viene con node):
const path = require('path');
//Creamos un modulo que vamos a exportar con la configuración deceada:
module.exports = {
    //Entri es el punto de entrada de nuestra aplicacion, es decir el main o el index
    entry: "./src/index.js",
    //Ouput es hacia donde va mandar webpack lo que haga, por defecto es la carpeta dist
    output:{
         // path es donde estará la carpeta donde se guardará los archivos
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, "dist"),
        // filename le pone el nombre al archivo final
        filename: "main.js",
    },
    //Que va a trabajar
    resolve :{
        // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
        extensions : [".js"]
    }
}