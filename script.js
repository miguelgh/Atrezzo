//boton .subir
window.onscroll = function(){
    //console.log(document.documentElement.scrollTop); //con esto se verifica en la consola cuando se hace scroll
    const botonSubir = document.querySelector('.subir');
    if(document.documentElement.scrollTop > 100){
        botonSubir.classList.remove('subir-hide');
        botonSubir.classList.add('subir-show');
     //console.log("entro");
    }else{
        botonSubir.classList.remove('subir-show');
        botonSubir.classList.add('subir-hide');
     //console.log("entro Else");
    }
}