function a() {
    console.log("Function is called a");
}

function b() {
    console.log("Function is called b");
}
console.log(a);

function f(cb) {
    console.log("Iside function f");
    //Console.log(cb()); // Llamada a la función callback
    cb();
}

f(a);
f(b);

