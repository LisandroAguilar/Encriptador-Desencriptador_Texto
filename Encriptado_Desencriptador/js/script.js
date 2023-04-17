function encriptar() {
    const textoOriginal = document.getElementById("texto-original").value;
    const textoMinusculas = textoOriginal.toLowerCase();
    if (textoOriginal !== textoMinusculas) {
        alert("El texto original debe contener sólo letras minúsculas.");
        return;
    }
    const textoEncriptado = textoOriginal.replaceAll("e", "enter")
                                         .replaceAll("i", "imes")
                                         .replaceAll("a", "ai")
                                         .replaceAll("o", "ober")
                                         .replaceAll("u", "ufat");
    document.getElementById("texto-encriptado/desencriptado").value = textoEncriptado;
}

function desencriptar() {
    const textoOriginal = document.getElementById("texto-original").value;
    const textoMinusculas = textoOriginal.toLowerCase();
    if (textoOriginal !== textoMinusculas) {
        alert("El texto original debe contener sólo letras minúsculas.");
        return;
    }
    const textoEncriptado = textoOriginal.replaceAll("enter", "e")
                                         .replaceAll("imes", "i")
                                         .replaceAll("ai", "a")
                                         .replaceAll("ober", "o")
                                         .replaceAll("ufat", "u");
    document.getElementById("texto-encriptado/desencriptado").value = textoEncriptado;
}

function limpiar() {
    document.getElementById("texto-original").value = "";
    document.getElementById("texto-encriptado/desencriptado").value = "";
}

function copiar() {
    const textoEncriptado = document.getElementById("texto-encriptado/desencriptado");
    textoEncriptado.select();
    document.execCommand("copy");
}
