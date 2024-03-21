function add(a) {
	return function (b) {
		return a + b;
	};
}

let addTen = add(10);
let addSeven = addTen(7);

console.log(addSeven); // 17
