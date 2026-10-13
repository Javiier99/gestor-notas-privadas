


const tituloNota = document.getElementById("tituloNota");
const contraseñaTexto = document.getElementById("contraseñaTexto");
const textoGrande = document.getElementById("textoGrandeNota");
const formulario = document.getElementById("formularioAEnviar");

let arrayGeneral = {}



formulario.addEventListener("submit", (e)=>{

    e.preventDefault()
    let tituloNotaTexto = tituloNota.value;
    let textoNota = textoGrande.value;

    let error = [];

    if(tituloNotaTexto.length == 0){
        error.push("Tienes que escribir un título de nota");
    }
    if(textoNota.length == 0){
        error.push("Tienes que escribir una descripción de la nota");
    }
    const olLista = document.querySelector(".main-formulario-listaErrores")
    if(error.length == 0){
        console.log("Está todo bien");
        let datosFormularioJson = {
            'titulo' : tituloNotaTexto,
            'descripcion' : textoNota
        }

        let pasarTodoJson = JSON.stringify(datosFormularioJson);



        olLista.innerHTML = "";
    }else{
        olLista.innerHTML = "";
        
        for(let i = 0; i < error.length; i++){
            let crearLi = document.createElement("li");
            crearLi.textContent = error[i];
            olLista.appendChild(crearLi);
        }
    }
})






















