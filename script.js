function isSameType(value1, value2) {
  //your js code here
	let ty1=typeof value1;
	let ty2=typeof value2;
	
	return ty1===ty2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
