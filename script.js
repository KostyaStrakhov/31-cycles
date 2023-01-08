
// ДЗ #1-1
let age = prompt('Вкажіть ваш вік');

if (isNaN(age) || age < 0) {
    alert('Ви ввели не допустиме значення');
}
else if ( age>= 0 && age <= 11) {
    alert('Ви дитина');
}
else if ( age >= 12 && age <= 17){
    alert('Ви підліток');
}
else if ( age >=18 && age <=59){
    alert('Ви доросла людина');
}
else if (age >= 60){
    alert('Ви пенсіонер');
}10

// ДЗ №1-2

let key = prompt("Введіть клавішу від 0 до 9");

if ( isNaN(key) || key < 0 || key > 9) {
    alert ('Введено не допустиме значення');
}

else if (key % 1 !== 0){ 
    alert ('Введено не допустиме значення');
}
let symb = 'Спецсимвол на введеній клавіші це -'

if (key == 0){
    alert(`${symb} ' ) '`);
}
else if(key == 1){
    alert(`${symb} ' ! '`);
}
else if (key == 2){
    alert(`${symb} ' @ '`);
}
else if (key == 3){
    alert(`${symb} ' # '`);
}
else if (key == 4){
    alert(`${symb} ' $ '`);
}
else if (key == 5){
    alert(`${symb} ' % '`);
}
else if (key == 6){
    alert(`${symb} ' ^ '`);
}
else if (key == 7){
    alert(`${symb} ' & '`);
}
else if (key == 8){
    alert(`${symb} ' * '`);
}
else if (key == 9){
    alert(`${symb} ' ( '`);
}

// ДЗ #1-3

let num1 = Number(prompt('Введіть перше число діапазону'));
let num2 = Number(prompt('Введіт друге число діапазону'));
let sum = 0;

for (let i = num1; i <= num2; i++) {
    sum += i;
}
alert(`Сумма чисел діапазону = ${sum}`);


// ДЗ #1-4

let numb1 = +prompt("Введіть перше число діапазону")
let numb2 = +prompt("Введіть друге число діапазону")
let gcd

for (let i = 0; i < numb1; i++) {
    if ((numb1/i) % 1 == 0  && (numb2/i) % 1 == 0 && i!=numb1 && i!=numb2){
    gcd = i;
    }
 }
 alert(`Найбільший спільний дільник для чисел ${numb1} і ${numb2} є число ${gcd}`)


// ДЗ #1-5

let a = Number(prompt('Введіть число'));
let divide = " "

for (let i = a; i > 0; i-- ){
    if (((a/i) % 1) == 0){
        divide += i + " ";
    }
}
alert(`Дільниками числа ${a} є : ${divide}`);


// ДЗ #2-1

let num = prompt("Введіть п'ятирозрядне число")
let numPil = +num;
let p = ""

for( let i = 5; i > 0; i--){
    let n = numPil % 10;
    numPil = (numPil/10) - (n/10);
    p += n;
}
if ( p == num ){
    alert('Число є піліндрімом')
}
else{
    alert('Число не являється піліндримом')
}
