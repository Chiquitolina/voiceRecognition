const recognition = new webkitSpeechRecognition()
recognition.lang = 'es-AR'

recognition.continuous = true

const contEsc = document.getElementById('escuchadoCont')

const contenedorEscuchando = document.getElementById('contenedorEscuchando')

const selectLang = document.getElementById('selectLang')

function limpiarescuchar() {
  contEsc.innerHTML = ''
}

function escuchar() {

console.log(selectLang.value)

recognition.start()

contenedorEscuchando.innerHTML = ''

let tit = document.createElement('h1')

tit.innerHTML = 'Listening.'

contenedorEscuchando.appendChild(tit)

recognition.onresult = event => {
  for (const result of event.results) {
    contEsc.innerHTML = ''
    let escuchado = document.createElement('p')
    escuchado.innerHTML = result[0].transcript
    contEsc.appendChild(escuchado)
  }
}

}

function dejardeescuchar() {
console.log("Not listening.")
recognition.stop()
contenedorEscuchando.innerHTML = ''
let tit = document.createElement('h1')
tit.innerHTML = 'Not listening.'
contenedorEscuchando.appendChild(tit)
}



