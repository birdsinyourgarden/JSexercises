/* Ejercicio 2: Recorriendo Propiedades con for...in
Define un objeto car con las propiedades brand, model y year. 
Asigna valores a estas propiedades y luego muestra 
la información completa del coche en la consola. */

const car = {
    brand: 'Audi',
    model: 'A4',
    year: 1996
}

for (let prop in car) {
    console.log(`${prop}: ${car[prop]}`);
}