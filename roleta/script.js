const roleta = document.getElementById('roleta')
const btnGira = document.getElementById('btn-girar')
const somRoleta = document.getElementById('som-roleta')
const jogador1 = document.getElementById('jogador1')
const jogador2 = document.getElementById('jogador2')
const chutar = document.getElementById('btn-chutar')
let chute = document.getElementById('chute')
const palavra = document.getElementById('palavra')
const palavraAcertada = document.getElementById('palavraAcertada')
const pontosVencedor = document.getElementById('pontosVencedor')
const mostraTelaFinal = document.getElementById('mostraTelaFinal')
const btnReiniciar = document.getElementById('btnReiniciar')
let liberaChute = 0
let pontos 
let pontosJogador1 = 0
let pontosJogador2 = 0
let rodada = 1 
let giro = 1
let giroExtra = 1
let indexClique = 0
let palavraSecreta
let dica = document.getElementById('dica')
let indexChute = 2
let embaralha


//banco de palavras
let palavras = [
          //Palavra / dica 1 / dica 2 / dica 3 
        ['anta', 'animal com A', '_ _ _ _'],
        ['panela', 'Cozinha', '_ _ _ _ _ _'],
        ['chinelo', 'Calçado', '_ _ _ _ _ _ _'],
        ['caneta', 'Escrever', '_ _ _ _ _ _'],
        ['mouse', 'Computador', '_ _ _ _ _'],
        ['chaveiro', 'chave', '_ _ _ _ _ _ _ _'],
        ['árvore', 'Galhos', '_ _ _ _ _ _'],
        ['biscoito', 'alimento com B', '_ _ _ _ _ _ _ _'],
        ['barata', 'muitos tem medo', '_ _ _ _ _ _'],
        ['cabelo', 'tem vários tipos de corte', '_ _ _ _ _ _'],
        ['guitarra', 'instrumento de cordas', '_ _ _ _ _ _ _ _'],
        ['bisavô', 'o neto dele é seu pai', '_ _ _ _ _ _'],
        ['biblioteca', 'lugar de leitura', '_ _ _ _ _ _ _ _ _ _'],
        ['cavalo', 'cavaleiros precisam dele', '_ _ _ _ _ _'],
        ['lavanderia', 'lugar de lavar roupas', '_ _ _ _ _ _ _ _ _ _'],
        ['aliança', 'tem no casamento', '_ _ _ _ _ _ _'],
        ['palhaço', 'tem no circo', '_ _ _ _ _ _ _']
      ]

jogador2.style.border = '10px solid yellow'

btnGira.addEventListener('click', () => {
   somRoleta.play()
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
      
   inicio()
  }  
})

function inicio() {

	intervaloGiro = setInterval(giraRoleta, 1)
	giraRoleta()
}

let numAleatorio = Math.trunc(Math.random() * 720)
console.log('random ' + numAleatorio)

function giraRoleta() {
   roleta.style.transform = `rotate(${giro}deg`
   giro = giro + 2
   console.log(giro)
   if(giro > 359){
   	clearInterval(intervaloGiro)
   	intervaloGiro2 = setInterval(giroFinal, 10)
   	giro = 0
      numAleatorio = Math.trunc(Math.random() * 720)
      if(numAleatorio < 45){numAleatorio = numAleatorio + 45}
   }
}

//Gera um giro extra, um pouco mais lento e com posicao aleatoria
function giroFinal() {
	console.log('random' + numAleatorio)
   roleta.style.transform = `rotate(${giro}deg`
   giro = giro + 2
   console.log('giro' + giro)
    if(giro > numAleatorio){
      somRoleta.pause()
      somRoleta.currentTime = 0
   	clearInterval(intervaloGiro2)
      indexClique = 0
      checaPontuacao()
      liberaChute = 1
      processaChute()
   }
}

