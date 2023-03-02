// 1 - Запитай у користувача п’ ятирозрядне число і визначи, чи є воно паліндромом.

let number = prompt("Введіть п'ятирозрядне число");

if (number[0] === number[4] && number[1] === number[3]) {
    alert(`${number} є паліндромом`);
} else {
    alert(`${number} не паліндром`);
}


// 2 -  Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
//      від 200 до 300 - знижка буде 3 % ;
//      від 300 до 500 - 5 % ;
//      від 500 і вище - 7 % .

let purchaseAmount = +prompt("Введіть суму покупки");
let discount;

switch (true) {
    case (purchaseAmount >= 200 && purchaseAmount < 300):
        discount = purchaseAmount * 0.03;
        break;
    case (purchaseAmount >= 300 && purchaseAmount < 500):
        discount = purchaseAmount * 0.05;
        break;
    case (purchaseAmount >= 500):
        discount = purchaseAmount * 0.07;
        break;
    default:
        alert("Нажаль знижка для вашої покупки не передбачена. Можливо оберете ще товар?");

}

if (discount !== undefined) {
    let totalAmount = purchaseAmount - discount;
    alert(`Сума до оплати зі знижкою становить ${totalAmount}`);
}

// 3 -  Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ ємних і нулів.
//      При цьому також порахуй, скільки з них парних і непарних.Виведи статистику на екран.
//      Враховуй, що достатньо однієї змінної(не 10) для введення чисел користувачем.


let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < 10; i++) {
    let num = +prompt(`Введіть число №${i+1}`);

    if (num > 0) {
        positive++;
        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    } else if (num < 0) {
        negative++;
        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    } else {
        zero++;
    }
}

alert(`Кількість додатніх чисел: ${positive}, від'ємних чисел: ${negative}, нулів: ${zero}, парних чисел: ${even}, непарних чисел: ${odd}.`);


// 4 -  Зацикли відображення днів тижня таким чином: «День тижня.
//      Хочеш побачити наступний день ? » і так до тих пір, поки користувач натискає OK.


const daysOfWeek = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let і = 0;

while (confirm(daysOfWeek[i] + ". Хочеш побачити наступний день тижня?")) {
    і = (і + 1) % daysOfWeek.length;
}