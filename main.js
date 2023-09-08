//varaiveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', handleTryKeypress)

//funções
function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector('#inputNumber')

  if (Number(inputNumber.value) == '') {
    window.alert('digite algum valor para prosseguir')
    return
  }

  if (Number(inputNumber.value) <= 0 || Number(inputNumber.value) > 10) {
    window.alert('ERRO, DIGITE VALORES ENTRE 1 E 10')
  }

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector('h2').innerText = `Acertou em ${xAttempts} tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function handleTryKeypress(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function toggleScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}

// DESAFIOS

// FAZER UM LIMITE QUE SÓ PODE CLICAR ENTRE 0 E 10
