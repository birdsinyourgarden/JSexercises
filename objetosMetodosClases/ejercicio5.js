/* Ejercicio 5: Definiendo una Clase y Métodos
Crea una clase llamada Rectangle que tenga propiedades width y 
height. Define un método dentro de la clase que 
calcule el área del rectángulo. Crea una instancia de la clase 
y muestra el área en la consola. */

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    calculateArea() {
        return this.width * this.height;
    }
}

export default Rectangle;

const rectangle = new Rectangle(5, 10);

console.log('Area: ', rectangle.calculateArea);