var ame = prompt("Введите свое имя")
var word = prompt('Введите свой возраст')
var plus = prompt("Решите пример 13+8=? ")
var munus = prompt("Решите пример 13-4=? ")
var delen = prompt("Решите пример 16/2=? ")
var umno = prompt("Решите пример 13*3=? ")
var ost = prompt("Решите пример 13%2=? ")
var one = prompt( "Введите первое число")
var two = prompt( "Введите второе число")
var three = prompt( "Введите третье число")
 
console.log("Меня завут " + ame );
console.log('Мне ' + word + " лет");
console.log("Пример1; 13+8= " + (13 + 8) + " Ваш ответ: " + plus );
console.log("Пример1; 13-4= " + (13 - 4) + " Ваш ответ: " + munus );
console.log("Пример1; 16/2=" + (16 / 2) + " Ваш ответ: " + delen );
console.log("Пример1; 13*2= " + (13 * 2) + " Ваш ответ: " + umno );
console.log("Пример1; 13%2= " + (13 % 2) + " Ваш ответ: " + ost );
alert( "Среднее арифметическое: " + ( (one + two + three) / 3) ) 