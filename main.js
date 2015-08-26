var boxes = $(".picX");
var active = $(".active");
var display= 0;
var s=30
var q
var interval;
var random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
var gameLevel;
var easy;
var medium;
var hard;
var highScore = [0]
console.log(random.hasClass("picX"))


console.log(display)
$(".score").html("Score: " + display);

$(".easy").on("click", function(){
	$("body").removeClass("gameOver")
	s=30
	display =0
	interval = setInterval(startGame,1000)
	gameCount()
	console.log("easy mode")
});

$(".medium").on("click", function(){
	$("body").removeClass("gameOver")
	s=30
	display=0
	interval = setInterval(startGame,500);
	gameCount()
	console.log("medium mode")
});

$(".hard").on("click", function(){
	$("body").removeClass("gameOver")
	s=30
	display=0
	interval = setInterval(startGame,50);
	gameCount()
	console.log("hard mode")
});


function startGame() {
	swap()
	sads()
	dals()
}



function swap () 
	{
	if(random.hasClass("active"))
		{
		console.log("has class active")
		random.removeClass("active")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))


	} else {
		random.addClass("active");
		console.log("running swap()")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
		}
	}

function sads () 
	{
	if(random.hasClass("sad"))
		{
		console.log("has class active")
		random.removeClass("sad")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))


	} else {
		random.addClass("sad");
		console.log("running swap()")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
		}
	}

function dals () 
	{
	if(random.hasClass("dalai"))
		{
		console.log("has class active")
		random.removeClass("dalai")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))


	} else {
		random.addClass("dalai");
		console.log("running swap()")
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

$("body").on("click", ".sad", function(){
	console.log("Yay, click");
	$(this).removeClass("sad")
	$(this).addClass("picX")
	display++;
	$(".score").html("Score: " + display);
	console.log(display)
});

$("body").on("click", ".dalai", function(){
	console.log("Yay, click");
	$(this).removeClass("dalai")
	$(this).addClass("picX")
	display=display-10;
	$(".score").html("Score: " + display);
	console.log(display)
});

function gameCount()
	{
		$(".timer").html(s+" seconds remaining")
		s=s-1
		q=setTimeout("gameCount()", 1000)
	if (s<1)
	{
		gameStop();
	}
}

function gameStop()
{
	console.log(interval);
	clearTimeout(q)
	clearInterval(interval)
	console.log("game over")
	$("body").addClass("gameOver")
	$(".active").removeClass("active")
	$(".dalai").removeClass("dalai")
	$(".sad").removeClass("sad")
	highScore.push(display)
	compare()
$(".timer").html("Time Has Finished")
}

function compare () {
if (highScore[0] < highScore[1]) {
	console.log ("new high score")
	highScore.splice(0,1);
	console.log(highScore)
	$(".high").html("High Score: " + highScore[0]);
}
else {
	console.log("you lose")
	highScore.pop()
	$(".high").html("High Score: " + highScore[0]);
}}

$(document).keypress(function(e) {
  if(e.which == 13) {
  	dals()
  	setTimeout( function () {
  		$(".dalai").removeClass("dalai")
	}, 500)
}})

  		