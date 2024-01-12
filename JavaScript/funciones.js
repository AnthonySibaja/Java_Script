//HOISTING


function miFuncion(a, b) {
    return a + b;
}

let resultado = miFuncion(5, 8);

console.log(resultado);

//funciones fechas js

const sumarFuncionTipoFlecha = (a, b) => a + b;

console.log(sumarFuncionTipoFlecha);


//declaracion

let x = function (a, b) { return a + b };

resultado = x(1, 2);

console.log(resultado);

//self-invo

(function () {
    console.log("Ejecucion la funcion");
    //cuantos argumentos tiene
    console.log(arguments.length);
})();

//tipo de dato

console.log(typeof miFuncion);

var miFuncionTexto= miFuncion.toString();
console.log(miFuncionTexto);



