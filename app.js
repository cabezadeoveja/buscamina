var tableBombIt = 	[
					" ",
					"*",
					"1",
					" ",
					"/n",
					" ",
					" ",
					"*",
					"2",
					"/n",
					"1",
					"*",
					" ",
					" ",
					"/n",
					" ",
					"3",
					"*",
					" "
					];

var containerBombIt = document.getElementById("container-bomb-it");
var bombIt = document.getElementById("bomb-it");// nuestra area de juego

var drawGameZone = function(array){
	for (i=0; i<tableBombIt.length; i++){
		var cell = document.createElement ("div"); //al pasar por cada espacio cree un div
		var enter = document.createElement ("br"); //salto de linea

		if (array[i] == "1" | array[i] == "2" | array[i] =="3"){
			cell.className = "number";
			cell.innerText = array[i]; //le da información a la celda
			cell.onclick = showNumber; //cuando le de click que pase (se muestre) algo. en este caso el numero en rosado
  		} else if (array[i] == " "){
  			cell.className = "emptySpace";
  			cell.onclick= changeColor; //cuando le de click la celda cambie de color
  		} else if (array[i] == "*"){
  			cell.className = "bomb";
  			cell.onclick= boom; // cuando le de click nuesta bomba explotará
		}else if (array[i] == "/n"){
			bombIt.appendChild(enter);
			continue;
		}


		bombIt.appendChild(cell);
	}

	addBtnRestart(); //boton Restart cuando uno esta jugando

};

var showNumber = function (){
	this.className = "number numberShow"
};

var changeColor = function(){
	this.style.backgroundColor = "lightblue";
};

var boom = function(){
	containerBombIt.removeChild(bombIt);
	containerBombIt.innerHTML =
	"<img src='https://media.giphy.com/media/3osxYCsLd9qgsgqpwI/giphy.gif' alt='BOOM!'>";
	addBtnRestart(); //boton Restart cuando perdemos
};

var addBtnRestart = function(){ //creando boton
	var btnRestart = document.createElement("button");
	btnRestart.innerText = "Restart!!";
	btnRestart.addEventListener("click", reStart); //cuando apretemos Restart volvamos a comenzar el juego
	containerBombIt.appendChild(btnRestart);
}

var reStart = function(){
	location.reload(); //recargar o volver a la pagina de inicio
}

drawGameZone(tableBombIt);
