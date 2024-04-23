<script>
const mathLibrary = new MathLibrary();						// Создание объекта MathLibrary / Creating a MathLibrary object
const trigonometryFunctions = new TrigonometryFunctions();	// Создание объекта TrigonometryFunctions / Creating a TrigonometryFunctions object

const calculator = document.getElementById('calculator');	// Получение элемента с идентификатором "calculator" / Getting an item with the ID "calculator"
const result = document.querySelector('.result');			// Получение первого элемента с классом "result" / Getting the first element with the "result" class

calculator.addEventListener('submit', (e) => {				// Добавление обработчика события "submit" для формы / Adding a "submit" event handler for the form
  e.preventDefault();										// Отмена стандартного поведения формы / Canceling the standard behavior of the form

  const num1 = Number(document.getElementById('num1').value);	// Получение значения из первого поля ввода
  const num2 = Number(document.getElementById('num2').value);	// Получение значения из второго поля ввода
  const operation = document.getElementById('operation').value;	// Получение выбранной операции из списка

  let output;												// Объявление переменной для результата вычислений

  switch (operation) {										// Выбор операции в зависимости от выбранного значения
    case 'add':
      output = mathLibrary.add(num1, num2);					// Сложение
      break;
    case 'subtract':
      output = mathLibrary.subtract(num1, num2);			// Вычитание
      break;
    case 'multiply':
      output = mathLibrary.multiply(num1, num2);			// Умножение
      break;
    case 'divide':
      output = mathLibrary.divide(num1, num2);				// Деление
      break;
    case 'square-root':
      output = mathLibrary.squareRoot(num1);				// Квадратный корень
      break;
    case 'power':
      output = mathLibrary.power(num1, num2);				// Возведение в степень
      break;
    case 'sin':
      output = trigonometryFunctions.sin(num1); 			// Синус
      break;
    case 'cos':
      output = trigonometryFunctions.cos(num1); 			// Косинус
      break;
    case 'tan':
      output = trigonometryFunctions.tan(num1); 			// Тангенс
      break;
  }

  document.getElementById('output').textContent = output; 	// Установка результата в элемент с идентификатором "output"
});

  </script>