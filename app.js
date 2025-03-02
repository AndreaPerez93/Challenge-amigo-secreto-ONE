let listaAmigos = [];

function agregarAmigo() {
    let amigos = document.getElementById('amigo').value;

    if (amigos == ""){
        alert("Por favor, inserte un nombre");
    } else{
        listaAmigos.push(amigos);
    }
    console.log(listaAmigos);
    limpiarCaja();
    return;
}




function limpiarCaja () {
    let imputCaja = document.querySelector('#amigo');
    imputCaja.value = "";
}