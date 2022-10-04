const roleta = document.getElementById('roleta')
const btnGira = document.getElementById('btn-girar')
var giro = 1
var giroExtra = 1



btnGira.addEventListener('click', inicio)

function inicio() {
	//giro = 1
	intervaloGiro = setInterval(giraRoleta, 1)
	console.log('random ' + numAleatorio)
	giraRoleta()
}

var numAleatorio = Math.trunc(Math.random() * 720)
function giraRoleta() {
   roleta.style.transform = `rotate(${giro}deg`
   //giro++
   giro = giro + 2
   console.log(giro)
   if(giro > 359){
   	clearInterval(intervaloGiro)
   	intervaloGiro2 = setInterval(giroFinal, 10)
   	giro = 0
      numAleatorio = Math.trunc(Math.random() * 720)
      if(numAleatorio > 90){numAleatorio = numAleatorio + 45}
   }
}

function giroFinal() {
	console.log('random' + numAleatorio)
   roleta.style.transform = `rotate(${giro}deg`
   giro = giro + 2
   console.log(giro)
    if(giro > numAleatorio){
   	clearInterval(intervaloGiro2)
   }

}

/*let numAleatorio = Math.trunc(Math.random() * 359)
intervaloGiro2 = setInterval(giroFinal, 10)
function giroFinal() {
	
	roleta.style.transform = `rotate(${numAleatorio}deg`
	giroExtra++
	if(giroExtra >= numAleatorio) {
		clearInterval(intervaloGiro2)
		giroExtra = 1
		console.log(giroExtra)

	}
}*/