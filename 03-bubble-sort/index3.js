const array = [1, 50, 28, 13, 9, 57, 87, 35, 187]
const testArray = [3, 7, 1, 16, 12, 19, 25, 13 ,10]
function bubbel(arr){
	for (let i = 0; i < array.length; i++){
			if (arr[i] > arr [i + 1]) {
				let tmp = arr[i];
				arr[i] = arr[i + 1];
				arr[i + 1] = tmp;
		    }
			console.log(arr)
	}
}

bubbel(array);
bubbel(testArray);

module.exports = bubbel;