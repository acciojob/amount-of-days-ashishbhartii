//your JS code here. If required.
let year = window.promt("Enter a Year");
let result = daysOfYear(year);
console.log(result);
function daysOfYear(year){
	if (year % 100 === 0){
		if(year % 400 === 0){
			if(year % 4 === 0){
				return 366;
			}
		}
	}
	else{
			return 365;
		}
}
