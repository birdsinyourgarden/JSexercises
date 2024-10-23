// otra forma de hacerlo 
/*function contador() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}*/

function contador() {
    let cuenta = 1; // inicializado la variable de la cuenta en 1 
    return () => cuenta++; // retornar una función que incrementa la cuenta 
}

// la función contador permite crear un contador que comienza en 1 
// y se incrementa cada vez que se llama a la función retornada. 
// Usando los closures, el valor de cuenta se mantiene privado y 
// sólo se puede modificar a través de la función. 
// Y para qué es útil esto? 
// para mantener el estado interno en JavaScript 
// sin exponer la variable directamente.

const incrementar = contador();
console.log(incrementar()); // Muestra: 1
console.log(incrementar()); // Muestra: 2
console.log(incrementar()); // Muestra: 3
console.log(incrementar()); // Muestra: 4