function checaPontuacao() {
   if (giro >= 0 && giro <= 15)  {pontos = 'Perde'}
   if (giro > 15 && giro <= 30)  {pontos = 800}
   if (giro > 30 && giro <= 45)  {pontos = 50}
   if (giro > 45 && giro <= 60)  {pontos = 500}
   if (giro > 60 && giro <= 75)  {pontos = 850}
   if (giro > 75 && giro <= 90)  {pontos = 600}
   if (giro > 90 && giro <= 106) {pontos = 'Perde'}
   if (giro > 106 && giro <= 120){pontos = 250}
   if (giro > 120 && giro <= 136){pontos = 700}
   if (giro > 136 && giro <= 150){pontos = 350}
   if (giro > 150 && giro <= 165){pontos = 200}
   if (giro > 165 && giro <= 180){pontos = 950}
   if (giro > 180 && giro <= 195){pontos = 'Perde'}
   if (giro > 195 && giro <= 210){pontos = 750}
   if (giro > 210 && giro <= 226){pontos = 100}
   if (giro > 226 && giro <= 240){pontos = 450}
   if (giro > 240 && giro <= 256){pontos = 900}
   if (giro > 256 && giro <= 270){pontos = 550}
   if (giro > 270 && giro <= 285){pontos = 'Perde'}
   if (giro > 285 && giro <= 300){pontos = 300}
   if (giro > 300 && giro <= 315){pontos = 650}
   if (giro > 315 && giro <= 330){pontos = 400}
   if (giro > 330 && giro <= 345){pontos = 650}
   if (giro > 345 && giro <= 360){pontos = 1000}
   if (giro > 360 && giro <= 376){pontos = 'Perde'}
   if (giro > 376 && giro <= 390){pontos = 800}
   if (giro > 390 && giro <= 406){pontos = 50}
   if (giro > 406 && giro <= 420){pontos = 500}
   if (giro > 420 && giro <= 436){pontos = 850}
   if (giro > 436 && giro <= 450){pontos = 600}
   if (giro > 450 && giro <= 466){pontos = 'Perde'}
   if (giro > 466 && giro <= 480){pontos = 250}
   if (giro > 480 && giro <= 496){pontos = 700}
   if (giro > 496 && giro <= 510){pontos = 350}
   if (giro > 510 && giro <= 526){pontos = 200}
   if (giro > 526 && giro <= 540){pontos = 950}
   if (giro > 540 && giro <= 556){pontos = 'Perde'}
   if (giro > 556 && giro <= 570){pontos = 750}
   if (giro > 570 && giro <= 586){pontos = 100}
   if (giro > 586 && giro <= 600){pontos = 450}
   if (giro > 600 && giro <= 616){pontos = 900}
   if (giro > 616 && giro <= 630){pontos = 550}
   if (giro > 630 && giro <= 646){pontos = 'Perde'}
   if (giro > 646 && giro <= 660){pontos = 300}
   if (giro > 660 && giro <= 676){pontos = 650}
   if (giro > 676 && giro <= 690){pontos = 400}
   if (giro > 690 && giro <= 706){pontos = 650}
   if (giro > 706 && giro <= 720){pontos = 1000}

   if (rodada === 1) {
      pontosJogador1 = pontosJogador1 + pontos 
      if(pontos === 'Perde') {pontosJogador1 = 0}
      jogador1.innerHTML = pontosJogador1

   } 
   if (rodada === 2) {
      pontosJogador2 = pontosJogador2 + pontos
      if(pontos === 'Perde') {pontosJogador2 = 0}
      jogador2.innerHTML = pontosJogador2
   }
}

embaralha = Math.trunc(Math.random() * palavras.length)

function processaChute() {
   if(liberaChute = 1) {
      chute.focus()      
      palavraSecreta = palavras[embaralha]
      dica.innerHTML = palavraSecreta[1]
      let tracos = []
      for (let i = 0; i < palavraSecreta.length; i++) {
         tracos.unshift(' _')
      }
      palavra.innerHTML = tracos
     // palavra.innerHTML = palavraSecreta[indexChute]
   }
}

chutar.addEventListener('click', () => {
   console.log(palavraSecreta[0])
   let chuteToLow = chute.value
   chuteToLow.toLowerCase()
   if(chuteToLow == palavraSecreta[0]) {
      telaFinal()
   } else {
      palavra.innerHTML = 'ERROU'
   }
})

function telaFinal() {
   mostraTelaFinal.style.display = 'flex'
  if(rodada === 1) {
    vencedor.innerHTML = 'jogador 1 venceu!'
    pontosVencedor.innerHTML = 'O premio foi ' + pontosJogador1
  } 
  if(rodada === 2) {
    vencedor.innerHTML = 'jogador 2 venceu!'
    pontosVencedor.innerHTML = 'O premio foi ' + pontosJogador2
  }
  palavraAcertada.innerHTML = `A palavra secreta era ${palavraSecreta[0]}`
}

btnReiniciar.addEventListener('click', () => {
   mostraTelaFinal.style.display = 'none'
   embaralha = Math.trunc(Math.random() * palavras.length)
   pontosJogador2 = 0
   pontosJogador1 = 0
   jogador2.innerHTML = ''
   jogador1.innerHTML = ''
   chute.value = ''

   processaChute()
})


