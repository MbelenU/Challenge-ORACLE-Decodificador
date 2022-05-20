var botonEncriptar = document.querySelector(".btn-encriptar");
var botonDesencriptar = document.querySelector(".btn-desencriptar");
//var botonCopiar = document.querySelector(".btn-copiar")
var munieco = document.querySelector(".contenedor-munieco");
var h3 = document.querySelector(".contenedor-h3");
var parrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".texto-resultado");
var textoEncriptado = ""



botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar; 
//botonCopiar.onclick = copy;

// function copy() {
//   let copyText = document.querySelector("texto-resultado");
//   copyText.select();
//   document.execCommand("copy");
// }

// document.querySelector("#copy").addEventListener("click", copy);



function encriptar(){
	ocultarAdelante();
	var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);
}

function desencriptar(){
	ocultarAdelante();
	var area = recuperarTexto()
    resultado.textContent = desencriptarTexto(area)
}


function recuperarTexto(){
    var area = document.querySelector(".area");
    return area.value;
}

function ocultarAdelante(){
    munieco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}

function encriptarTexto(texto){
    var textos = "";


   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "ai";
      }
      else if(texto[i] == "e"){
         textos += "enter";
      }
      else if(texto[i] == "i"){
         textos += "imes";
      }
      else if(texto[i] == "o"){
         textos += "ober";
      }
      else if(texto[i] == "u"){
         textos += "ufat";
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}



function desencriptarTexto(texto){
      var textos = "";

   for(var i = 0; i < texto.length; i++){
      if(texto[i] == "a"){
         textos += "a";
         i = i+1;
      }
      else if(texto[i] == "e"){
         textos += "e";
         i += 4;
      }
      else if(texto[i] == "i"){
         textos += "i";
         i+= 3;
      }
      else if(texto[i] == "o"){
         textos += "o";
         i+=3;
      }
      else if(texto[i] == "u"){
         textos += "u";
         i+=3;
      }
      else{
         textos += texto[i];
      }
   }

   return textos.toLowerCase();
}

