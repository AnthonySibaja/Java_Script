let mes = 0;
let estacion = 'valor desconocido'

switch (mes) {
    case 1: case 2: case 12:
        estacion = 'invierno';
        break;
    case 3: case 4: case5;
        estacion = 'verano';
        break;
    case 6: case 7: case 8:
        estacion = 'otoño';
        break;
    case 9: case 10: case 11:
        estacion = 'primavera';
        break;
    default:
        estacion = "desconocido";
        break;
}

console.log(estacion);
