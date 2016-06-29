
var colors = [
	"red", 
	"orange", 
	"yellow", 
	"green", 
	"indigo", 
	"blue", 
	"violet"];

var count = 0;

var cycle = function(array) {
	console.log(colors[count]);
	count++;
	if (count == array.length) {
		count = 0;
	} else {

	};
};
// 

var display = function(){

	document.body.style.backgroundColor = colors[count];
	cycle(colors);
	

};

// var listAll = function(array){
// 	for (var i = 0; i < array.length; i++) {
// 		document.getElementById('colorSpace').innerHTML += "<li>" + array[i] + "</li>"; 
// 	}
// }

// listAll(colors)
