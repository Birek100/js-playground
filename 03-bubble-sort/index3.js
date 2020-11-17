const array = [1, 50 ,28, 13, 9, 57, 87, 35, 187]

function bubbel(arr){
	for (let i = 0; i < array.length - 1; i++){
		for (let j = i + 1; j < array.length - 1; j++ ){
			if (arr[i] > arr [j]) {
				let tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
		    }
			else { 
				continue 
			}
			console.log(arr)
		}
	}
}

bubbel(array);