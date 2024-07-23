let numeroSecreto;
let numeroIntentos;
let numerosSorteados = [];
let numeroMaximo=10;

function asignarTextoElemento(elemento,texto){
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
} 

function condicionesIniciales() {
  asignarTextoElemento('h1','Juego del numero secreto');
  asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
  numeroIntentos=1;
  numeroSecreto = generarNumeroSecreto()
}

function generarNumeroSecreto() {
  let numeroGenerado= Math.floor(Math.random()*numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(numerosSorteados);
  if(numerosSorteados.length == numeroMaximo){
    asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
  } else{
    if(numerosSorteados.includes(numeroGenerado)){
      return generarNumeroSecreto();  
    } else{
      numerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }  
}

function limpiarCaja() {
  document.querySelector('#valorUsuario').value='';
}

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.getElementById('reiniciar').setAttribute('disabled','true');
}

function verificarIntento(){
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el numero en ${numeroIntentos} ${numeroIntentos==1?'vez':'veces'}`);
    document.getElementById('reiniciar').removeAttribute('disabled');
  } else{
    if(numeroDeUsuario < numeroSecreto){
      asignarTextoElemento('p','El numero secreto es mayor');
    } else {
      asignarTextoElemento('p','El numero secreto es menor');
    }
    numeroIntentos++;
    limpiarCaja();
  }
}

condicionesIniciales();
