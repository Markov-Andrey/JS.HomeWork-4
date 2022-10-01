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
	};
	//доп проверка на равность суммы в разных массивах
	document.write(`<p>Сумма массива FOR равен ${resultFor} и массива While равен ${resultWhile}.<br>`)
	if (resultFor = resultWhile) {
		 document.write(`Массивы равны, удивительно!</p>`)
	} else {
		 document.write(`Массивы не равны, печально!</p>`)
	};
};

//Task 4
function task4Array() {
	document.write (`Мы создали 2 массива: "task4ArrayString" (искомый) и "task4ArrayNumber" (пустой).
	Запускаем цикл "for" и вкладываем в него условное ветвления "if".<br>
	Условием является проверка первого значения каждого элемента массива на 
	требуемое значение (1, 2, 5) с помощью объекта "Number ()".<br>
	При условии выполнения условия мы добавляем элемент в "новый" массив "task4ArrayNumber" 
	с помощью метода "push".<br>
	При выводе значений нового массива для красоты мы оборачиваем их в таблицу с посощью доп.цикла`)
	let task4ArrayString = ["10","20","30","50","235","3000"],
	task4ArrayNumber = [];
	for (i = 0; i < task4ArrayString.length; i++) {
		if (
			(Number(task4ArrayString[i][0]) === 1) ||
			(Number(task4ArrayString[i][0]) === 2) ||
			(Number(task4ArrayString[i][0]) === 5)
		) {
			task4ArrayNumber.push(task4ArrayString[i]);
		};
	};
	document.write(`<table><tr><td>Результат</td>`);
	for (i = 0; i < task4ArrayNumber.length; i++) {
		document.write(`<td>${task4ArrayNumber[i]}</td>`);
	}
	document.write(`</tr></table>`);
};

//Task 5
function task5ArrayWeek() {
	document.write (`<br>`);
	let task5ArrayWeek = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];
	let now = new Date();//берем сегодняшнюю дату с помощью объекта Date
	document.write(`<table><tr><td>Неделя</td>`);
	for (i = 0; i < task5ArrayWeek.length; i++) {
		if (i < task5ArrayWeek.length - 2) {
			document.write(`<td>${task5ArrayWeek[i]}</td>`);
		} else {
			document.write(`<td class = "weekend">${task5ArrayWeek[i]}</td>`);
		};
	};
	document.write(`</tr></table>`);
};