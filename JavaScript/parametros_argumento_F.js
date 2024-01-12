/*
let sumer = function (a=9, b=3) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    return (a + b);
}

resultado = sumer(5, 2);
console.log(resultado);
*/

let resultado = sumarTodo(5, 3, 15, 16, 4, 8, 9);

function sumarTodo() {
    let suma = 0;

    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
        
    }
    return suma;
}

console.log(resultado);