document.addEventListener('DOMContentLoaded', function(){

    var data=new Date().getDay();
    var texto=document.createElement('p');
    texto.setAttribute('class','horario-texto');
    var horario=document.querySelector('#horario').appendChild(texto);

    for(var i=0;i<=6;i++) {
        if(i==5 && i==data || i==6 && i==data) {
            texto.innerHTML='Hoje funcionamos das 18h às 1h';
        } else {
            texto.innerHTML='Hoje funcionamos das 18h às 12h';
        }
    }
});