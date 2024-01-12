//forma 1 //////////////////////////////////////////////////////
let objeto = {
    nombre: 'pepe',
    apellido: 'mercurio',
    correo: 'jdsjs@gmail.com',
    edad: 22,
    nombreC: function () {
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.correo);
console.log(persona.nombreC());



//forma 2/////////////////////////////////////////////////////
let persona2 = new Object();
persona2.nombre = 'carlos';
persona2.apellido = 'sanjuan';
persona2.direccion = 'la luna';
persona.telefono = 3838383838;


console.log(persona2.telefono);


//acceder a las propiedades //////////////////////////////
//1
console.log(persona.correo);
//2
console.log(persona[apellido]);
//3 for in
for (let i in persona) {
    console.log(i);
    console.log(persona[i]);
}

////////// AGREGAR PROPIEDADES/////////////////////////////

//1
persona.tel = '383483838';
console.log(persona);

//eliminar

delete persona.tel;


////////////Imprimir objetos//////////////////////////////

//////Concatenar cada valor
//1
console.log(persona.nombre + ' ' + persona.apellido + '...');

//2
for (nombre in persona) {
    console.log(persona[i]);
}

//3
let personaArray = Object.values(persona);
console.log(personaArray);

//4
let personaString = JSON.stringify(persona);


