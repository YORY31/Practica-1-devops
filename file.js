function AsignarElementoTexto(elemento, texto){
    let ElementoHtml = document.querySelector(elemento);//es para conectar elementos de nuestro index con js y para eso usamos document
    ElementoHtml.innerHTML = texto;
    return;
 }

 
 function VerificarIntento(){
    let NumberUser = document.getElementById('ValorUsuario').value;}

    if(NumberUser == numerosecreto){
        AsignarElementoTexto('p',`Corecto aceptaste el numero en ${intento} ${(intento === 1?'intento': 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        limpiarcaja();
    } else 
     {
        if(NumberUser>numerosecreto){
            AsignarElementoTexto('p','el numero es muy alto ');
        }else{
            AsignarElementoTexto('p','muy bajito');
         }
         intento++;
         limpiarcaja();
    }return;
  
    