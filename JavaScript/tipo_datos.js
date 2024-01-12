//tipo script 
var nombre = "carlos";
console.log(nombre);

//tipo numeros
var numero = 1000;
console.log(numero)

//tipo objeto
var objeto = {
    nombre: "juan",
    apellido: "perez",
    numero: 123123123
}
console.log(objeto);

//typeof  ver tipo
nombre = 10;
console.log(typeof nombre);

//  tipo boolean

var tipo = true;
console.log(tipo);


// tipo funcion
function func() {

}
console.log(func);

// tipo symbol
var simbolo = Symbol("mi symbol");
console.log(simbolo);

// tipo clases
class persona {
    constructor(nombre, apellido) {
        this.apellido = apellido;
        this.nombre = nombre;
    }
}
console.log(persona);

//tipo undefined
var x;
console.log(x);


//Null no hay valor
var y = null;
console.log(y);

//tipo arreglos
var autos = ['bmw', 'audi', 'mazda'];
console.log(autos);

//tipo vacios
var z = '';
console.log(z);
