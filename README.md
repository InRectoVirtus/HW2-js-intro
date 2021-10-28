#  5-ое задание # 

## Напишите пару простых арифметических вычислений: ##  

+ суммирование двух чисел
<let mathAdd = 3 + 2>
> Бинарный плюс суммирует <br/>  

+ Вычитание двух чисел
<let mathSub = 3 - 2>
> Бинарный минус вычитает <br/>  

+ Умножение двух чисел
<let mathMul = 3 * 2>
> Бинарный умножитель множит <br/>  

+ Деление двух чисел
<let mathDiv = 4 / 2>
> Бинарный делитель делит <br/>  
<br/>  
Я присваиваю переменным определённые значения тем самым использует операторы которые нужны для вычисления <br/>  

#  6-ое задание # 

## Необходимо вывести в консоль числа от 1 до 5. В консоле должно быть: ##

<for(i = 1; i <= 5; i++) {
    console.log(i);
}><br/>  
> Я использую цикл в котором поставили условие, что переменная i будет увеличиваться на 1 раз до тех пор пока значение не будет равно 5<br/>  

#  7-ое задание # 

## Необходимо вывести в консоль числа от 5 до 1. В консоле должно быть: ##

<for(i = 5; i <= 1; i--) {
    console.log(i);
}><br/>  
> Я использую цикл в котором поставили условие, что переменная i будет уменьшаться на 1 раз до тех пор пока значение не будет равно 5 <br/>  

#  8-ое задание # 

## Расширьте функцию getMarkInfo таким образом: чтобы когда аргумент condition будет равен 10 выводилось сообщение в консоль “У вас максимальный балл”, при любых других значения выводилось сообщение “У вас средний балл” ##

<function getMarkInfo(condition) {
    if(condition == 10) {
        console.log('У вас максимальный балл');
    } else if(condition == 1) {
        console.log('У вас средний балл');
    }
}></br>  
> В теле функции я дал условия, что если параметр функции равен 10 то будет выводится 'У вас максимальный балл', если же 1 то 'У вас средний балл' <br/>  

#  9-ое задание # 

## Расширьте функцию getDayInfo таким образом: чтобы когда аргумент position был равен определённым значениям ##

<function getDayInfo(position) {
    switch (position) {
        case 0:
            console.log('Sunday');
            break;
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        default:
            console.log('Wrong data');
            break;
    }
}> </br>  
> Switch case работает по принципу if, значение в параметре функции сравнивается со значением в блоках case и выводит сообщение </br>

#  10-ое задание # 

## Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3 ##

<let massiv = ['a', 'b', 'c'];
massiv.push(1, 2, 3);> </br>
> Массив пишут в квадратных скобках, также метод push используется чтобы добавить элементы в конец масива </br>  

#  11-ое задание # 

## Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. (Используйте concat) ##

<let first = [1, 2, 3];
let second = [4, 5, 6];
let third = first.concat(second);> </br>  
> Метод concat позволяет объеденять два массива (первыйМассив.concat(второй)) </br>  

#  12-ое задание # 

## Программа суммирует все числа от 1 до заданного целого числа. Заданное число указываете в коде ##

<function countNumber(number) {
    for(i = 1; i <= number; i++) {
       let partialSum = (i * (i + 1)) / 2;
       console.log(partialSum);
    }
}> </br>  
> Для выполнения этого задания мне понадобилось найти формулу </br>  

[Формула](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF)