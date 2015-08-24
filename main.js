var boxes = $(".picX");
var active = $(".active");
var display= 0;

console.log(display)
$(".score").html("Score: " + display);

// var time = (Math.floor(Math.random() * 1000));
var time = 1000;
console.log(time)

setInterval(swap, time)
var pick =0 ;

var random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
console.log(random.hasClass("picX"))



function swap () 
{
	if(random.hasClass("active"))
		{
		console.log("has class active")
		random.removeClass("active").animate
			({
				opacity:1
			})
		time = (Math.floor(Math.random() * 1000));
		console.log(time)
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))


	} else {
		random.addClass("active").animate
			({
				opacity:1
			});
		console.log("running swap()")
		time = (Math.floor(Math.random() * 1000));
		console.log(time)
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
		console.log(random.hasClass("picX"))
	}
}


$("body").on("click", ".active", function(){
	console.log("Yay, click");
	$(this).removeClass("active").animate({
		opacity:1
	})
	$(this).addClass("picX")
	display++;
	$(".score").html("Score: " + display);
	console.log(display)
});

