document.write('<h2>Задача 1 </h2>')

let arr1 = [1,2,3,4,5];

for (let i = 0; i <arr1.length; i++) {
    document.write(arr1[i] + '<br>');
}

document.write('<h2>Задача 2 </h2>')

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i2 = 0; i2 < arr2.length; i2++) {
    if (arr2[i2] > -10 && arr2[i2] < -3) document.write(arr2[i2] + '<br>')
}

document.write('<h2>Задача 3 </h2>')

let i3One = 23;
let arr3One = [];
let counter3One = 0;

let i3Two = 23;
let arr3Two = [];
let coutner3Two = 0;

while(i3One <= 57) {
    arr3One[counter3One] = i3One;
    counter3One++
    i3One++
    result = 0;
}

// console.log(counter3One);
document.write(arr3One);

for (i3Two = 23; i3Two <= 57; i3Two++) {
    arr3Two[coutner3Two] = i3Two;
    coutner3Two++; 
    result += i3Two;
}
document.write('<br>')
document.write(arr3Two);
document.write('<br>')
document.write('сумма составит ' + result);

document.write('<h2>Задача 4 </h2>')

let arr4 = ['10' , '20', '30', '50', '235', '3000'];
let number4;
let i4One;

for (i4One = 0; i4One < arr4.length; i4One++) {
    number4 =arr4[i4One]; 
    if (number4[0] == '1' || number4[0] == '2' || number4[0] == '5') document.write(Number(number4) + '<br>');
}

document.write('<h2>Задача 5 </h2>')

let arr5 = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'] 
let i5;

for (i5 = 0; i5 < arr5.length; i5++) {
    document.write(arr5[i5] + ' ');
    //жирный шрифт
}

document.write('<h2>Задача 6 </h2>')

let arr6 = ['1', '2', '3', '4', '5']
arr6.push('новый элемент');
document.write(arr6[arr6.length - 1]);

document.write('<h2>Задача 7 </h2>')

// let arr7 = [];
// let counter = 0;

// while(true) {
//     let a = prompt('введи')
//     if (a == '2') break 
//     else {
//         a = Number(a);
//         if (isNaN(a)) {
//             alert('ввели не число');
//             continue;
//         } else {
//             arr7[counter] = a;
//             counter++;
//         }
//     }
// }

// document.write(arr7);

document.write('<h2>Задача 8 </h2>')

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let counter = 0;

while(true) {
    if (counter > 0) break;
    arr8.reverse();
    counter++
}

document.write(arr8);

document.write('<h2>Задача 9 </h2>')

let arr9 = [5,9,21,,,9,78,,,,6]
counter = 0;

for (let i9 = 0; i9 < arr9.length; i9++) {
    if (arr9[i9] === undefined) counter++;
}

document.write('колличество пустых элементов в массива составит  ' + counter);

document.write('<h2>Задача 10 </h2>')

let arr10 = [48,9,0,4,21,2,1,1,84,76,0,4,13,2];
let a10 = arr10.indexOf(0);
let b10 = arr10.lastIndexOf(0);
sum10 = 0;

if ((a10 == b10) || (a10 == -1)   ) {
    document.write('в массиве менее двух нулей')
} else {
    for (let i10 = a10; i10 <= b10; i10++) {
        sum10 += arr10[i10];
    }
    document.write('Сумма элементов в массиве между двумя нулями составит ' + sum10);
}