function oddeven (x, y) {for (let x=1; x<y; x++) 
	if (x%2 == 0) 
		{console.log(x + ' jest parzysta')}
	else 
		{console.log(x + ' jest nieparzysta')};
}
oddeven(1, 20)
module.exports = oddeven
