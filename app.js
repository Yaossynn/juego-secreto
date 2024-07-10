let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElementos(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  
    console.log(numeroSecreto);
    console.log(intentos);
    if (numeroDeUsuario=== numeroSecreto) {
          asignarTextoElementos('p',`acertaste el numero en ${intentos} ${(intentos ===1) ? 'vez': 'veces' }`);
          document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElementos('p','El numero secreto es menor');
        } else {
            asignarTextoElementos('p','El numero secreto es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
   let valorCaja = document.querySelector('#valorUsuario').value='';

}

function generarNumeroSecreto() {
    //si el numero generado esta incluido en la lista 
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sotearon todo los numeros
    if (listaNumerosSorteados.length == numeroMaximo ){
        asignarTextoElementos('p','Ya se sortearon todo los numeros posibles');
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)) {
           return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

   

}

function condicionesIniciales (){
    asignarTextoElementos('h1','Juego del numero secreto!');
    asignarTextoElementos('p',  `indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
