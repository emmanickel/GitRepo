console.log("Hello World");
function dispMessage(){
let time = prompt("Please enter the time of day (am/pm): ");
let morningMsg = "Good Morning";
let eveningMsg = "Good Evening";
	switch(time){
		case "am":
			console.log(morningMsg);
			break;
		case "pm":
			console.log(eveningMsg);
			break
		default:
			console.log("Invalid entry);
}
}



