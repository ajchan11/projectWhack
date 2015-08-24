var boxes = $(".picX")

var time = Math.floor(Math.random() * 1000);
console.log(time)

setInterval(swap, time)
var pick =0 ;

var random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
console.log(random.hasClass("picX"))

function swap () {
	if(random.hasClass("active")){
		console.log("has class active")
		random.removeClass("active")
		time = Math.floor(Math.random() * 1000);
		console.log(time)
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
console.log(random.hasClass("picX"))

	} else {
		random.addClass("active");
		console.log("running swap()")
		time = Math.floor(Math.random() * 1000);
		console.log(time)
		random = $(boxes.get(Math.floor(Math.random() * boxes.length)));
console.log(random.hasClass("picX"))
	}
}




