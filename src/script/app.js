setTimeout(()=>{
    const pantallaCarga = document.querySelector(".pantalla-carga");
    const pantallaInicio = document.querySelector(".menu-inicio");

    pantallaCarga.classList.add("oculto");
    pantallaInicio.style.visibility = "visible";
    pantallaInicio.style.opacity = 1;

},2000)