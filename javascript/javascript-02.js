let resultado = document.getElementById("resultado")

let botones = document.getElementsByTagName("button")

for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if(boton.className != "operadores"){
            boton.addEventListener("click", pintar)
        }else{
            boton.addEventListener("click", pintar2)
        }
        
    }
}
    
    

function pintar(e){
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

function pintar2(e){
    console.log(e.target.innerText)
    if(e.target.innerText == "+")
        suma
}

function suma(){
    prm1 = resultado.value
    resultado.value = ""
}

function igual(){
    prm2 = resultado.value
    resultado.value = prm1 + prm2
}