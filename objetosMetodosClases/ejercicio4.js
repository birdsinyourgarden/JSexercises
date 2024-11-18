/* Ejercicio 4: Creación de Constructor de Objetos
Crea un constructor de objetos llamado Product que 
tenga propiedades como name, price y quantity. 
Luego, crea dos instancias de Product con diferentes 
valores y muestra sus detalles. */

function Product(name, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
}

const product1 = new Product('ordenador', 1.99, 20);
const product2 = new Product('movil', 0.99, 30);

console.log(product1);
console.log(product2);