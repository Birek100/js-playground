const array = [15, 8, 3, 1, 21, 17, 9]
function bubble(arr){
	for (let i = 0; i < arr.length - 1; i++){
		for (let j = 0 ; j < arr.length -1 - i; j++){
			if (arr[j] > arr [j + 1]) {
				const tmp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = tmp;
		    }
		    
		}
	}
	return arr;
}
bubble(array);

module.exports = bubble;
