const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("Digite sua pergunta")
        return
    } 

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    inputPergunta.value = "" 

    elementoResposta.style.opacity = 1

    document.documentElement.style.setProperty('--bs-color', '#ffffff')
    document.documentElement.style.setProperty('--star-color', '#ffd500')
    document.documentElement.style.setProperty('--bs-sat', '#ffd500')

    setTimeout(function(){
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled");
        document.documentElement.style.setProperty('--bs-color', '#b97be5')
        document.documentElement.style.setProperty('--star-color', '#ffffff')
        document.documentElement.style.setProperty('--bs-sat', 'transparent')
    }, 3000)
}