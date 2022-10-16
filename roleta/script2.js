const roleta = document.getElementById('roleta')
const btnGira = document.getElementById('btn-girar')
const somRoleta = document.getElementById('som-roleta')
const jogador1 = document.getElementById('jogador1')
const jogador2 = document.getElementById('jogador2')
var pontosJogador1
var pontosJogador2
var rodada = 1 
var giro = 1
var giroExtra = 1
var indexClique = 0

btnGira.addEventListener('click', () => {
  if(indexClique == 0) {
   indexClique = 1
   if(rodada === 1) {
      rodada = 2
      jogador2.style.border = '10px solid yellow'
      jogador1.style.border = '10px solid #2BC881'
      } else {
         rodada = 1
         jogador1.style.border = '10px solid yellow'
         jogador2.style.border = '10px solid #EF644B' 
      }
   //somRoleta.play()
   
   gira()
   //inicio()
  }  
})

function gira() {
   
   roleta.style.transform = `rotate(${15}deg`
   giro++
}

/*function inicio() {
	intervaloGiro = setInterval(giraRoleta, 1)
	giraRoleta()
}

var numAleatorio = Math.trunc(Math.random() * 760)
console.log('random ' + numAleatorio)

function giraRoleta() {
   roleta.style.transform = `rotate(${giro}deg`
   giro = giro + 1
   console.log(giro)
   if(giro > 359){
   	clearInterval(intervaloGiro)
   	intervaloGiro2 = setInterval(giroFinal, 10)
   	giro = 0
      numAleatorio = Math.trunc(Math.random() * 760)
      //if(numAleatorio < 90){numAleatorio = numAleatorio + 45}
   }
}

//Gera um giro extra, um pouco mais lento
function giroFinal() {
	console.log('random' + numAleatorio)
   roleta.style.transform = `rotate(${giro}deg`
   giro = giro + 1
   console.log('giro' + giro)
    if(giro > numAleatorio){
      somRoleta.pause()
      somRoleta.currentTime = 0
   	clearInterval(intervaloGiro2)
      indexClique = 0
   }
}

*/