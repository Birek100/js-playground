
const array = []
function randomNumber(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
  	return  Math.floor(Math.random() * (max - min)) + min;
}
for (let i=1; i<=100; i++) {array.push(randomNumber(1,1001))}
let result = function(arg) {Math.max(arg)};
console.log(array);
console.log('The highest number is ' + result(5, 19));

module.exports = result
