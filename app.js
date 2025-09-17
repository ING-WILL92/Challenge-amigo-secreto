let amigos = [];

const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');

// AGREGAR AMIGO
function agregarAmigo() {
    const nombre = ingresoNombres.value.trim();

    if (nombre === "") {
        alert("Ingresa el nombre de tu mejor amigo");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese amigo ya fue agregado");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    ingresoNombres.value = "";
}

// ACTUALIZA LA LISTA DE AMIGOS
function actualizarLista() {
    amigoSorteado.innerHTML = "";
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const liAmigo = document.createElement("li");
        liAmigo.textContent = amigo;
        listaAmigos.appendChild(liAmigo);
    });
}

// SORTEA EL MEJOR AMIGO
function sortearAmigo() {
    if (amigos.length > 0) {
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        const liSorteado = document.createElement('li');
        liSorteado.textContent = `Tu amigo secreto es ${amigoSecreto}`;
        amigoSorteado.appendChild(liSorteado);

        // Limpia la lista visual y el array
        listaAmigos.innerHTML = "";
        amigos = [];
    } else {
        alert("No hay amigos para sortear");
    }
}
