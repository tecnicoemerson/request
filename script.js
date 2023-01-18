function listaUsuarios(){
    const url = 'http://jsonplaceholder.typicode.com/users';

    fetch(url).then((Response) => {
        return Response.json();
    }).then((data) => {
        console.log(data)
    }).catch((error) => error)
}

listaUsuarios();