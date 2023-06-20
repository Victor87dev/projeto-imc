const caixaPrincipal = document.getElementById("caixa_principal")
const botao = document.getElementById("botao")
const tabela = document.querySelector("table")

let verifica = false 

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
  tabela.setAttribute("class","transformarLetra")
  caixaPrincipal.classList.add("class","caixaPrincipalAnimation")
  
}else{  
  const div = document.getElementById("result")
  div.innerHTML = ""
  div.innerHTML += `IMC: ${resultado}`
}

caixaSelecionada(inputPeso,inputAltura)

})

const caixaSelecionada = (p,a)=>{
  const resultadoAltura = (a * a)
  const resultadoFinal = (p / resultadoAltura).toFixed(2)
  
  const arrayTabelas = [...document.querySelectorAll(".itensTabela")]

 
  if(resultadoFinal < 18.5){
    arrayTabelas.map((el)=>{
      el.classList.remove("class","resultadoSelecionado")
      arrayTabelas[0].classList.add("class","resultadoSelecionado")
    })
  }else if(resultadoFinal >= 18.5 && resultadoFinal <= 24.9){
   for(let i = 0;i <= arrayTabelas.length;i++){
    arrayTabelas[i].classList.remove("class","resultadoSelecionado")
    arrayTabelas[1].classList.add("class","resultadoSelecionado")
   }   
  }else if(resultadoFinal > 24.9 && resultadoFinal <= 29.9){    
   for(let i = 0;i <= arrayTabelas.length;i++){
    arrayTabelas[i].classList.remove("class","resultadoSelecionado")
    arrayTabelas[2].classList.add("class","resultadoSelecionado")
   }   
  }else if(resultadoFinal > 29.9 && resultadoFinal <= 39.9){    
    for(let i = 0;i <= arrayTabelas.length;i++){
     arrayTabelas[i].classList.remove("class","resultadoSelecionado")
     arrayTabelas[3].classList.add("class","resultadoSelecionado")
    }    
  }else{
    for(let i = 0;i <= arrayTabelas.length;i++){
      arrayTabelas[i].classList.remove("class","resultadoSelecionado")
      arrayTabelas[4].classList.add("class","resultadoSelecionado")
     }    
  }

}


