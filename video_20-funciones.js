//funciones declaradas (Function Declarations)
function sayhello() {
    console.log("Hello!");
}

sayhello();
//funciones expresadas (Function Expressions)
const goodbye = function () {
    console.log("Goodbye!");
}
goodbye();
//funciones con argumentos
function saysomething(msg) {
    console.log(msg);
}

saysomething("Bocadillo de atun");

//funciones con argumentos: suma
function sum(num1, num2) {
    console.log(num1 + num2);
}

sum(5, 10);

//valores por defecto

function greet(name = "Invitado") {
    console.log(`Hola ${name}`);
}

greet("Juan");
greet(); // Usará el valor por defecto "Invitado"

//return / delvover

function multiply(a, b) {
    return a * b;
}

const result = multiply(3, 4);

result; // Devuelve 12