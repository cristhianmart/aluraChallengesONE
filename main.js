let mensaje = document.querySelector("#textarea");
let btnEncriptar = document.querySelector("#encriptar");
let btnDesncriptar = document.querySelector("#desencriptar");
let sctResultado = document.querySelector("#resultado");

let palabras = [];
let resultado;



mensaje.style.color = "#0A3871";


function encriptar() {
    let valor = mensaje.value;
    palabras = valor.split("");
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] == "a") {
            palabras[i] = "ai";
        }
        if (palabras[i] == "e") {
            palabras[i] = "enter";
        }
        if (palabras[i] == "i") {
            palabras[i] = "imes";
        }
        if (palabras[i] == "o") {
            palabras[i] = "ober";
        }
        if (palabras[i] == "u") {
            palabras[i] = "ufat";
        }

    }

    resultado = palabras.join("");
    sctResultado.innerHTML = resultado +
    `<div class="copiar-cont">
    <button class="btnDesencriptar" id="btnCopiar">Copiar</button>
    </div>`;

    
    let btnCopiar = document.getElementById("btnCopiar");
    btnCopiar.onclick=copiar;


    
}

function desencriptar() {
    let valor = mensaje.value;
    palabras = valor.split(" ");

    
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].indexOf("ai") >= 0) {
            palabras[i] = palabras[i].replaceAll('ai', 'a');
        }
        if (palabras[i].indexOf("enter") >= 0) {
            palabras[i] = palabras[i].replaceAll('enter', 'e');
        }
        if (palabras[i].indexOf("imes") >= 0) {
            palabras[i] = palabras[i].replaceAll('imes', 'i');
        }
        if (palabras[i].indexOf("ober") >= 0) {
            palabras[i] = palabras[i].replaceAll('ober', 'o');
        }
        if (palabras[i].indexOf("ufat") >= 0) {
            palabras[i] = palabras[i].replaceAll('ufat', 'u');
        }
    }


    resultado = palabras.join(" ");

    sctResultado.innerHTML = resultado +
    `<div class="copiar-cont">
    <button class="btnDesencriptar" id="btnCopiar">Copiar</button>
    </div>`;

    
    let btnCopiar = document.getElementById("btnCopiar");
    btnCopiar.onclick=copiar;

}



function copiar () {
       
    navigator.clipboard.writeText(resultado).then(()=>{
        alert("el texto ha sido copiado")
    })
    }



btnEncriptar.onclick = encriptar;
btnDesncriptar.onclick = desencriptar;


