var maxWidth = 400;
var maxPercent;
var secret;
var oldPercent;

$("form").submit(doSubmit);
$("#reset").click(restart);


function restart(){
	secret = Math.floor((Math.random() * 99) + 1);
	console.log(secret);//for debug purpose only, so the random value can be seen

	maxPercent = Math.max(Math.abs(99 - secret), secret);

	oldPercent = 0;

	var percent = $("#meter", "#progressBar");
	percent.animate({width: percentToWidth(oldPercent)}, "slower");
	
	$("#submit").show();
	$("#user_guess").val("");

	return false;
}	

function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

function percentToWidth(width){
	return width * maxWidth / maxPercent;
}

function getGuess(){
	var guess_val = $("#user_guess").val();
	
	var width = maxPercent - Math.abs(secret - guess_val);
	return width;
}


function doSubmit(){
	var width = getGuess();

	if (width == maxPercent) {
		alert("You've burned!");
		$("#submit").hide();
	}
		else if (width > oldPercent) {
			alert("It's getting hell hot!");
		}
		else if (width < oldPercent){
			alert("It's Icy!");
		} else {
			alert("It's Lukewarm");
		}
		oldPercent = width;

	var percent = $("#meter", "#progressBar");
		percent.animate({width: percentToWidth(width)}, "slower");

		return false;
}
	restart();

/*var secret;
var initUserGuess;
var userVal = $("user_guess").val();
var maxNum = 99;
var maxWidth = 400;

$("#reset").click(function(event){
	event.preventDefault();
	location.reload();
});


$("#submit").click(function(){
	
	initUserGuess = 0;
	
	console.log(secret);
	console.log(initUserGuess);
	console.log(userVal);
});*/
