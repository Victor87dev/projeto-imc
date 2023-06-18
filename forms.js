const caixaPrincipal = document.getElementById("caixa_principal")
const botao = document.getElementById("botao")
const menor_18 = document.getElementById("menor18")
const entre18_24 = document.getElementById("entre18-24")
const entre25_29 = document.getElementById("entre25-29")
const entre30_39 = document.getElementById("entre30-39")
const maior_40 = document.getElementById("maior40")

let verifica = false 
let selecionado = false

botao.addEventListener("click",(evt)=>{
let inputP = document.getElementById("input_peso").value 
let inputA = document.getElementById("input_altura").value
let inputPeso = parseFloat(inputP.replace(",",".")) 
let inputAltura = parseFloat(inputA.replace(",",".")) 

const altura = (inputAltura * inputAltura)
const resultado = (inputPeso / altura).toFixed(2)

if(!verifica){
  verifica = true
  const div = document.createElement("div")
  div.setAttribute("id","result")
  div.setAttribute("class","novaCaixa")
  div.innerHTML = `IMC: ${resultado}`
  caixaPrincipal.appendChild(div)   
}else{  
  const div = document.getElementById("result")
  div.innerHTML = ""
  div.innerHTML += `IMC: ${resultado}`
}

funcaoSelecionar(inputPeso,inputAltura)

})

const funcaoSelecionar = (p,a)=>{
  
  const resultadoAltura = (a * a)
  const resultadoFinal = (p / resultadoAltura).toFixed(2)

  if(!selecionado){
    selecionado = true 
    if(resultadoFinal < 18.5){
     menor_18.setAttribute("class","resultadoSelecionado")
    }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9) {
     entre18_24.setAttribute("class","resultadoSelecionado")
    }else if(resultadoFinal > 24.9 && resultadoFinal <= 29.9){ 
     entre25_29.setAttribute("class","resultadoSelecionado")
    }else if(resultadoFinal > 29.9 && resultadoFinal <= 39.9){
     entre30_39.setAttribute("class","resultadoSelecionado")
    }else{ 
     maior_40.setAttribute("class","resultadoSelecionado")
    }
  }else{
    if(resultadoFinal < 18.5){
      menor_18.setAttribute("class","resultadoSelecionado")
      entre18_24.classList.remove("class","resultadoSelecionado")
      entre25_29.classList.remove("class","resultadoSelecionado")
      entre30_39.classList.remove("class","resultadoSelecionado")
      maior_40.classList.remove("class","resultadoSelecionado")
    }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9) {
      entre18_24.setAttribute("class","resultadoSelecionado")
      menor_18.classList.remove("class","resultadoSelecionado")
      entre25_29.classList.remove("class","resultadoSelecionado")
      entre30_39.classList.remove("class","resultadoSelecionado")
      maior_40.classList.remove("class","resultadoSelecionado")
     }else if(resultadoFinal > 24.9 && resultadoFinal <= 29.9){
      entre25_29.setAttribute("class","resultadoSelecionado")
      menor_18.classList.remove("class","resultadoSelecionado")
      entre18_24.classList.remove("class","resultadoSelecionado")
      entre30_39.classList.remove("class","resultadoSelecionado")
      maior_40.classList.remove("class","resultadoSelecionado")
     }else if(resultadoFinal > 29.9 && resultadoFinal <= 39.9){
      entre30_39.setAttribute("class","resultadoSelecionado")
      menor_18.classList.remove("class","resultadoSelecionado")
      entre18_24.classList.remove("class","resultadoSelecionado")
      entre25_29.classList.remove("class","resultadoSelecionado")
      maior_40.classList.remove("class","resultadoSelecionado")
     }else{
      maior_40.setAttribute("class","resultadoSelecionado")
      menor_18.classList.remove("class","resultadoSelecionado")
      entre18_24.classList.remove("class","resultadoSelecionado")
      entre25_29.classList.remove("class","resultadoSelecionado")
      entre30_39.classList.remove("class","resultadoSelecionado") 
     }
  } 

}


