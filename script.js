const precio = 200;
const cantidad = document.getElementById('cantidad');
const categoria = document.getElementById('categoria');
const costo = document.getElementById('costo');

function resumen(){
    if (cantidad.value >= 0){
        let valor = cantidad.value * precio;
        let final = valor - (valor*categoria.value);
        costo.innerText = final;
    }else{
        alert("la cantidad es menor a 0");
    }
}

function borrar(){
    cantidad.value = 0;
    costo.innerText = 0;
}

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