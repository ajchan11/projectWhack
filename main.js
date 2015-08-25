var boxes = $(".picX");
var active = $(".active");
var display= 0;
var s=5
var q
var quickStop = setInterval(swap, 1000000)
var pick =0 ;
var random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
console.log(random.hasClass("picX"))


console.log(display)
$(".score").html("Score: " + display);


function easy() {
	setInterval(swap,1000);
	gameCount()
	quickStop = setInterval(swap, 1000000)
}

function medium() {
	setInterval(swap,500);
	gameCount()
	quickStop = setInterval(swap, 1000000)
}

function hard() {
	setInterval(swap,50);
	gameCount()
	quickStop = setInterval(swap, 1000000)
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
	clearInterval(quickStop);
	clearTimeout(q)
	console.log("game over")
	$(".active").removeClass("active")
$(".timer").html("Time Was Finished")
}
