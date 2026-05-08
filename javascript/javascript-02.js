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
    
let prm1 = 0;
let prm2 = 0;
let tipoOperacion = "";
let total = 0;
    

function pintar(e){
    console.log(e.target.innerText);
    resultado.value += e.target.innerText;
}

function pintar2(e){
    console.log(e.target.innerText);
    if(e.target.innerText == "+"){
        prm1 = resultado.value;
        tipoOperacion = "suma";
        resultado.value = "";
    }else if(e.target.innerText == "-"){
        prm1 = resultado.value;
        tipoOperacion = "resta";
        resultado.value = "";
    }else if(e.target.innerText == "*"){
        prm1 = resultado.value;
        tipoOperacion = "multiplicacion";
        resultado.value = "";
    }else if(e.target.innerText == "/"){
        prm1 = resultado.value;
        tipoOperacion = "division";
        resultado.value = "";
    }else if(e.target.innerText == "Ce"){
        prm1 = 0;
        prm2 = 0;
        tipoOperacion = "";
        total = 0;
        resultado.value = "";
    }else if(e.target.innerText == "="){
        igual()
    }
    
}

function suma(){
    total = Number(prm1) + Number(prm2);
    console.log("TotalSum= " + total);
}

function resta(){
    total = Number(prm1) - Number(prm2);
    console.log("TotalRes= " + total);
}

function multiplicacion(){
    total = Number(prm1) * Number(prm2);
    console.log("TotalMulti= " + total);
}

function division(){
    total = Number(prm1) / Number(prm2);
    console.log("TotalDiv= " + total);
}

function igual(){
    if (tipoOperacion == "suma"){
        prm2 = resultado.value;
        suma()
        resultado.value = total;
        
    }else if(tipoOperacion == "resta"){
        prm2 = resultado.value;
        resta()
        resultado.value = total;

    }else if(tipoOperacion == "multiplicacion"){
        prm2 = resultado.value;
        multiplicacion()
        resultado.value = total;

    }else if(tipoOperacion == "division"){
        prm2 = resultado.value;
        division()
        resultado.value = total;

    }
}