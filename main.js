
// pegar o texto e adcionar na ul

const $btnInserir = document.querySelector('[btn-inserir]')
const $lis = document.querySelectorAll('[ulPendente] li')

$btnInserir.onclick = function() {
    let $textArea = document.querySelector('[input-text]')
    const $ulPentende = document.querySelector('[ulPentende]')
    const li = document.createElement('li')
    li.append($textArea.value)
    $ulPentende.appendChild(li)
    $textArea.value =''


}







