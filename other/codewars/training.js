//при сложении букв должны образовываться новые знаки
//если + и + Б то пушим +

s1 = '++--';
s2 = '+-+-';

// function neutralise(s1, s2) {
//     let newArr = '';
//     for (let i = 0; i < s1.length; i++) {
//         if (s1[i] === '+' && s2[i] === '+') {
//             newArr += '+';
//         } else if (s1[i] === '-' && s2[i] === '-') {
//             newArr += '-';
//         } else {
//            newArr += '0';
//         }
//     }
//     return newArr;
// }
//
// console.log(neutralise(s1, s2));


function neutraliseVar2(s1, s2) {
    let str = '';
    for (let i = 0; i < s1.length; i++) {
        str += s1[i] !== s2[i] ? '0' : s1[i];
    }
    return str;
}

console.log(neutraliseVar2(s1, s2));



// Create a function that always returns True/true for every item in a given list.
// However, if an element is the word 'flick', switch to always returning the opposite boolean value.
// ssert.deepEqual(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [false, true, false, true, false]);


/*function flickSwitch(arr) {
    let newArr = [];
    let check = true;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'flick') {
            newArr.push(!check);
            check = !check;
        } else {
            newArr.push(check);
        }

    }

    return newArr;
}*/

function flickSwitch(arr) {
    let result = true;
    return arr.map((check) => {
        return (check === 'flick') ? result = !result : result;
    })

}


console.log(flickSwitch(["kaka", "dd", "flick", "flick", "flick"]))


///
// (1, 2)     => 1
// (3, 5)     => 1
// (-10, 100) => 2
// (-1, -9)   => 3
// (19, -56)  => 4

function quadrant(x, y) {
    if (x > 0 && y > 0) {
        return 1;
    } else if (x > 0 && y < 0) {
        return 4;
    } else if (x < 0 && y > 0) {
        return 2;
    } else if (x < 0 && y < 0) {
        return 3;
    }
}

console.log(quadrant(-3, -4))



// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip=(d, a)=>{
    if (d === 'R') {
      return  a.sort((a,b) => a-b);
    } else if (d === 'L') {
      return  a.sort((a,b) => b-a);
    }
}

console.log(flip('L',[1, 4, 5, 3, 5 ]))


function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

console.log(bubbleSort([3, 2, 4, 1]));


//
const selectedSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // Меняем значение переменной на наибольшее значение
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]]; // Меняем значения переменных
  }
  return arr;
};

console.log(selectedSort([3,1,14,8,9]));


///
// 'a' and 'g' returns 1
// 'A' and 'C' returns 1
// 'b' and 'G' returns 0
// 'B' and 'g' returns 0
// '0' and '?' returns -1 (If either of the characters is not a letter, return -1)

function sameCase(a, b) {
    let smallA = a.toLowerCase();
    let smallB = b.toLowerCase();
    let bigA = a.toUpperCase();
    let bigB = b.toUpperCase();
    if (a !== bigA && b !== bigB) {
        return 1;
    } else if (a !== smallA && b !== smallB) {
        return 1;
    } else if (bigA === smallA || bigB === smallB) {
        return -1;
    } else return 0;
}

console.log(sameCase('H', 'S'));


///
// Remember, the roots can be written like (x-x1) * (x-x2) = 0

function quadratic(x1, x2){
    return arr = [1, -x1-x2, x1*x2];
}

console.log(quadratic(1, 2))

///
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if (month <= 3) {
        return 1;
    } else if (month <= 6) {
        return 2;
    } else if (month <= 9) {
        return 3;
    } else if (month <= 12) {
        return 4;
    } else {return 'ошибка'}
}

console.log(quarterOf(10));

///
//проверка начинается с конца
//если wolf стоит первым в конце - "Pls go away and stop eating my sheep"
//если нет, то элемент не первый и равный wolf - то выдай строку "Oi! Sheep number ${i}! You are about to be eaten by a wolf!"

