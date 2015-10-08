var active = $(".active");
var boxes = $(".picX");
var blank = $(".blank");
var display= 0;
var second=30;
var timing;
var interval;
var random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
var highScore = [0];

console.log(random.hasClass("picX"));
console.log(display);

$(".score").html("Score: " + display);

$(".easy").on("click", function(){
	$("body").removeClass("gameOver")
	second=30
	display =0
	interval = setInterval(startGame,1000)
	gameCount()
	console.log("easy mode")
});

$(".medium").on("click", function(){
	$("body").removeClass("gameOver")
	second=30
	display=0
	interval = setInterval(startGame,500);
	gameCount()
	console.log("medium mode")
});

$(".hard").on("click", function(){
	$("body").removeClass("gameOver")
	second=30
	display=0
	interval = setInterval(startGame,50);
	gameCount()
	console.log("hard mode")
});


function startGame() {
	swap()
	dals()
	sads()
	clears()
}



function swap () {
	if(random.hasClass("active animated slideInUp"))
	{
		random.removeClass("active animated slideInUp")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log("has class active, should clear")
	} else {
		console.log("running swap()")
		random.addClass("active animated slideInUp");
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
	}
}

function sads () {
	if(random.hasClass("sad animated slideInUp"))
	{
		random.removeClass("sad animated slideInUp")	
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log("why isn't this clearing")
	} else {
		random.addClass("sad animated slideInUp");
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		random.addClass("sad animated slideInUp");
		console.log("running swap()")
		console.log(random.hasClass("picX"))
	}
}

function dals () {
	if(random.hasClass("dalai animated slideInUp"))
	{
		random.removeClass("dalai animated slideInUp")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
	} else {
		random.addClass("dalai animated slideInUp");
		console.log("running swap()")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
	}
}


function clears () {
	if(random.hasClass("dalai animated slideInUp"))
		{
		console.log("this should clear")
		random.removeClass("dalai animated slideInUp")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
	} else {
		random.removeClass("dalai animated slideInUp")
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log("this should also clear")
	}
}
	


$("body").on("click", function() {
	console.log("Yay, click");
	var _this = $(this);
	_this.addClass("clicky");
	setTimeout( function () {
		_this.removeClass('clicky')
		}, 100);
});


$("body").on("click", ".active", function() {
	console.log("Yay, click");
	$(this).removeClass("active")
	$(this).addClass("picX")
	display=display+3;
	$(".score").html("Score: " + display);
	console.log(display)
});

$("body").on("click", ".sad", function() {
	console.log("Yay, click");
	$(this).removeClass("sad")
	$(this).addClass("picX")
	display++;
	$(".score").html("Score: " + display);
	console.log(display)
});

$("body").on("click", ".dalai", function() {
	console.log("Yay, click");
	$(this).removeClass("dalai")
	$(this).addClass("picX")
	display=display-10;
	$(".score").html("Score: " + display);
	console.log(display)
});

function gameCount() {
	$(".timer").html(second+" seconds remaining")
	second=second-1
	timer=setTimeout("gameCount()", 1000)
	if (second<1) {
		gameStop();
	}
};

function gameStop() {
	console.log(interval);
	clearTimeout(timing)
	clearInterval(interval)
	console.log("game over")
	$("body").addClass("gameOver")
	$(".active").removeClass("active")
	$(".dalai").removeClass("dalai")
	$(".sad").removeClass("sad")
	highScore.push(display)
	compare()
	$(".timer").html("Time Has Finished")
};

function compare () {
	if (highScore[0] < highScore[1]) {
		console.log ("new high score")
		highScore.splice(0,1);
		console.log(highScore)
		$(".high").html("High Score: " + highScore[0]);
	} else {
		console.log("you lose")
		highScore.pop()
		$(".high").html("High Score: " + highScore[0]);
}};

$(document).keypress(function(e) {
  if(e.which == 13) {
  	e.preventDefault();
  	dals()
  	setTimeout( function () {
  		$(".dalai").removeClass("dalai")
	}, 500)
}})

  		