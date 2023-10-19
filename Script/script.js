let escuro = document.querySelector('#escuro');
let claro = document.querySelector('#claro')
let mainPage = document.querySelector('#main_page')
let formulario = document.querySelector('#formulario')
let input = document.querySelector(".text")

escuro.addEventListener("click", () => {
    mainPage.style.backgroundColor = "rgb(0, 27, 85)"
    mainPage.style.color = "white"
    formulario.style.background = "rgb(0, 27, 85)"
    formulario.style.color = "white"
    escuro.style.display = 'none'
    claro.style.display = 'block'
    input.style.color = 'white'
});

claro.addEventListener("click", () => {
    mainPage.style.backgroundColor = "rgb(194, 212, 252)"
    mainPage.style.color = "black"
    formulario.style.background = "rgb(194, 212, 252)"
    formulario.style.color = "black"
    claro.style.display = 'none'
    escuro.style.display = 'block'
    input.style.color = 'black'
});
