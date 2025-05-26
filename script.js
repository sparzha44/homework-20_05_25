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
