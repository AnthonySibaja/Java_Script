let mi_Numero = "10";

console.log(typeof mi_Numero);

let edad = Number(mi_Numero);

console.log(typeof edad)

if (edad >= 18) {
    console.log("puede votar")
} else {
    console.log("no puede votar");
}

let votar = (edad >= 18) ? "puede" : "no puede";
console.log(votar);