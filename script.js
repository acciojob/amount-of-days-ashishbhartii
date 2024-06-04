// //your JS code here. If required.
// let year = window.promt("Enter a Year");
// year=Number(year);
// let result = daysOfYear(year);
// console.log(result);
// function daysOfAYear(year){
// 	// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
// 	// 	return 366;
// 	// }
// 	// else{
// 	// 	return 365;
// 	// }
// 	if(year%4===0){
// 		if(year% 100)
// 	}
// }
function checkLeapYear(year) {
    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return 366;
    } else {
        return 365;
    }
}
// take input
const year = prompt('Enter a year:');
console.log(checkLeapYear(year));