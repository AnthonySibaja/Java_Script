let a = 1, b = 2, c = 3;

a += 3; //== a = a + 3;
console.log(a);

a -= 2; //== a = a - 2;
console.log(a);

/*  
otras operaciones que sirven:
/=
*=
%=

*/

//OPERADORES DE COMBINACION


// MISMO VALOR 
let z = a == b; // Revisa el valor sin importar el tipo
console.log(z);

z = a === c; // revisa el valor pero tambien el tipo
console.log(z);



//DIFERENTE VALOR   
z = a != b; // Revisa el valor sin importar el tipo
console.log(z);

z = a !== c; // revisa el valor pero tambien el tipo
console.log(z);


//MAYOR y IGUAL A QUE 
z = a < b;
console.log(z);

z = a <= b;
console.log(z);


//MENOR Y IGUAL A QUE 
z = a > b;
console.log(z);

z = a >= b;
console.log(z);

let x = 10;

//PAR e impar 
if (a % 2 == 0) {
    console.log("es Par");
} else {
    console.log("es impar")
}


//ejemplo #1

let edad = 20, adulto = 18;

if (edad >= adulto) {
    console.log("es un adulto");
} else {
    console.log("es menor");
}

//ejemplo #2 and

a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("dentro de rango")
} else {
    console.log("fuera de rango")
}

//ejemplo #3 or

let vacaciones = true;
let dia_descanso = false;

if (vacaciones || dia_descanso) {
    console.log("puede asistir")
} else {
    console.log("no puede asistir")
}

//ejemplo#4 operador ternario

let resultado = (3 > 2) ? "verdadero" : "Falso";
console.log(resultado);

let numero = 9
resultado = (numero % 2 == 0) ? "numero par" : "numero impar";
console.log(resultado);

// NAN

let mi_Numero = "10x";

console.log(typeof mi_Numero);

let edadd = Number(mi_Numero);

console.log(typeof edadd)

if (isNaN(edadd)) {

    console.log("no es un numero")

} else {

    if (edadd >= 18) {
        console.log("puede votar")
    } else {
        console.log("no puede votar");
    }
}

//Ejemplo #5
let o = 5;
let y = 10;
let t = ++x + y--;
console.log(t);
console.log(x);
console.log(y);

resultado = 4 + 5 * 6 / 3;
console.log(resultado);