function warnTheSheep(queue) {
    queue.reverse();
    if (queue.indexOf('wolf') === 0) {
        return 'Pls go away and stop eating my sheep';
    } else {
        return `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`;
    }
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "wolf", "sheep"]));

function warnTheSheep2(queue) {
    const position = queue.reverse().indexOf('wolf');
    return position === 0 ? 'Pls go away and stop eating my sheep' : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep2(["sheep", "sheep", "sheep", "sheep", "wolf", "sheep"]));


///

function elevator(left, right, call){
    let a = Math.abs(left - call);
    let b = Math.abs(right - call);
    if (a < b) {
        return 'left';
    } else {return 'right'};

}

console.log(elevator(2, 1, 2))

//

let games = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"];


// function points(games) {
//     let q = 0;
//     for (let i = 0; i < games.length; i++) {
//         let a = games[i].split(':');
//         if (Number(a[0]) > Number(a[1])) {
//             q += 3;
//         } else if (Number(a[0]) === Number(a[1])) {
//             q += 1;
//         }
//     }
//
//
//     return q;
// }


function points(games) {
    let q = 0;
    games.forEach((el) => {
        if (el[0] > el[2]) {
            q += 3;
        } else if (el[0] === el[2]) {
            q += 1;
        }
    })
    return q;

}

console.log(points(games));


//есть столбы вдоль дороги, расстояние между столбами одинаковое (но в МЕТРАХ) и ширина столбов одинаковая (в СМ)
//ширину первого и последнего столба не учитываем


function pillars(numPill, dist, width) {
    return (numPill === 1) ? 0 : 100*dist*(numPill - 1)+width*(numPill - 2);
}

console.log(pillars(2, 20, 25));


//

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld*2);
}

console.log(twiceAsOld(55, 30));


//

solution= (molarMass1, molarMass2, givenMass1, givenMass2, volume, temp) => {
    const R = 0.082;
    const tempInKelvin = temp+273.15;
    return (((givenMass1/molarMass1) + (givenMass2/molarMass2))*R*tempInKelvin)/volume;
}

console.log(solution(44, 30, 3, 2, 5, 50));


//разложить в порядке убывания
//найти сумму разницы между парами чисел

function sumOfDifferences(arr) {
    //пузырёк
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    if (arr.length > 0) {
        return arr[0]-arr[arr.length-1];
    } else return 0;

}

console.log(`найти сумму разницы между парами чисел`, sumOfDifferences([]))

// /если у буквы нет дублей, то заменяем букву '('
// если дубль есть => ')'

function duplicateEncode(word) {
    arr = Array.from(word.toLowerCase());
    let obj = {};
    //сортировка выбором: ищем дубль каждой буквы
    for (let i = 0; i < arr.length; i++) {
        //проверить есть ли в obj
        let letter = arr[i];

        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }
    return arr.map(letter => {
        if (obj[letter] === 1) {
            return '('
        } else {
            return ')'
        }
    }).join('');
}

console.log(duplicateEncode("CodeWarrior"));



//найти log xA + log xB

function logs(x, a, b) {
    return (Math.log(a*b))/(Math.log(x));
    
}

console.log(logs(10, 2, 3));

//Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

// function drawStairs(n) {
    // let arr = [];
    // let el = 'I\n ';
    // if (n === 1) {
    //     console.log('I');
        // } else {
        //     for (let i = 0; i < n.length-1; i++) {
        //        console.log(el);
        //     }
        // }
        // return arr.join('');
//     }
// }

    // console.log('I\n I\n  I\n   ');


function drawStairs(n) {
    let a = 'I\n ';
    let b = '';
    for (let i = 1; i < n; i++) {
        b += a;
        a += ' ';
    }
    b += 'I';
    return b;
}

console.log(drawStairs(1));


///
function newDraw(n) {
    let d = [];
    for (let i = 0; i < 4; i++) {
        d[i] = `${' '.repeat(i)}I`;
    }
    return d.join('\n');
}

console.log(newDraw(3));


//Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid, i.e. no negative integers.

