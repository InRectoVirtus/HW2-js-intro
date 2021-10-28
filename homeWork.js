/*---------------------------------------------------------------------------------*/

console.log('------------- # 5');

let mathAdd = 3 + 2;
let mathSub = 3 - 2;
let mathMul = 3 * 2;
let mathDiv = 4 / 2;

console.log(`Додавання - ${mathAdd}, Віднімання - ${mathSub}, Множення - ${mathMul}, Ділення - ${mathDiv}`);

/*---------------------------------------------------------------------------------*/

console.log('------------- # 6');

for(i = 1; i <=5; i++) {
    console.log(i);
}

/*---------------------------------------------------------------------------------*/

console.log('------------- # 7');

for(i = 5; i >= 1; i--) {
    console.log(i);
}

/*---------------------------------------------------------------------------------*/

console.log('------------- # 8');

function getMarkInfo(condition) {
    
    if(condition == 10) {
        console.log('У вас максимальный балл');
    } else if(condition == 1) {
        console.log('У вас средний балл');
    }

}
   getMarkInfo(10)
   getMarkInfo(1)
   
/*---------------------------------------------------------------------------------*/

console.log('------------- # 9');

function getDayInfo(position) {
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
}

getDayInfo(0)
getDayInfo(1)
getDayInfo(2)
getDayInfo(3)
getDayInfo(4)
getDayInfo(5)
getDayInfo(6)
getDayInfo(7)

/*---------------------------------------------------------------------------------*/

console.log('------------- # 10');

let massiv = ['a', 'b', 'c'];
massiv.push(1, 2, 3);

console.log(massiv);

/*---------------------------------------------------------------------------------*/

console.log('------------- # 11');

let first = [1, 2, 3];
let second = [4, 5, 6];

let third = first.concat(second);

console.log(first);
console.log(second);

console.log(third);

/*---------------------------------------------------------------------------------*/

console.log('------------- # 12');

function countNumber(number) {
    for(i = 1; i <= number; i++) {
       let partialSum = (i * (i + 1)) / 2;
       console.log(partialSum);
    }
}
  countNumber(5)