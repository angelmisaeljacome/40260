let resultado = document.getElementById("resultado")
let botones = document.getElementsByTagName("button")
for (const key in botones) {
    if (Object.prototype.hasOwnProperty.call(botones, key)) {
        const boton = botones[key];
        if (boton.className != "operadores")
            boton.addEventListener("click", pintar)
        else
            boton.addEventListener("click", operadores)
        // console.log(boton)
    }
}

function pintar(e) {
    console.log(e.target.innerText)
    resultado.value += e.target.innerText
}

function operadores(e) {
    let operador = e.target.innerText
    if (operador == "Ce")
        limpiar()
    else if (operador == "=")
        igual()
    else
        almacena_parametro(operador)
}

function limpiar(){
    parametros = []
    eventos = []
    operador = ""
    resultado.value = ""
    prm1 = ""
    operacion = ""
}

let prm1
let operacion
function almacena_parametro(prm) {
    // prm1 = resultado.value
    parametros.push(resultado.value)
    eventos.push(resultado.value)
    resultado.value = ""
    operacion = prm
    eventos.push(operacion)
}

function igual() {
    // prm2 = resultado.value
    let variable = null
    parametros.push(resultado.value)
    eventos.push(resultado.value)

    for (let i = 0; i < eventos.length; i++) {
        
            const prm = eventos[i];
            const sigVal = eventos[i + 1];
            console.log(variable)
            if (prm == "+"){
                variable += parseInt(sigVal)}
            else if (prm == "-"){
                if (variable == null)
                    variable = parseInt(sigVal)
                else
                    variable -= parseInt(sigVal)}
            else if (prm == "*"){
                if (variable == null)
                    variable = parseInt(sigVal)
                else
                    variable *= parseInt(sigVal)}
            else if (prm == "/"){
                if (variable == null)
                    variable = parseInt(sigVal)
                else
                    variable /= parseInt(sigVal)}
            else{
                if (variable == null)
                    variable = parseInt(prm)
                else
                    variable = variable
            }
        
    }
    resultado.value = variable
}

let parametros = []
let eventos = []