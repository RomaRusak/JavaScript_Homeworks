document.write('<h2>Задача 1</h2>')

let strTask1 = 'aaa@bbb@ccc'

document.write(strTask1.replace(/@/g,'!'));

document.write('<h2>Задача 2</h2>')

let strTask2 = '2025-12-31'

newSttTask2 = strTask2.replace(/-/g, '/')
document.write(newSttTask2.replace(/(2025)(\/12\/)(31)/g, '$3$2$1'))

document.write('<h2>Задача 3</h2>')

let string3 = 'Я учу javascript!'
console.log(string3.split(''))
document.write(string3.substring(2,5) + ' ' + string3.substring(6,16) + '<br>');
document.write(string3.substr(2,4) + ' ' + string3.substr(6,10) + '<br>')
document.write(string3.slice(2,5) + ' ' + string3.slice(6,16));

document.write('<h2>Задача 4</h2>');
let arr = [4,2,5,19,13,0,10];
sum = 0;

for (let i = 0;i < arr.length; i++) {
    sum += Math.pow(arr[i],2)
}

document.write(Math.sqrt(675))

document.write('<h2>Задача 5</h2>')

let task5 = function(a,b) {
    c = a - b;
    return document.write(Math.abs(c)) 
}

task5(1,11);

document.write('<h2>Задача 7</h2>')

let task7 = function(string) {
    return document.write(string.match(/\bab*a\b/gi))
}

task7('aa aba abba abbba abca abea')

document.write('<h2>Задача 8 </h2>')

let task9 = function(number) {
    let regexp = /\+?375\s?\(?\d{2,4}\)?\s?\d{2,3}\s?\d{2}\s?\d{1,2}/gi
    document.write(regexp.test(number))
}

task9('+375 (17) 333 11 22')