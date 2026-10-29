const condition = false
    ;

function myFunction() {
    const promise = new Promise((resolve, reject) => {
        if (condition) { resolve("Promesa resuelta"); }
        else { reject("Promesa rechazada"); }
    })
    return promise;
}

function myFunction2() {
    const promise = new Promise((resolve, reject) => {
        if (condition) { resolve("Promesa resuelta 2"); }
        else { reject("Promesa rechazada"); }
    })
    return promise;
}

async function handlepromises() {
    try {
        const response = await myFunction(); //Espera a que se realize la promesa y la guarda en la variable
        const response2 = await myFunction2();
        console.log(response);
        console.log(response2);
    }
    catch (reject) {
        console.log(reject); //Muestra el mensaje de la promesa rechazada
    }
}

handlepromises();