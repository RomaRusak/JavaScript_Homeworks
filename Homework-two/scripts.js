//Задача 1

let name = prompt('введите вашемя имя'),
    age = prompt('введите ваш возраст'),
    city = prompt('введите ваш город'),
    phone = prompt('введите ваш телефон'),
    email = prompt('введите вашу почту'),
    company = prompt ('введите название компании где работаете');

console.log('Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.');

//Задача 2
 
let yearOfBirth = 2022 - age,
    yearOfBirthTwo = yearOfBirth - 1;

console.log('Ваш год рождения ' + yearOfBirth + ' или ' + yearOfBirthTwo);


//Задача 3 

//Задача 4

let a = 0;
(a > 0) ? console.log('Верно') : console.log('Неверно')

//Задача 5
a = 10;
let b = 2;
    sum = a + b,
    diff = a - b,
    mult = a * b,
    div = a / b;
console.log('Сумма переменных a и b = ' + sum + ', ' + 'Разность переменных a и b = ' + diff + ', ' + 'Произведение переменных a и b = ' + mult + ', ' + 'Частное переменных a и b = ' + div)

let sumResult,
    squared;

sumResult = sum + diff + mult + div;

if (sumResult > 1) {
    squared = Math.pow(sumResult,2)
    console.log('Сумма вышеперечисленных результатов, возведенная в квадрат, составит ' + squared);
} else {
    
}

//Задача 6

 ((a > 2  && a < 11) || (b >= 6 && b < 14)) ? console.log('верно') : console.log('неверно');

//Задача 7
    let n = prompt('введите число от 0 до 59') 

if (n >= 0 && n <= 59) {
    if (n == 0) {
        console.log('вы ввели 0')
    } else if (n <= 15) {
        console.log('введенное вами число попадает в первую четверть часа')
    } else if (n <= 30) {
        console.log('введенное вами число попадает во вторую четверть часа')
    } else if (n <= 45) {
        console.log('введенное вами число попадает в третью четверть часа')
    } else {
        console.log('введенное вами число попадает в четвертую четверть часа')
    }
} else {
    console.log('вы ввели неверное число')
}

//Задача 8

let day = prompt('введите число от 1 до 31');

if (day >=1 && day <= 31) {
    if (day <= 10) {
        console.log('введенное вами число попадает в первую декаду месяца');
    } else if (day <= 20) {
        console.log('введенное вами число попаадает во вторую декаду месяца');
    } else {
        console.log('введенное вами число попадает в третью декаду месяца');
    }
} else {
    console.log('вы ввели неверное число')
}

//Задача 9

let days = prompt('введите колличество дней');
let years = days / 365,
    month = days / 31,
    weeks = days / 7,
    hours = days * 24,
    minutes = days * 1440,
    seconds = days * 86400;

if (days < 0) {
    console.log('вы ввели отрицательное число');
} else if (days == 0) {
    console.log('вы ввели ноль');
} else {
    if (days >= 365) {
        console.log('это составит ' + years + ' года' )
    } else {
        console.log('Меньше года')
    }
    if (days >= 31) {
        console.log('это составит ' + month + ' месяца')
    } else {
        console.log('Меньше месяца')
    }
    if (days >= 7) {
        console.log('это составит ' + weeks + ' недели')
    } else {
        console.log('Меньше недели')
    }
    if (days >= 0.0416) {
        console.log('это составит ' + hours + ' часов')
    } else {
        console.log('Меньше часа')
    }
    if (days >= 0.000694) {
        console.log('это составит ' + minutes + ' минут')
    } else {
        console.log('Меньше минуты')
    }
    if (days >= 0.00001157407)  {
        console.log ('это составит ' + seconds + ' секунд')
    } else {
        console.log('не секунды')
    }
}

//Задача 10
let day10 = 454,
    b10,
    c10;

if (day10 < 0) {
    console.log('вы ввели отрицательное число')
}

else if (day10 == 0) {
    console.log('вы ввели 0')
}

