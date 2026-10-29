console.log("fetch()");

fetch("https://jsonplaceholder.typicode.com/users")// Solicita los datos de la API de usuarios
    //Fetch() es una promesa y hay que gestionarala mediante .then() o async/await
    .then((response) => response.json()) //Convierte la respuesta en un objeto JSON
    .then((data) => console.log(data)) //Muestra los datos/usuarios en la consola
    .catch(() => console.log("error")); //Muestra el error en caso de que la promesa sea rechazada