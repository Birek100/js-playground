const array = []
function randomNumber(min, max) {
	min = Math.ceil(min);
  	max = Math.floor(max);
  	return  Math.floor(Math.random() * (max - min)) + min;
}
for (let i=1; i<=100; i++) {array.push(randomNumber(1,1001))}
let result = Math.max(...array)
console.log(array);
console.log('The highest number is ' + result);
