document.write('<h2>Задача 1</h2>')
let task1 = function(a,b,c) {
    return (a - b) / c;
}

document.write(task1(15,5,2))

document.write('<h2>Задача 2</h2>')

let task2 = function(a) {
    return 'квадрат числа ' + a + ' = ' + Math.pow(a,2) + ', ' + 'куб числа ' + a + ' = ' + Math.pow(a,3)
}

document.write(task2(2));

document.write('<h2>Задача 3</h2>')

function min (a,b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

document.write(min(5,2))

document.write('<h2>Задача 4</h2>')
let arr4 = [];

let task4 = function() {
    let arr4Start = Number(prompt('введите первое число'));
    let arr4Finish = Number(prompt('введите последнее число'));
    for (arr4Start; arr4Start <= arr4Finish; arr4Start++) {
            arr4.push(arr4Start);
    }
        return(arr4);
    }
    
let task4Two = function() {
        return(document.write(arr4));
    }
        
    console.log(task4());
        
    task4Two();

document.write('<h2>Задача 5 </h2>')
        
let isEven = function(){
    let number = prompt('введите число');
    if (number % 2 == 0) {
         return true
    } else {
        return false
    }
    }

document.write(isEven());

document.write('<h2>Задача 6</h2>');    

let arr6 = [1,2,3,4,5,6,7,8,9,10]
let task6 = function(arr6) {
   let arr6New = [];
   for(let i = 0; i <= arr6.length; i++) {
    if (arr6[i] % 2 == 0) {
        arr6New.push(arr6[i]);
    }
   }
   return arr6New;
}

document.write(task6(arr6));

document.write('<h2>Задача 7</h2>')

let task7 = function(rows) {
    for(let i = 0; i <= rows; i++) {
        for(let j = 1; j <= i; j++) {
           if (arguments.length == 1) {
               document.write(i)
           } else if (arguments.length == 2) {
               document.write(arguments[1])
           } else null;
           
        }
        document.write('<br>')
    }
}

task7(9,'$')

document.write('<h2>Задача 9</h2>')

let arr7 = [];
let task9 = function() {
    for (let i = 0; true; i++) {
            if (arr7[i-1] + arr7[i-2] > 1000) return document.write(arr7);
            if ((i == 0) || (i == 1)) {
                arr7.push(i)
            } else {
                arr7.push(arr7[i-1] + arr7[i-2])
            }
        }
}

task9();

document.write('<h2>Задача 10 <h2>')
document.write('<p>вывел в консоль</p>')

let task10 = function(a10) {
    console.log(a10);
    a10 = String(a10);
    sum = 0;
    for (i = 0; i < a10.length; i++) {
        sum += Number(a10[i]);
    }
    if (sum <= 9) return console.log(sum)
    else return a10 = sum, task10(a10)
 }
 
 
 task10(99)

document.write('<h2>Задача 11</h2>')
document.write('<p>вывел в консоль</p>')

let j = 0;
let task11 = function(arr11) {
    console.log(arr11[j])
    j++
    if (j < arr11.length) task11(arr11) 
}

task11([1, 2, 3, 4, 5,'шесть','семь','восемь'])

document.write('<h2>Задача 12 </h2>')
document.write('<p>вывел в консоль</p>')

let task12 = function(name,surname,pat,group) {
    name = prompt('введите имя');
    surname = prompt('введите фамилию');
    pat = prompt('введите отчество');
    group = prompt('введите группу')
    let stringOne = 'Домашняя работа: "Функции"';
    let stringTwo = 'Выполнил: студент гр. ' + group;
    let stringThree = name + ' ' + surname + ' ' + pat;
    let ArrStringOne = stringOne.split('');
    let ArrStringTwo = stringTwo.split('');
    let ArrStringThree = stringThree.split('');
    let max = Math.max(ArrStringOne.length,ArrStringTwo.length,ArrStringThree.length);
    let space = ' '
    let star = '*'
    let ArrStringTop = [];
    let ArrStringBottom = [];
    for(let i = ArrStringThree.length; i < max; i++) {
        ArrStringThree.push(space)
    }
    for(let i = ArrStringTwo.length; i < max; i++) {
       ArrStringTwo.push(space)
    }
    for (let i =ArrStringOne.length; i < max; i++) {
       ArrStringOne.push(space)
    }
    for(let i = ArrStringTop.length; i < max; i++) {
        ArrStringTop.push(star)
    }
    for (let i = ArrStringBottom.length; i < max; i++) {
        ArrStringBottom.push(star);
    }
    ArrStringOne.push(star);
    ArrStringOne.unshift(star);
    ArrStringTwo.push(star);
    ArrStringTwo.unshift(star);
    ArrStringThree.push(star);
    ArrStringThree.unshift(star);
    ArrStringTop.push(star);
    ArrStringTop.unshift(star);
    ArrStringBottom.push(star);
    ArrStringBottom.unshift(star);
    ArrStringTop = ArrStringTop.join('');
    ArrStringOne = ArrStringOne.join('');
    ArrStringTwo = ArrStringTwo.join('');
    ArrStringThree = ArrStringThree.join('');
    ArrStringBottom = ArrStringBottom.join('');
    console.log(ArrStringTop);
    console.log(ArrStringOne);
    console.log(ArrStringTwo);
    console.log(ArrStringThree);
    console.log(ArrStringBottom);
}

task12()