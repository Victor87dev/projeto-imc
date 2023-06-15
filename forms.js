const caixaPrincipal = document.getElementById("caixa_principal")
const inputPeso = document.getElementById("input_peso")
const inputAltura = document.getElementById("input_altura")
const botao = document.getElementById("botao")

let verifica = false 

botao.addEventListener("click",(evt)=>{
  const altura = (inputAltura.value * inputAltura.value)
  const resultado = (inputPeso.value / altura).toFixed(2)
 
 if(!verifica){
    if(resultado <= 18.5){
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}, Abaixo do peso`
    caixaPrincipal.classList.add("class","cinza")
    caixaPrincipal.appendChild(div)
    }else if(resultado > 18.5 && resultado <= 24.9) {
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}, Normal`
    caixaPrincipal.classList.add("class","verde")
    caixaPrincipal.appendChild(div)
    }else if(resultado > 24.9 && resultado <= 30){
    verifica = true  
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}, Acima do peso`
    caixaPrincipal.classList.add("class","amarelo")
    caixaPrincipal.appendChild(div)
    }else{
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}, Obeso`
    caixaPrincipal.classList.add("class","vermelho")
    caixaPrincipal.appendChild(div)
    }
}else{

    if(resultado <= 18.5){
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}, Abaixo do peso`
      caixaPrincipal.classList.add("class","cinza")
      caixaPrincipal.classList.remove("vermelho","amarelo","verde")
    }else if(resultado > 18.5 && resultado <= 24.9){
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}, Normal`
      caixaPrincipal.classList.add("class","verde")
      caixaPrincipal.classList.remove("vermelho","amarelo","cinza")
    }else if(resultado > 24.9 && resultado <= 30){
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}, Acima do peso`
      caixaPrincipal.classList.add("class","amarelo")
      caixaPrincipal.classList.remove("vermelho","verde","cinza")
    }else{
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}, Obeso`
      caixaPrincipal.classList.add("class","vermelho")
      caixaPrincipal.classList.remove("amarelo","verde","cinza")
    }
}
})

