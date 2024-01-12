function Persona(nombre, apellido, correo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.nombreC = function () {
        return this.nombre + this.apellido;
    }

}



Persona.prototype.tef = '383838383';

let Padre = new Persona('juan', 'perez', 'pere@gmail.com');
Padre.tef = '323423423'

console.log(Padre.nombreC());
let madre = new Persona('maria', 'san juan', 'maria@gmail.com');
console.log(madre);

Padre.nombre = 'carlos';
console.log(Padre);

/////////////2/////////////

let persona1 = {
    nombre: 'pepe',
    apellido: 'sanjuan',
    nombreCom: function (titulo, tef) {
        return titulo + ': ' + this.nombre + this.apellido + ', ' + telefono;
    }
}
let persona2 = {
    nombre: 'jose',
    apellido: 'figueres',

}
////////////call////////////////
persona1.nombreC();
console.log(persona1.nombreC.call(persona2, 'jefe', '383838383'));
console.log(persona1.nombreC.call(persona1, 'ing', '878787877'));

//////////////apply/////////////////

let arreglo = ['ing', '57474747'];
console.log(persona1.nombreC.apply(persona2, arreglo));

