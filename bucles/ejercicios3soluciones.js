// Soluciones: Ejercicios de Bucles en JavaScript

// 1. Bucle for
console.log("Ejercicio 1: Bucle for");

function imprimirNumeros() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

imprimirNumeros();
// Imprime: 1 2 3 4 5 6 7 8 9 10

// 2. Bucle for (suma)
console.log("\nEjercicio 2: Bucle for (suma)");

function sumarNumeros(n) {
  let suma = 0;
  for (let i = 1; i <= n; i++) {
    suma += i;
  }
  return suma;
}

console.log(sumarNumeros(5));  // Muestra: 15
console.log(sumarNumeros(10)); // Muestra: 55

// 3. Bucle while
console.log("\nEjercicio 3: Bucle while");

function contarRegresivo(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}

contarRegresivo(5);
// Imprime: 5 4 3 2 1

// 4. Bucle do-while
function adivinarNumero(intentosUsuario) {
    const numeroSecreto = Math.floor(Math.random() * 10) + 1; 
    let intentosRealizados = 0;
    let i = 0;

    console.log("Intenta adivinar el número (entre 1 y 10)");

    do {
        if (i >= intentosUsuario.length) break;
        const intento = intentoUsuario[i];
        intentosRealizados++;

        if (intento < numeroSecreto) {
            console.log("Intento" + intentosRealizados + ": Demasiado bajo");
        } else if (intento > numeroSecreto) {
            console.log("Intento" + intentosRealizados + ": Demasiado alto");
        } else {
            console.log("¡Correcto! Has adivinado en " + intentosRealizados + " intentos.");
            return;
        }

        i++;
    } while (i < intentosUsuario.length);

    console.log("No has adivinado el número. Era: " + numeroSecreto);
}

const intentosUsuario = [3, 7, 5, 2];
adivinarNumero(intentosUsuario);

// 5. Bucle for (array)
console.log("\nEjercicio 5: Bucle for (array)");

function encontrarMayor(numeros) {
  if (numeros.length === 0) return null;
  
  let mayor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

console.log(encontrarMayor([2, 5, 1, 9, 3])); // Muestra: 9
console.log(encontrarMayor([-1, -5, -2]));    // Muestra: -1

// 6. Bucle while (potencia)
console.log("\nEjercicio 6: Bucle while (potencia)");

function calcularPotencia(base, exponente) {
  let resultado = 1;
  let i = 0;
  while (i < exponente) {
    resultado *= base;
    i++;
  }
  return resultado;
}

console.log(calcularPotencia(2, 3));  // Muestra: 8
console.log(calcularPotencia(5, 2));  // Muestra: 25