function oddeven (x, y) {for (let x=1; x<y; x++) 
	if (x%2 == 0) 
		{console.log(x + ' is even')}
	else 
		{console.log(x + ' is odd')};
}
oddeven(1, 20)
module.exports = oddeven
