function mostrarResposta() {
    document.getElementById("resposta").style.display = "block";
    document.getElementById("resposta").innerHTML = "TE AMO!";
    document.getElementById("no").style.display = "none";
    document.getElementById("resposta-img");
    var img = document.getElementById("resposta-img");
    img.src=
    "https://files.passeidireto.com/912af586-fa7d-4a64-b6f3-2199c7d8d815/912af586-fa7d-4a64-b6f3-2199c7d8d815.jpeg";
    img.height = 300;

}

function mudarPosicao() {
    const buttonNao = document.getElementById("no");
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    buttonNao.style.left = `${randomX}px`;
    buttonNao.style.top = `${randomY}px`;
}