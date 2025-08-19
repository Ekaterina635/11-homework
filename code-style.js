// 1 задание
// Возьмите следующий код и приведите его в соответствие с общепринятым стандартом форматирования,
// соблюдая отступы, выравнивание и правила расстановки пробелов:
function multiply (a, b) {
  return a * b;
}
const person = {name: 'Alice', age: 30};
if (person.age > 18) { 
  console.log('Adult'); 
} else { 
  console.log('Minor'); 
}

// 2 задание
// Представьте, что вы работаете в команде, и вам нужно сделать код понятным для всех участников.
// Перепишите следующий код, используя понятные и логичные имена переменных и функций:
function multiply(a, b) {
  let result = a * b;
  return result;
}
let numbers = multiply(5, 10);

// 3 задание
// Убедитесь, что в коде используется единый стиль оформления. В следующем коде присутствуют смешанные стили кавычек,
// разное использование var, let, и const, а также различное форматирование объектов и массивов. Исправьте код:
const items = ['apple', 'banana', 'orange'];
const price = [ 
  { name: 'apple', price: 1 },
  { name: 'banana', price: 2 },
  { name: 'orange', price: 3 }
  ];
const total = price[0].price + price[1].price + price[2].price;

function calculateTotal(items) {
  return items.reduce(function (total, item) { 
    return total + item.price; }, 0);
}

// 4 задание
// Создайте функцию validateForm, которая принимает объект формы с полями name, email и password.
// Она должна выполнять проверки для каждого поля. Если какое-то поле не заполнено или содержит неверные данные,
// функция должна сразу возвращать ошибку, используя guard expressions. Если все данные верны,
// функция должна возвращать сообщение "Форма успешно отправлена".
const firstName = 'Anna';
const email = 'anna@gmail.com';
const password = '12345678';
const userForm = [firstName, email, password];

function validateForm(userForm) {
  const [name, email, password] = userForm;
    
    if (!firstName) {
        console.log('Имя не введено');
        return;
    }

    if (!email) {
        console.log('Email-адрес не введен');
        return;
    }

    if (!password) {
        console.log('Пароль не введен');
        return;
    }

    console.log('Форма успешно отправлена');
};

console.log(validateForm(userForm))
