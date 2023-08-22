var leonardo = window.document.getElementById('Leonardo')
var bruna = window.document.getElementById('Bruna')
var samanta = window.document.getElementById('Samantha')
var setaDir = window.document.getElementById('seta-direita')
var setaEsq = window.document.getElementById('seta-esquerda')

function rolarDireita(){
    leonardo.style = 'display:none;'
    bruna.style = 'display:flex;'
}
function rolarEsquerda(){
    leonardo.style = 'display:flex;'
    bruna.style = 'display:none;'
}