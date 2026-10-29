function a() {
    console.log("a");
}

a();

function b() {
    return "b";
}

console.log(b());
// No es necesario poner parentesis si solo hay un argumento
const c = strg => strg;//No es neseario el return si es una sola linea de codigo


console.log(c("c"));