const caixaPrincipal = document.getElementById("caixa_principal")
const botao = document.getElementById("botao")

let verifica = false 



botao.addEventListener("click",(evt)=>{
  let inputP = document.getElementById("input_peso").value 
  let inputA = document.getElementById("input_altura").value
  let inputPeso = parseFloat(inputP.replace(",",".")) 
  let inputAltura = parseFloat(inputA.replace(",",".")) 

  const altura = (inputAltura * inputAltura)
  const resultado = (inputPeso / altura).toFixed(2)
  
 if(!verifica){
    if(resultado <= 18.5){
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}`
    caixaPrincipal.appendChild(div)
    }else if(resultado > 18.5 && resultado <= 24.9) {
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}`
    caixaPrincipal.appendChild(div)
    }else if(resultado > 24.9 && resultado <= 30){
    verifica = true  
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}`
    caixaPrincipal.appendChild(div)
    }else{
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}`
    caixaPrincipal.appendChild(div)
    }
}else{

    if(resultado <= 18.5){
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}` 
    }else if(resultado > 18.5 && resultado <= 24.9){
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}`    
    }else if(resultado > 24.9 && resultado <= 30){
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}` 
    }else{
      const div = document.getElementById("result")
      div.innerHTML = ""
      div.innerHTML += `IMC: ${resultado}`  
    }
}
})


