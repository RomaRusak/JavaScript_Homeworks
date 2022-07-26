document.write('<h2>Задача 1</h2>')

for(let i1 = 1; i1 <= 50; i1 ++) {
   document.write(i1 + ' ' );
}

document.write('<br>')
document.write('<br>')


for(let j1 = 35; j1 >= 8; j1--) {
    document.write(j1 + ' ');
}

document.write('<h2>Задача 2</h2>')

let i2 = 89;

while (i2 >= 11) {
    document.write(i2 + '<br>');
    i2--;
}

document.write('<h2>Задача 3</h2>')

let sum3 = 0;

for (let i3 = 0; i3 <= 100; i3++) {
    sum3 += i3;
}

document.write('сумма чисел от 0 до 100 составит ' + sum3);

document.write('<h2>Задача 4</h2 >')

let sum4 = 0;
let sumResult4 = 0;

for (let i4 = 1; i4 <= 5; i4++) {
    sum4 = 0;
    for(let j4 = 1; j4 <= i4; j4++) {
        sum4 += j4;
    }
    sumResult4 = sum4;
  document.write('сумма чисел в числе ' + i4 + ' = ' + sumResult4 + '<br>')
}

document.write('<h2>Задача 5</h2 >')

let i5 = 8,
    j5 = 8;

while ( i5 <= 56) {
    if (i5 % 2 == 0) {
       document.write(i5 + ' ')
    } else {
        null
    }
    i5++
}

document.write('<br>')
document.write('<br>')

for (j5; j5 <= 56; j5++) {
    if (j5 % 2 != 0) continue;
    document.write(j5 + ' ')
}


document.write('<h2>Задача 6</h2 >') 

let i6,
    j6,
    sum6,
    dash6 = '... <br>';

for (i6 = 1; i6 <= 10; i6++) {
    for (j6 = 1; j6 <= 10; j6++) {
        sum6 = i6 * j6;
        document.write( i6 + ' * ' + j6 + ' = ' + sum6 +'<br>' )
    }
    document.write(dash6);
}


document.write('<h2>Задача 7</h2 >') 

let i7 = 1000,
    counter7 = 0;

// Не очень понимаю условие, если критерием успешно выполненного условия будет наименьший остаток при делении на два больше 50,то:
// for (i7; i7 >= 50; i7 /= 2 ) {
//     counter7 +=1;
//     console.log(i7);
// }

// если наибольший остаток (меньше 50) при делении на два,то:
do {
    i7 /= 2;
    counter7 += 1;
    console.log(i7);
} while ( i7>= 50 )

document.write('для этого потребуется ' + counter7 + ' итераций')

document.write('<h2>Задача 8</h2 >') 

let i8,
    sum8 = 0,
    counter8 = 0,
    rezult8 = 0;

while (i8 != 0) {
        i8 = Number(prompt('введите число'));
        if (i8 == NaN) {
            console.log(i8, typeof i8)
            continue
        } else {
            sum8 += i8;
        }
        counter8 += 1;
}

rezult8 = sum8 / counter8;
document.write('Сумма введенных чисел = ' + sum8 + '<br>');
document.write('Среднее арифметическое введенных чисел = ' + rezult8)


document.write('<h2>Задача 10</h2 >') 

let n10 = '88005553535',
    rez10,
    sum10 = 0,
    j10 = n10.length-1,
    reverseRez10,
    reverseSum10 = '';

for (i10 = 0; i10 < n10.length; i10++) {
    document.write(n10[i10] + ' ');
    rez10 = parseInt(n10[i10]);
    sum10 += rez10;
}

for (j10; j10 >= 0; j10--) {
    reverseRez10 = n10[j10];
    reverseSum10 += reverseRez10;
}
document.write('<br>');
document.write('Цифр в числе ' + n10.length + '<br>');
document.write('Сумма ' + sum10 + '<br>');
document.write('Обратный порядок ' + reverseSum10)

