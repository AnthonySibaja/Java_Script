let x = 10;//tipo primitivo

function cambiarV(a){
    a =20;
    return;
}
//paso por valor

cambiarV(x);//10
console.log(x);
console.log(cambiarV(a));

//paso por referencia

const persona = {
    nombre:'pepe',
    apellido:'joseluis'
}

function cambiarVO(p1){
    p1.nombre ='roberto';
    p1.apellido ='baberto';
}
//paso por referencia lit
cambiarVO(persona);
console.log(persona);

