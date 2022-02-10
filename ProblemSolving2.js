

//JavaScript implementation of the approach

	// Function to return the
	// reverse of a number
	function reverse(n) {
	let rev = 0;
	while (n != 0) {
		rev = (rev * 10) + (n % 10);
		n = Math.floor(n / 10);
	}
	return rev;
}

	// Function to find the sum of the odd
	// and even positioned digits in a number
	function getSum(n) {
		n = reverse(n);
		let sumOdd = 0, sumEven = 0, c = 1;

		while (n != 0) {

		// If c is even number then it means
		// digit extracted is at even place
		if (c % 2 == 0)
			sumEven += n % 10;
		else
			sumOdd += n % 10;
		n = Math.floor(n / 10);
		c++;
	}

	document.write("Sum odd = " + sumOdd);
	document.write("<br>");
	document.write("Sum even = " + sumEven);
}
	let n = 457892;
	// function call
	getSum(n);

// This code is contributed by Surbhi Tyagi


