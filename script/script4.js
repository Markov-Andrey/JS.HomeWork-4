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

//Task 3
function task3Array() {
	document.write (`Мы создали 2 пустых массива "task3ArrayFor" и "task3ArrayWhile".
	С помощью циклов For и While заполнили массив от 23 до 57 (включительно).
	При	отображении массива в документе мы создали таблицу и с помощью 
	дополнительного цикла показали все значения массива.<br>
	Сумму элементов массива мы также посчитали в обоих массивах отдельно с помощью 
	"resultFor" и "resultWhile". И сравнили значения. Результат вывели на странице.<br>`)
	//цикл FOR
	let task3ArrayFor = []; 
	for (let i = 23; i <= 57; i++){
		task3ArrayFor.push(i);
	};
	document.write (`<table><tr><td>Цикл "For"</td>`);
	for (i = 0; i < task3ArrayFor.length; i++) {
		document.write (`<td>${task3ArrayFor[i]}</td>`);
	}
	//цикл WHILE
	let task3ArrayWhile = [];
	i = 23;
	while (i <= 57) {
		task3ArrayWhile.push(i);
		i++;
	};
	document.write (`</tr><tr><td>Цикл "While"</td>`);
	i = 0;
	while (i < task3ArrayWhile.length) {
		document.write (`<td>${task3ArrayWhile[i]}</td>`);
		i++;
	};
	document.write (`</tr></table>`);
	//сумма всех элементов массива через цикл For и While
	let resultFor = 0,
	resultWhile = 0;
	for (i = 0; i < task3ArrayFor.length; i++) {
		resultFor += task3ArrayFor[i];
	};
	i = 0;
	while (i < task3ArrayWhile.length) {
		resultWhile += task3ArrayWhile[i];
		i++;
	}
	//доп проверка на равность суммы в разных массивах
	document.write(`<p>Сумма массива FOR равен ${resultFor} и массива While равен ${resultWhile}.<br>`)
	if (resultFor = resultWhile) {
		 document.write(`Массивы равны, удивительно!</p>`)
	} else {
		 document.write(`Массивы не равны, печально!</p>`)
	}
};