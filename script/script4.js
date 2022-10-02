//Task 1
function task1Arr() {
	document.write (`Выводим значения массива через цикл 
		от 0 до последнего значения, вычиленного методом ".length" 
		массива<br><br>`)
	let task1Array = [1,2,3,4,5],
	arrayLength = task1Array.length;
	for (let i = 0; i < arrayLength; i++) {
		document.write (`${task1Array[i]} `)
	};
};

//Task 2
function task2Arr() {
	document.write (`Создаем цикл от 0 до последнего значения массива,
		добавляем условие > -10 и < -3, при выполнении условия выводим значения
		<br><br>`)
	let task2Array = [-2,-1,-3,15,0,-4,2,-5,9,-15,0,4,5,-6,10,7],
	arrayLength = task2Array.length;
	for (let i = 0; i < arrayLength; i++) {
		if ((task2Array[i] > -10) && (task2Array[i] < -3)) {
			document.write (`${task2Array[i]} `)
		};
	};
};

//Task 3
function task3Arr() {
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
	document.write (`<table><tr><td><b>Цикл "For"</b></td>`);
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
	document.write (`</tr><tr><td><b>Цикл "While"</b></td>`);
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
function task4Arr() {
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
	document.write(`<table><tr><td><b>Результат</b></td>`);
	for (i = 0; i < task4ArrayNumber.length; i++) {
		document.write(`<td>${task4ArrayNumber[i]}</td>`);
	}
	document.write(`</tr></table>`);
};

//Task 5
function task5ArrWeek() {
	document.write (`Создаем 2 массива: с днями недели (arrayWeek) и с месяцами (arrayMonth).<br>
		Создаем переменную (now) в которую внесли сегодняшнюю дату с помощью объекта "new Date()".<br>
		Создано много переменных которые используя разные методы берут из переменной "now" требуемые значения - год, месяц, день в месяце, день недели, часы, минуты (в файле JS прописано подробнее).<br>
		Переменная (nowWeek) дня недели вызванная методом "getDay" имеет свою специфику и имеет значения с ВС = 0 до СБ = 6, с помощью тернарного оператора переводим значение к привычному нам ПН = 0 до ВС = 6.<br>
		Далее выводим значения даты и времени в документе.<br>
		Создаем цикл for(i) от 0 до кол-ва дней недели. Проверяем является ли переменная i-итерации сегодняшним днем недели (nowWeek), если выполняется выделяем день нужным нам классом "today", заданным в style.css, если нет - продолжаем проверку.<br>
		Теперь проверяем является ли день выходным? Самым простым решением (с моей точки зрения) оказалось отрезать 2 последних значения от массива с днями недели (arrayWeek.length - 2), при условии выполнения создаем обычные ячейки таблицы, иначе ячейкам таблицы присваиваем отдельный класс "weekend", заданный в style.css<br><br>`);
	let arrayWeek = ["ПН","ВТ","СР","ЧТ","ПТ","СБ","ВС"];
	let arrayMonth = ["января","февраля",
					"марта","апреля",
					"мая","июня",
					"июля","августа",
					"сентября","октября",
					"ноября","декабря",];
	let now = new Date(),//берем сегодняшнюю дату с помощью объекта Date из системных настроек
	nowYear = now.getFullYear(), //узнаем год, метод getYear устарел
	nowMonth = now.getMonth(), //узнаем месяц от 0 до 11
	nowWeek = now.getDay(), // узнаем день недели от 0(вс) до 6 (cб)
	nowDay = now.getDate(), // узнаем день месяца от 1 до конца месяца
	nowHours = now.getHours(), // узнаем часы
	nowMinutes = now.getMinutes(); // узнаем минуты
	nowWeek === 0 ? nowWeek = 6 : nowWeek -= 1;
	//перевод значения недели от ВС (0) до 6 (СБ) к привычному от ПН (0) до ВС (6) с помощью тернарного оператора (вместо if)
	document.write(`<b>А вы знали что сейчас<br>
		${nowDay} ${arrayMonth[nowMonth]} ${nowYear} года<br>
		${nowHours}:${String(nowMinutes < 10 ?'0' + nowMinutes : nowMinutes)}</b>`);//для красоты показываем "0" перед минутами до 10
	document.write(`<table><tr><td><b>Неделя</b></td>`);
	for (i = 0; i < arrayWeek.length; i++) {
		if (i == nowWeek) {
				document.write(`<td class = "today">${arrayWeek[i]}</td>`);
			} else if (i < arrayWeek.length - 2) {
						document.write(`<td>${arrayWeek[i]}</td>`);
					} else {
						document.write(`<td class = "weekend">${arrayWeek[i]}</td>`);
					};
	};
	document.write(`</tr></table>`);
};

//Task 6
function task6Arr() {
	document.write (`Мы создали пустой массива (task6Array).
		С помощью цикла For заполнили массив от 0 до 100 (включительно).<br>
		Последний элемент массива мы вывели установив номер значения массива,<br>
		как длина массива (101) минус 1.<br><br>`)
	let task6Array = [];
	for (i = 0; i <= 100; i++) {
		task6Array.push (i);
	}
	document.write(`<b>Последний элемент массива от 0 до 100 равен 
		${task6Array[task6Array.length - 1]}</b>`);
}

//Task 7
function task7Arr() {
	document.write (`Создаем бесконечный цикл, в котором принимаем значения пользователя (i).<br>
		По очереди проверяем внутри цикла:<br>
		является ли i пустой строкой, тогда прерываем цикл;<br>
		является ли i типом Not a Number (isNaN), если да, то не берем значение и просим написать снова;<br>
		иначе берем это значение в обработку.<br>
		Добавляем i в массив (task7Array), через цикл выводим его в таблицу.<br>
		Создаем 2-й массив (task7SortArray), в который задаем 1-й массив введенных чисел (task7Array) с методом sort.<br>
		По уроку Сергея добавляем в сортировку функцию позволяющую сортировать цифры в порядке возрастания.
		<br><br>`);
	let task7Array = [];
	let task7SortArray = [];
	while (true) {
		i = +prompt ('Вводите числа. Когда устанете - оставьте поле пустым');
		if (i == '') {
			break;
		} else if (Number.isNaN(i)) {
			alert ('Вводите числа, а не строки. Попробуем ещё');
		} else {
			task7Array.push(i)
		};
	};
	document.write (`<table><tr><td><b>Все значения</b></td>`);
	for (i = 0; i < task7Array.length; i++) {
		document.write (`<td>${task7Array[i]}</td>`);
	};
	task7SortArray = task7Array.sort(function(a, b) {
		return a - b;
	});
	document.write (`</tr><tr><td><b>Сортировка</b></td>`);
	for (i = 0; i < task7SortArray.length; i++) {
		document.write (`<td>${task7SortArray[i]}</td>`);
	};
	document.write (`</tr></table>`);
};

//Task 8
function task8Arr() {
	document.write (`Создаем требуемый массив (task8Array), вводим переменную для обозначения размера массива<br>
		Применяем к массиву task8Array метод reverse.<br>
		Отображаем массив task8ArrayReverse на странице в виде таблицы через цикл for.<br>
		Разворачиваем начальный цикл снова через метод reverse, чтобы опробовать цикл while<br>
		Создаем цикл с i равной длине массива, итерации считаются пока i >= 0, уменьшаем i на 1 с каждой итерацией. Результат выводим на страницу в виде таблицы.
		<br><br>`);
	let task8Array = [12, false, 'Текст', 4, 2, -5, 0],
	task8ArrayLength = task8Array.length - 1;
	task8Array.reverse();
	//метод Reverse
	document.write (`<table><tr><td><b>Метод Reverse</b></td>`);
	for (i = 0; i <= task8ArrayLength; i++) {
		document.write (`<td>${task8Array[i]}</td>`);
	};
	document.write (`</tr>`);
	//цикл While
	document.write (`<tr><td><b>Цикл While</b></td>`);
	task8Array.reverse();
	i = task8ArrayLength;
	while (i >= 0) {
		document.write (`<td>${task8Array[i]}</td>`);
		i--;
	};
	document.write (`</tr></table>`);
};

//Task 9
function task9Arr() {
	document.write (`Создаем требуемый массив (task9Array), вводим переменную-счетчик (х)<br>
		Создаем цикл внутри которого проверяем значение элементов массива на значение "undefined". При выполнении записываем переменную х+1<br>
		Проверка выполнена через тернарный оператор (меньше символов === быстрее работа ? выше наша ценность как it-специалистов : ничего не стоим)
		<br><br>`);
	let task9Array = [5, 9, 21, , , 9, 78, , , , 6],
	x = 0;
	for (i = 0; i < task9Array.length; i++) {
		task9Array[i] === undefined ? x += 1 : x
	};
	document.write (`<b>Ответ: ${x}</b>`);
};

//Task 10
function task10Arr() {
	document.write (`Создано 2 массива в которых мы заранее будем знать - выполнятся ли условия задачи или нет<br>
		Создаем 2 переменные с методом indexOf и lastIndexOf, это позволит найти в документе индекс 1-го нуля (index) и последнего нуля (lastIndex).<br>
		Начинаем проверку if - является ли индекс первого 0 меньше индекса последнего 0?<br>
		Если проверка выполнена запускаем цикл подсчета значений от индекса первого 0 до индекса последнего 0 используя другую переменную (sum). Если проверка не выполнена, то сообщаем это пользователю.
		<br><br>`);
	let task10ArrayOne = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2,0],
	task10ArrayTwo = [1,8,1,13,76,8,7,2,22,3,2,3,2],
	sum = 0,
	index = task10ArrayOne.indexOf(0),
	lastIndex = task10ArrayOne.lastIndexOf(0);
	if (index < lastIndex) {
		for (index; index < lastIndex; index++) {
			sum += task10ArrayOne[index];
		};
		document.write (`<b>Первый массив - Ответ: ${sum}</b>`)
	} else {
		document.write (`<b>Первый массив - Ответ: Нулей меньше 2! Так не работает</b>`);
	};
	document.write (`<br>`)
	sum = 0,
	index = task10ArrayTwo.indexOf(0),
	lastIndex = task10ArrayTwo.lastIndexOf(0);
	if (index < lastIndex) {
		for (index; index < lastIndex; index++) {
			sum += task10ArrayTwo[index];
		};
		document.write (`<b>Второй массив - Ответ: ${sum}</b>`)
	} else {
		document.write (`<b>Второй массив - Ответ: Нулей меньше 2! Так не работает</b>`);
	};
};