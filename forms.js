const caixaPrincipal = document.getElementById("caixa_principal")
const botao = document.getElementById("botao")
const tabela = document.querySelector("table")
const caixaBotao = document.getElementById("caixa_button")
const inputP = document.getElementById("input_peso")
const inputA = document.getElementById("input_altura")

let verifica = false 
let verificaDeletado = false 

botao.addEventListener("click",(evt)=>{
const inputP = document.getElementById("input_peso").value 
const inputA = document.getElementById("input_altura").value
const inputPeso = parseFloat(inputP.replace(",",".")) 
const inputAltura = parseFloat(inputA.replace(",",".")) 

const altura = (inputAltura * inputAltura)
const resultado = (inputPeso / altura).toFixed(2)

if(inputP != "" && inputA != ""){
 
  if(!verifica){
    verifica = true
    const div = document.createElement("div")
    div.setAttribute("id","result")
    div.setAttribute("class","novaCaixa")
    div.innerHTML = `IMC: ${resultado}`
    caixaPrincipal.appendChild(div)   
    tabela.setAttribute("class","transformarLetra")
    caixaPrincipal.classList.add("class","caixaPrincipalAnimation")
    botao.classList.add("class","botaoTamanho")
    adicionarBotaoApagar()
  }else{ 
    if(verificaDeletado){
      verificaDeletado = false
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
  }
  caixaSelecionada(inputPeso,inputAltura)
  
}else{
  alert("Adicione Informações")
}
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

const adicionarBotaoApagar = ()=>{
  const buttonApagar = document.createElement("button")
  buttonApagar.setAttribute("type","button")
  buttonApagar.setAttribute("id","botaoApagar")
  buttonApagar.setAttribute("class","botao custom-btn")
  buttonApagar.classList.add("class","botaoTamanho")
  buttonApagar.setAttribute("onclick","apagandoInput()")
  const palavraApagar = document.createElement("span")
  palavraApagar.innerHTML = "Apagar"
  buttonApagar.appendChild(palavraApagar)
  caixaBotao.appendChild(buttonApagar)
}

const apagandoInput = ()=>{
  verificaDeletado = true
  inputP.value = ""
  inputA.value = ""
  const div = document.getElementById("result")
  caixaPrincipal.removeChild(div)
  const arrayTabelas = [...document.querySelectorAll(".itensTabela")]
  for(let i = 0;i <= arrayTabelas.length;i++){
    arrayTabelas[i].classList.remove("class","resultadoSelecionado")
   } 
}




