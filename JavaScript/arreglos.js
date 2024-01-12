// let autos = new Array('bmw','mercedez','volvo'); es viejo ya
const autos = ['toyota', 'mazda', 'nissan'];
console.log(autos);

console.log(autos[1]);

//modificar
autos[1] = 'audi';

//agregar
autos.push('honda');

autos[autos.length] = "supra";

autos[5] = "izusu"

for (let cont; cont < autos.length; cont++) {
    console.log(i + ':', autos[cont]);
}


//preguntar


console.log(Array.isArray(autos));
console.log(autos instanceof Array);
