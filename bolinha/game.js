var vida1 = document.getElementById("vida1")
var vida2 = document.getElementById("vida2")
var vida3 = document.getElementById("vida3")

var coin1 = document.getElementById("coin1")
var coin2 = document.getElementById("coin2")
var coin3 = document.getElementById("coin3")
var coin4 = document.getElementById("coin4")
var coin5 = document.getElementById("coin5")
var coin6 = document.getElementById("coin6")
var coin7 = document.getElementById("coin7")
var coin8 = document.getElementById("coin8")
var coin9 = document.getElementById("coin9")
var coin10 = document.getElementById("coin10")

var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")


document.addEventListener("keydown", move);

	var cPosY = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420]
	var cPosX = [0,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,540,570,600,630,660,690,720,750,780,810,840,870,900]
	var randomizarPosX = cPosX[Math.floor(Math.random()*cPosX.length)]
	var randomizarPosY = cPosY[Math.floor(Math.random()*cPosY.length)]
	let vidas = 3
	let vida = 3
	let coins = 0

	const fundo =  {
		desenha() {
			ctx.fillStyle = "#e6ffff"
			ctx.fillRect(0, 0, canvas.width, canvas.height)
		}
	}

	const ball = {
		posX: 450,
		posY: 210,
		desenha() {
			ctx.fillStyle = "#454545"
			ctx.fillRect(ball.posX, ball.posY, 30, 30)
		}
	}

	const apple = {
		posX: randomizarPosX,
		posY: randomizarPosY,
		desenha() {
			ctx.fillStyle = "#fc0328"
			ctx.fillRect(apple.posX, apple.posY, 30, 30)
		}
	}

	function move(event) {
		switch(event.keyCode) {
			case 37:
				ball.posX = ball.posX - 30
				break;
			case 38:
				ball.posY = ball.posY - 30
				break;
			case 39:
				ball.posX = ball.posX + 30
				break;
			case 40:
				ball.posY = ball.posY + 30
				break;
		}
	}

	function end() {
		vidas = 3
		console.log("End")
	}


	function colidir() {

		if(ball.posY == apple.posY && ball.posX == apple.posX) {
			var randomizarPosX = cPosX[Math.floor(Math.random()*cPosX.length)]
			var randomizarPosY = cPosY[Math.floor(Math.random()*cPosY.length)]
			coins++
			apple.posX = randomizarPosX
			apple.posY = randomizarPosY
		} if(ball.posY < 0 || ball.posY > 450 - 30 || ball.posX < 0 || ball.posX > 930 - 30) {
			alert("Você perdeu uma vida.")
			coins = 0
			vidas--
			ball.posX = 450
			ball.posY = 210
			coin1.style.display = "none"
			coin2.style.display = "none"
			coin3.style.display = "none"
			coin4.style.display = "none"
			coin5.style.display = "none"
			coin6.style.display = "none"
			coin7.style.display = "none"
			coin8.style.display = "none"
			coin9.style.display = "none"
			coin10.style.display = "none"
		} if(vidas == 0) {
			end()
		} if(vidas == 3) {
			vida1.src = "./vida1.png"
			vida2.src = "./vida1.png"
			vida3.src = "./vida1.png"
		} if(vidas == 2) {
			vida1.src = "./vida1.png"
			vida2.src = "./vida1.png"
			vida3.src = "./vida2.png"
		} if(vidas == 1) {
			vida1.src = "./vida1.png"
			vida2.src = "./vida2.png"
			vida3.src = "./vida2.png"
		} if(vidas == 0) {
			vida1.src = "./vida2.png"
			vida2.src = "./vida2.png"
			vida3.src = "./vida2.png"
		}

		if(coins == 1) {
			coin10.style.display = "inline"
		} if(coins == 2) {
			coin9.style.display = "inline"
		} if(coins == 3) {
			coin8.style.display = "inline"
		} if(coins == 4) {
			coin7.style.display = "inline"
		} if(coins == 5) {
			coin6.style.display = "inline"
		} if(coins == 6) {
			coin5.style.display = "inline"
		} if(coins == 7) {
			coin4.style.display = "inline"
		} if(coins == 8) {
			coin3.style.display = "inline"
		} if(coins == 9) {
			coin2.style.display = "inline"
		}

		if(vidas == 1 && vida == 3 && coins == 10) {
			vidas = 2
			coins = 0
			coin1.style.display = "none"
			coin2.style.display = "none"
			coin3.style.display = "none"
			coin4.style.display = "none"
			coin5.style.display = "none"
			coin6.style.display = "none"
			coin7.style.display = "none"
			coin8.style.display = "none"
			coin9.style.display = "none"
			coin10.style.display = "none"
		} if(vidas == 2 && vida == 3 && coins == 10) {
			vidas = 3
			coins = 0
			coin1.style.display = "none"
			coin2.style.display = "none"
			coin3.style.display = "none"
			coin4.style.display = "none"
			coin5.style.display = "none"
			coin6.style.display = "none"
			coin7.style.display = "none"
			coin8.style.display = "none"
			coin9.style.display = "none"
			coin10.style.display = "none"
		} if(vidas == 3 && vida == 3 && coins == 10) {
			vida = 4
			vidas = 1
			coins = 0
			coin1.style.display = "none"
			coin2.style.display = "none"
			coin3.style.display = "none"
			coin4.style.display = "none"
			coin5.style.display = "none"
			coin6.style.display = "none"
			coin7.style.display = "none"
			coin8.style.display = "none"
			coin9.style.display = "none"
			coin10.style.display = "none"
		}
}
	function loop() {
		fundo.desenha()
		apple.desenha()
		ball.desenha()
		colidir()

  	requestAnimationFrame(loop);
}
loop()