else if (day10 > 0 && day10 <= 365) {
    if (day10 >= 1 && day10 <=31) {
        c10 = 'январь'
        console.log(c10);
    } else if (day10 > 31 && day10 <= 59 ) {
        c10 = 'февраль'
        console.log(c10);
    } else if (day10 > 59 && day10 <= 90) {
        c10 = 'март'
        console.log(c10);
    } else if (day10 > 90 && day10 <= 120) {
        c10 = 'апрель'
        console.log(c10);
    } else if (day10 >120 && day10 <= 151) {
        c10 = 'май'
        console.log(c10);
    } else if (day10 > 151 && day10 <= 181) {
        c10 = 'июнь'
        console.log(c10);
    } else if (day10 > 181 && day10 <= 212 ) {
        c10 = 'июль'
        console.log(c10);
    } else if (day10 > 212 && day10 <= 243) {
        c10 = 'август'
        console.log(c10);
    } else if (day10 > 243 && day10 <= 273) {
        c10 = 'сентябрь'
        console.log(c10)
    } else if (day10 > 273 && day10 <= 304) {
        c10 = 'октябрь'
        console.log(c10)
    } else if (day10 > 304 && day10 <= 334) {
        c10 = 'ноябрь'
        console.log(c10)
    }  else {
        c10 = 'декабрь'
        console.log(c10)
    }
    switch(c10) {
        case 'январь':
            console.log('зима')
        break
        case 'февраль':
            console.log('зима')
        break
        case 'март':
            console.log('весна')
        break
        case 'апрель':
            console.log('весна')
        break
        case 'май':
            console.log('весна')
        break
        case 'июнь':
            console.log('лето')
        break
        case 'июль':
            console.log('лето')
        break
        case 'август':
            console.log('лето')
        break
        case 'сентябрь':
            console.log('осень')
        break
        case 'октябрь':
            console.log('осень')
        break
        case 'ноябрь':
            console.log('осень')
        break
        case 'декабрь':
            console.log('зима')
        break
    } 
}

else {
    b10 = ( day10 % 365);
    if (b10 >= 1 && b10 <=31) {
        c10 = 'январь'
        console.log(c10);
    } else if (b10 > 31 && b10 <= 59 ) {
        c10 = 'февраль'
        console.log(c10);
    } else if (b10 > 59 && b10 <= 90) {
        c10 = 'март'
        console.log(c10);
    } else if (b10 > 90 && b10 <= 120) {
        c10 = 'апрель'
        console.log(c10);
    } else if (b10 >120 && b10 <= 151) {
        c10 = 'май'
        console.log(c10);
    } else if (b10 > 151 && b10 <= 181) {
        c10 = 'июнь'
        console.log(c10);
    } else if (b10 > 181 && b10 <= 212 ) {
        c10 = 'июль'
        console.log(c10);
    } else if (b10 > 212 && b10 <= 243) {
        c10 = 'август'
        console.log(c10);
    } else if (b10 > 243 && b10 <= 273) {
        c10 = 'сентябрь'
        console.log(c10)
    } else if (b10 > 273 && b10 <= 304) {
        c10 = 'октябрь'
        console.log(c10)
    } else if (b10 > 304 && b10 <= 334) {
        c10 = 'ноябрь'
        console.log(c10)
    }  else {
        c10 = 'декабрь'
        console.log(c10)
    }
    switch(c10) {
        case 'январь':
            console.log('зима')
        break
        case 'февраль':
            console.log('зима')
        break
        case 'март':
            console.log('весна')
        break
        case 'апрель':
            console.log('весна')
        break
        case 'май':
            console.log('весна')
        break
        case 'июнь':
            console.log('лето')
        break
        case 'июль':
            console.log('лето')
        break
        case 'август':
            console.log('лето')
        break
        case 'сентябрь':
            console.log('осень')
        break
        case 'октябрь':
            console.log('осень')
        break
        case 'ноябрь':
            console.log('осень')
        break
        case 'декабрь':
            console.log('зима')
        break
    }
}

