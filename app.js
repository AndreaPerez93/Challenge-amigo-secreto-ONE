let nombresAgregados = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
// Esta funcion agarra los nombres de los amigos ingresados por el usuario.
function agregarAmigo() {
    let amigos = document.getElementById('amigo').value;
    if (amigos == ""){
        alert("Por favor, inserte un nombre");
    } else{
        nombresAgregados.push(amigos);
        lista.innerHTML = '';
        for( let x=0; x <nombresAgregados.length; x ++){
            lista.innerHTML += '<li>' + nombresAgregados[x] + '</li>';
         }
    }

    console.log(nombresAgregados);
    limpiarCaja();
    return;
}

function limpiarCaja () {
    let imputCaja = document.querySelector('#amigo');
    imputCaja.value = "";
}

//función para generar un indice (amigo) aleatorio

function sortearAmigo() {
    if (nombresAgregados.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let sortearAmigo = Math.floor(Math.random() * nombresAgregados.length);
    let amigoSecreto = nombresAgregados[sortearAmigo];
    console.log(sortearAmigo);
    console.log(amigoSecreto);
    document.getElementById("resultado").innerHTML = `<span>El amigo secreto es:</span> ${amigoSecreto}`;
}
