function listaUsuarios(){
    const url = 'http://jsonplaceholder.typicode.com/users';

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        let lista = document.getElementById('lista')
        data.map((item) => {
            lista += `<li> ${item.name}</li>`
        })
    }).catch((error) => error)
}

listaUsuarios();