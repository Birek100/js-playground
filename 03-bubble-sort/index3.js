const array = [15, 8, 3, 1, 21, 17, 9]
function bubbel(arr){
	for (let i = 0; i < arr.length - 1; i++){
		for (let j = 0 ; j < arr.length -1 - i; j++){
			if (arr[j] > arr [j + 1]) {
				let tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
		    }
		    
		}
	}
	console.log(arr);
	return arr;
}
bubbel(array);

module.exports = bubbel;