var countSheep = function (num) {
    let murmur = [];

    for (let i = 1; i <= num; i++) {
        murmur[i] = `${i} sheep...`;
    }
    return murmur.join('');
}

console.log(countSheep(2));

function countShipVar2(num) {
    let str = '';
    for (let i = 1; i <= num; i++) {
        str += `${i} sheep...`;
    }
    return str;
}

console.log(countShipVar2(2));


//Given three integers a, b, and c,
// return the largest number obtained after inserting the operators +, *, and parentheses ().
// In other words, try every combination of a, b, and c with the operators, without reordering the operands, and return the maximum value.
//The numbers are always positive, in the range 1 ≤ a, b, c ≤ 10.
// You can use the same operation more than once.
// It is not necessary to use all the operators or parentheses.
// You cannot swap the operands. For example, with the given numbers, you cannot get the expression (1 + 3) * 2 = 8.

function expressionMatter(a, b, c) {
    if (a > 10 || b > 10 || c > 10 || a < 1 || b < 1 || c < 1) {
        return false;
    } else {
        return Math.max(a * b * c, (a + b) * c, a * (b + c), a + b + c, a + b * c, a * b + c);
    }
}

console.log(expressionMatter(3, 11, 2))


//Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
// This function should return a number (final grade). There are four types of final grades:
// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    if (exam > 90 || projects > 10) {
        return 100;
    } else if (exam > 75 && projects >= 5) {
        return 90;
    } else if (exam > 50 && projects >= 2) {
        return 75;
    } else return 0;

}

console.log(finalGrade (20, 7));

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l, w) {
    return (l === w) ? l**2 : (l+w)*2;
};

///проверить, что первая буква первого слова равна первой букве второго слова и также с последними буквами каждого слова

function feast2(beast, dish) {
    return beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1];
}

console.log(`2 проверка на равенство букв`, feast2("brown bear", "bear clar"));

function feast3(beast, dish) {
    return beast.startsWith(dish[0]) && beast.endsWith(dish[dish.length - 1]);
}

console.log(`3 проверка на равенство букв`, feast3("brown bear", "bear clar"));


//проверить коллинеарны или нет

function collinearity(x1, y1, x2, y2) {
    if (x1 === 0 && x2 === 0) {
        return true;
    } else if (y1 === 0 && y2 === 0) {
        return true;
    } else {
        return (x1 / x2 === y1 / y2)
    }

}

console.log(collinearity( 0,0, 1,0 ));

//

function nearestSq(n) {
    let x = Math.floor(Math.sqrt(n))**2;
    let y = Math.ceil(Math.sqrt(n))**2;
    return (n - x) < (y - n) ? x : y;
}

console.log(nearestSq(111));

function nearestSq2(n) {
    return Math.pow(Math.round(Math.sqrt(n)),2);
}
console.log(nearestSq2(110));

//найти возраст собаки и кошки
//15 cat years for first year  // 15 dog years for first year
// +9 cat years for second year // +9 dog years for second year
// +4 cat years for each year after that
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears === 1) {
        return [1, 15, 15]
    }
    if (humanYears === 2) {
        return [2, 24, 24]
    } else {
        return [humanYears, (16 + 4 * humanYears), (14 + 5 * humanYears)]
    }
}

console.log(humanYearsCatYearsDogYears(10));


//строчку в массив

function stringToArray(string){
    return string.split(' ');

}

console.log(stringToArray('Robin Singh'));


//определить век

function century(year) {
   return Math.ceil(year/100);
}

console.log(`год в веках`, century(89));

//определить масть карты

function defineSuit(card) {
  if (card.charCodeAt(card.length-1) === 9827) {return 'clubs'};
  if (card.charCodeAt(card.length-1) === 9830) {return 'diamonds'};
  if (card.charCodeAt(card.length-1) === 9829) {return 'hearts'};
  if (card.charCodeAt(card.length-1) === 9824) {return 'spades'};

}

console.log(defineSuit('3♠'));

//
function defineSuit1(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  let lastIndex = card.length - 1;

  return s[card[lastIndex]];
}

console.log(defineSuit1('3♠'));


//