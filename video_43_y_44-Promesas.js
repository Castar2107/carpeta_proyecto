

const condition = true;

function myFunction() { //Controla la promesa
    const promise = new Promise((resolve, reject) => {
        if (condition) { resolve("Promesa resuelta"); }
        else { reject("Promesa rechazada"); }
    })
    return promise;
}

function myFunction2() { //Controla la promesa
    const promise = new Promise((resolve, reject) => {
        if (condition) { resolve("Promesa resuelta 2"); }
        else { reject("Promesa rechazada"); }
    })
    return promise;
}

myFunction()
    .then((resolve) => {
        console.log(resolve);
        return myFunction2(); //Si la primera promesa se resuelve, se ejecuta la segunda promesa
    })
    .then((resolve) => console.log(resolve))
    .catch((reject) => console.log(reject)); //Muestra el mensaje de la promesa resuelta