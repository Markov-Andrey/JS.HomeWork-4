//Task 1
function task1Array() {
	document.write (`Выводим значения массива через цикл 
	от 0 до последнего значения, вычиленного методом ".length" 
	массива<br>`)
	let task1Array = [1,2,3,4,5],
	arrayLength = task1Array.length;
	for (let i = 0; i < arrayLength; i++) {
		document.write (`${task1Array[i]} `)
	};
};

//Task 2
function task2Array() {
	document.write (`Создаем цикл от 0 до последнего значения массива,
	добавляем условие > -10 и < -3, при выполнении условия выводим значения
	<br>`)
	let task2Array = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7],
	arrayLength = task2Array.length;
	for (let i = 0; i < arrayLength; i++) {
		if ((task2Array[i] > -10) && (task2Array[i] < -3)) {
			document.write (`${task2Array[i]} `)
		};
	};
};