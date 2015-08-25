var boxes = $(".picX");
var active = $(".active");
var display= 0;
var Timer;
var totalSeconds;

console.log(display)
$(".score").html("Score: " + display);

// var gameTime = (Math.floor(Math.random() * 1000));
var gameTime = 500;
console.log(gameTime)

setInterval(swap, gameTime)
var pick =0 ;

var random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
console.log(random.hasClass("picX"))





function swap () 
{
	if(random.hasClass("active"))
		{
		console.log("has class active")
		random.removeClass("active")
			
		gameTime = (Math.floor(Math.random() * 500));
		console.log(gameTime)
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))


	} else {
		random.addClass("active")
			;
		console.log("running swap()")
		gameTime = (Math.floor(Math.random() * 500));
		console.log(gameTime)
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
	}
}

$("body").on("click", function(){
	console.log("Yay, click");
	var _this = $(this);
	_this.addClass("clicky");
	setTimeout( function () {
		_this.removeClass('clicky')
	}, 100);
})


$("body").on("click", ".active", function(){
	console.log("Yay, click");
	$(this).removeClass("active")
	$(this).addClass("picX")
	display++;
	$(".score").html("Score: " + display);
	console.log(display)
});

$("body").on("click", ".active", function(){
	console.log("YOU LOSE");
});


// window.setTimeout("Tick()", 1000);
// function Tick() {
// 	function Tick()
// 	window.setTimeout("Tick()",1000);
// }

// function createTimer(timerID,Time) {
// 	Timer = document.getElementById(timerID);
// 	totalSeconds = timing;
// 	updateTimer()
// 	window.setTimeout("Tick()",1000);
// }
// function Tick() {
// 	totalSeconds -=1;
// 	updateTimer()
// 	window.setTimeout("Tick()", 1000);
// }

// function updateTimer() {
// 	fullTimer.innerHTML = totalSeconds;
// }


