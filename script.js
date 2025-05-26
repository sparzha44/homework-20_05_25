// Задание 1.1
const daysOfWeek = {
  1: 'Понедельник',
  2: 'Вторник',
  3: 'Среда',
  4: 'Четверг',
  5: 'Пятница',
  6: 'Суббота',
  7: 'Воскресенье'
};

console.log(daysOfWeek[2]);

// Задание 1.2
const user = {
  name: 'Пётр',
  surname: 'Иванов',
  age: 18
};

console.log(user.surname + ' - ' + user.name + ' - ' + user.age);

// Задание 1.3
const patronymic = prompt('Введите ваше отчество:');
user.patronymic = patronymic;

// Задание 1.4
delete user.surname;

// проверка
console.log(user);

// Задание 2.1

const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];

// Создаем объект
const daysObj = {};
for (let i = 0; i < arr1.length; i++) {
  daysObj[arr1[i]] = arr2[i];
}

console.log(daysObj);

// Задание 2.2

const obj = {x: 1, y: 2, z: 3};

// Перебираем объект и возводим каждое значение в квадрат
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    obj[key] = obj[key] ** 2;
  }
}

console.log(obj);

// Задание 3

const obj = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

// Инициализируем сумму
let totalSum = 0;

// Перебираем верхний уровень объекта
for (let outerKey in obj) {
  if (obj.hasOwnProperty(outerKey)) {
    const innerObj = obj[outerKey];
    // Перебираем внутренний объект
    for (let innerKey in innerObj) {
      if (innerObj.hasOwnProperty(innerKey)) {
        totalSum += innerObj[innerKey];
      }
    }
  }
}

console.log("Сумма элементов:", totalSum);

const riddles = {
  question: "Что всегда идет, но никогда не приходит?",
  answer: "время",
  hints: [
    "Это не человек и не животное.",
    "Его нельзя остановить или вернуть назад."
  ],
  askQuestion() {
    let attempts = 0;
    while (attempts < 3) {
      const userAnswer = prompt(this.question + (attempts > 0 ? `\nПодсказка: ${this.hints[attempts - 1]}` : ""));
      if (!userAnswer) {
        console.log("Вы отменили игру.");
        return;
      }
      if (userAnswer.trim().toLowerCase() === this.answer.toLowerCase()) {
        console.log("Правильно! Вы выиграли!");
        return;
      } else {
        attempts++;
        if (attempts === 3) {
          console.log("Вы проиграли");
        }
      }
    }
  }
};

// Запуск загадки
riddles.askQuestion();

