var turnCount = 0;
var boxes = document.querySelectorAll(".box");
var button = document.querySelector("button")
var turns = document.querySelectorAll(".h1")

console.log(boxes);

for(var i = 0; i < boxes.length; i++){
	boxes[i].addEventListener("click", takeTurn)
}

function takeTurn(){
	if(!this.innerHTML){
		if(turnCount % 2 === 0){
			this.innerHTML = "X";
		} else {
			this.innerHTML = "O";
		}
		turnCount++;
	}