function f(cb) {
    const p1 = "parametro1";
    const p2 = "parametro2";

    cb(p1, p2);
}

function g(param1, param2) {
    console.log(param1, param2);
}

f(g);

f((param1, param2) => {
    console.log(param1, param2);
});

// Repetir funciones
function repeat(times, cb) {
    for (let i = 0; i < times; i++) {
        cb(i);
    }
}

repeat(3, (i) => {
    console.log(`iteración ${i}`);
});

// funciones anonimas con array

const arr = [20, 50, 80];

arr.forEach((number) => {
    console.log(number);
});