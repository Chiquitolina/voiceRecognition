const recognition = new webkitSpeechRecognition()

const navigationVoice = new webkitSpeechRecognition()

recognition.lang = 'en-US'

navigationVoice.lang = 'en-US'

recognition.continuous = true

const contEsc = document.getElementById('escuchadoCont')

const contenedorEscuchando = document.getElementById('contenedorEscuchando')

const selectLang = document.getElementById('selectLang')

const divLabel = document.getElementById('labelNav')

function activarNavegacionPorVoz() {
  navigationVoice.start()
  navigationVoice.continuous = true
  navigationVoice.onresult = event => {
    for (const result of event.results) {
      divLabel.innerHTML = ''
      let escuchado = document.createElement('label')
      escuchado.innerHTML = result[0].transcript
      divLabel.appendChild(escuchado)
      if (escuchado.innerHTML == 'home') {
        window.location.assign('./index.html')
      } else 
      if (escuchado.innerHTML == 'paint') {
        window.location.assign('./paint.html')
      } else {
        if (escuchado.innerHTML == 'about') {
          window.location.assign('./about.html')
        }
      }
    }
  }
}

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



