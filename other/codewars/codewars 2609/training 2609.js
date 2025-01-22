function multipleOfIndex(array) {
    return array.filter((el, index) => el % index === 0 || el === 0)
}

console.log(multipleOfIndex([0, 2, 3, 6, 9]));


//[ 0, 1, 2, 3, 45 ],
// [ 10,11,12,13,14 ],
// [ 20,21,22,23,24 ],
// [ 30,31,32,33,34 ]
//] ), '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

// function toCsvText(array) {
//   let newArr = array.map((arr) => { return arr.join(',')});
//   return newArr.join('\\n');
// }

function toCsvText(array) {
    let newArr = array.map((subArr, index) => {
        if (index < array.length - 1) {
            subArr[subArr.length - 1] = subArr[subArr.length - 1].toString() + '\\n';

        }
        return subArr;

    });
    return newArr.join('');
}


function toCsvText2(array) {
    const temp = []

    array.forEach((arr, i) => {
        if (i < array.length - 1) {

            temp.push(`${arr.join(",")}\n`)
        } else {
            temp.push(`${arr.join(",")}`);
        }

    })
    return temp.join("");
}

console.log(toCsvText2([
    [0, 1, 2, 3, 45],
    [10, 11, 12, 13, 14],
    [20, 21, 22, 23, 24],
    [30, 31, 32, 33, 34]
]));


//assert.strictEqual(multiTable(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');


function multiTable(number) {
    let tableMultiple = [];

    for (let i = 1; i <= 10; i++) {
        if (i < 10) {
            tableMultiple.push(`${i} * ${number} = ${i * number}\n`);
        }
        if (i === 10) {
            tableMultiple.push(`${i} * ${number} = ${i * number}`);
        }
    }
    return tableMultiple.join('');
}

// console.log(multiTable(5));


function multiTable2(number) {
    let table = '';

    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i * number}${i < 10 ? '\n' : ''}`;
    }
    return table;
}

console.log(multiTable(4));


//определить тип данных


function typeOfSum(a, b) {
    return typeof (a + b);
}

console.log(typeOfSum(null, false));


//

function arrayPlusArray(arr1, arr2) {
    let sum = 0;
    // return (arr1.reduce((a,b) => a + b) + arr2.reduce((a,b) => a + b));
    return arr1.concat(arr2).reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));


//Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.
// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

function sakuraFall(v) {
    return v > 0 ? 400 / v : 0;
}

console.log(sakuraFall(-1));


//отсортировать

function sorter(textbooks) {
    return textbooks.sort((a, b) => a.localeCompare(b));

}


console.log(sorter(['Alg#bra', '$istory', 'Geom^try', '**english']));

///
const reverseSeq = n => {
    let array = [];
    for (let i = 0; i < n; i++) {
        array[i] = i + 1;
    }
    return array.reverse();
};

console.log(reverseSeq(5));


//перевод десятичного числа в двоичную систему


function toBinary(n) {
    let arr = [];

    while (n >= 1) {
        if (n % 2 === 0) {
            arr.push(0);
            n = n / 2;
        } else {
            arr.push(1);
            n = (n - 1) / 2;
        }
    }
    return Number(arr.reverse().join(''));
}

console.log(toBinary(2));


//какой день недели


function whatday(num) {
    let wrong = 'Wrong, please enter a number between 1 and 7';
    let days = {
        1: 'Sunday',
        2: 'Monday',
        3: 'Tuesday',
        4: 'Wednesday',
        5: 'Thursday',
        6: 'Friday',
        7: 'Saturday'
    }
    return days[num] ? days[num] : wrong;

}

console.log(whatday(1));

/// на 1 дракона нужно 2 пули, проверить при заданном запасе пуль сможет ли выжить герой?


function hero(bullets, dragons) {
    return bullets / dragons >= 2;
}

console.log(`выживет ли герой игры? `, hero(100, 40));


//material1 and material2 cannot be selected at the same time
// material3 and material4 cannot be selected at the same time
// material5 and material6 must be selected at the same time
// material7 or  material8 must be selected(at least one, or both)

isValid = a => !(a.includes(1) && a.includes(2)) &&
    !(a.includes(3) && a.includes(4)) &&
    a.includes(5) === a.includes(6) &&
    (a.includes(7) || a.includes(8));


console.log(isValid([1, 3, 4]));


//Test.assertEquals(contamination("abc","z"), "zzz")
// Test.assertEquals(contamination("","z"), "")
// Test.assertEquals(contamination("abc",""), "")
// Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
// Test.assertEquals(contamination("//case"," "), "      ")


function contamination(text, char) {
    let str = '';

    for (let i = 0; i < text.length; i++) {
        str += char;
    }
    return str;

}

//или char.repeat(text.length);

console.log(contamination("abc", "z"));

///
var replaceDots = function (str) {
    return str.replaceAll(/\./g, '-');
}


console.log(replaceDots("one.two.three"));

////Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

function sumStr(a, b) {
    return (a * 1 + b * 1).toString();
}

console.log(sumStr('2', '3'));


//

function spEng(sentence) {
    return sentence.toLowerCase().includes('english');
}

console.log(spEng("English"));


//"hello" --> "Hello"
// "Hello" --> "Hello" (the first letter was already capitalized)
// "a"     --> "A"

function capitalizeWord(word) {
    let bigFirstLetter = [...word].map((letter, index) => {
        return (index === 0) ? letter.toUpperCase() : letter;
    })

    return bigFirstLetter.join('');
}

//function capitalizeWord(word) {
//   return word[0].toUpperCase() + word.slice(1);
// }

console.log(capitalizeWord('word'));


//проверить, что это треугольник Пифагора

function isPythagoreanTriple(integers) {
    let sortedInt = integers.sort((a, b) => a - b);
    // return sortedInt;
    return sortedInt[0] ** 2 + sortedInt[1] ** 2 === sortedInt[2] ** 2;
}

console.log(isPythagoreanTriple([5, 12, 13]));


/// найти сумму нечетных чисел

function oddCount(n) {
    return Math.round((n - 1) / 2);
}


console.log(oddCount(15023));


console.log(2 * (1298734 - 1));


///

function firstNonConsecutive(arr) {

    for (let i = 0; i < arr.length; i++) {
        // debugger
        if ((arr[i + 1] - arr[i]) > 1) {
            return arr[i + 1];
        }
    }
    return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6]));


//Return true if the cuboid could have equal sides, return false otherwise.
// Return false for invalid numbers too (e.g volume or side is less than or equal to 0).

function cubeChecker(volume, side) {
    return volume === side ** 3 && volume > 0;
}


//Identity matrix of size 4:
// 1 0 0 0
// 0 1 0 0
// 0 0 1 0
// 0 0 0 1
// should return 33825
//
// Explanation: 1000_0100_0010_0001 -> 33825

function solve(n) {
    let newNumber = BigInt(0);
    let two = 2n;
    if (0 < n && n < 65) {
        for (let i = 0; i < n; i++) {
            // debugger
            let pow = BigInt((n ** 2 - 1) - (n + 1) * i);
            newNumber += (two ** pow);
        }
        return BigInt(newNumber);
    } else {
        return `solve(${n})`;
    }
    ;

}

console.log(solve(64));


/// Given a number n, find the number of trailing zeros in its binary representation.
// Examples:
// 4  ->  2, because 4 is represented as 100
// 5  ->  0, because 5 is represented as 101
// Limits:
// 0 < n <= 10^4

function trailingZeros(n) {
    let count = 0;
    if (n % 2 !== 0) {
        return 0
    } else {
        while (n >= 1 && n < 10 ** 4 && n % 2 === 0) {
            count++;
            n = n / 2;
        }
    }
    return count;
}


console.log(trailingZeros(32));

///
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}


console.log(positiveSum([-1, -2, -3, -4, -5]));

function removeChar(str) {
    // let arr = [...str];
    //  return arr.slice(1, arr.length-1).join('');

    return str.slice(1, -1);
}

console.log(removeChar('mouse'));


///вернуть сумму квадратов


function squareSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] ** 2;
    }
    return sum;
}

console.log(squareSum([1, 2, 3]));

// assert.strictEqual(repeatStr(3, "*"), "***");

function repeatStr(n, s) {
    // return s.repeat(n);

    let str = '';
    for (let i = 0; i < n; i++) {
        str += s;
    }
    return str;

}

console.log(repeatStr(3, "*"));

//Return the number (count) of vowels in the given string.

function getCount(str) {
    let vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelLetters.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log(getCount("abracadabra"));

///убрать все гласные

function disemvowel(str) {
    let vowelLetters = ['a', 'e', 'i', 'o', 'u'];
    // let word = '';
    // for (let i = 0; i < str.length; i++) {
    //   if (!vowelLetters.includes(str[i])) {
    //     word += str[i];
    //   }
    // }
    // return word;

    return str.split('').filter(letter => !vowelLetters.includes(letter.toLowerCase())).join('');

}

console.log(disemvowel('What are you, a communist?'));


//For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num) {
    return Number(num.toString().split('').map(digit => digit ** 2).join(''));

}

console.log(squareDigits(123));


///найти наибольшее и наименьшее число

function highAndLow(numbers) {
    let maxNum = numbers.split(' ').sort((a, b) => b - a);
    let minNum = numbers.split(' ').sort((a, b) => a - b);

    return maxNum[0] + ' ' + minNum[0];
}

console.log(highAndLow("1 -2 3"));

//вариант 2

function highAndLow2(numbers) {
    let num = numbers.split(' ');
    return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow2("1 -2 3"));


//nput: 42145 Output: 54421

function descendingOrder(n) {
    let newArr = n.toString().split('').map(num => Number(num));
    return Number(newArr.sort((a, b) => b - a).join(''));

}

console.log(descendingOrder(1021));


//filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]


function filter_list(l) {
    // 1 способ
    // return l.filter(a => a === Number(a));

    //2 способ
    return l.filter(a => typeof a === 'number');

}

console.log(filter_list([1, 2, '1', 'b']));


//Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// найти и вывести среднюю букву

function getMiddle(s) {
    let d = s.length;
    if (s.length % 2 === 0) {
        return `${s[(d / 2) - 1]}${s[(d / 2)]}`;
    } else {
        return `${s[Math.floor(d / 2)]}`;
    }
}

console.log(getMiddle("tst"));

///

var isSquare = function (n) {
    return n % (n ** (1 / 2)) === 0 || n === 0;
    //return Math.sqrt(n) % 1 === 0;
}

console.log(isSquare(0));

///accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    let newArr = [];
    newArr.push(s[0].toUpperCase());
    for (let i = 1; i < s.length; i++) {
        newArr.push(s[i].toUpperCase().concat(s[i].toLowerCase().repeat(i)));
    }
    return newArr.join('-');

}


function accum2(s) {
    return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');

}

console.log(accum2("cwAt"));

///Implement a function that determines whether a string that contains only letters is an isogram
//"Dermatoglyphics" --> true

function isIsogram(str) {
    let arr = str.split('');
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i].toLowerCase();

        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }
    return !Object.values(obj).some(num => {
        return num !== 1
    });
    // return Object.values(obj).every(num => {return num === 1});

}

console.log(isIsogram("moOse"));

//вариант 2 через сортировку

function isIsogram2(str) {
    str = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(isIsogram2("mose"));

///Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive. The string can contain any char.
//XO("ooxx") => true

function XO(str) {
    let countOfO = str.match(/o/gi)?.length || 0;
    let countOfX = str.match(/x/gi)?.length || 0;

    return countOfO === countOfX;
}

console.log(XO('Oo'));

// 2 вариант
//function XO(str) {
//   return (!str.includes('o') && !str.includes('x')) ||
//   (str.includes('o') && str.includes('x') && str.match(/o/gi).length === str.match(/x/gi).length)
//
// }


//Your task is to convert strings to how they would be written by Jaden Smith
//var str = "How can mirrors be real if our eyes aren't real";
// Test.assertEquals(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");


String.prototype.toJadenCase = function () {
    return this.split(' ').map((word) => {
        return word[0].toUpperCase() + word.slice(1, word.length);
    }).join(' ');
};

console.log('How can mirrors be real if our eyes aren\'t real'.toJadenCase());


//дана строка со словами, вывести длину самого короткого слова

function findShort(s) {
    // let arr =  s.split(' ').map((word) => {return word.length});
    // return Math.min(...arr);
    let minLength = 1000;
    s.split(' ').forEach((word) => {
        if (word.length < minLength) {
            minLength = word.length;
        }
    });
    return minLength;

}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));


///In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".
// Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.

function dnaStrand(dna) {
    return dna.split('').map((letter) => {
        if (letter === 'A') {
            return 'T';
        } else if (letter === 'T') {
            return 'A';
        } else if (letter === 'C') {
            return 'G';
        } else if (letter === 'G') {
            return 'C';
        }
    }).join('');

}

console.log(dnaStrand('AAT'));

//вариант 2
let pairs = {'A': 'T', 'T': 'A', 'C': 'G', 'G': 'C'};

function dnaStrand2(dna) {
    return dna.split('').map((letter) => {
        return pairs[letter]
    }).join('');
}

console.log(dnaStrand2('AAT'));


//найти 2 наименьшие положит цифры в массиве и вывести их сумму

function sumTwoSmallestNumbers(numbers) {
    // return numbers.sort((a, b) => a - b).splice(0, 2).reduce((a, b) => a + b);

    let sortedArr = numbers.sort((a, b) => a - b);
    return sortedArr[0] + sortedArr[1];
}

console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));


function umTwoSmallestNumbers2(numbers) {
    for (let i = 0; i < 2; i++) {
        let min = i;
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[min] > numbers[j]) {
                min = j;
            }
        }
        [numbers[i], numbers[min]] = [numbers[min], numbers[i]];
    }
    return numbers[0] + numbers[1];
}

console.log(umTwoSmallestNumbers2([19, 5, 42, 2, 77]));

//(1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)


function getSum(a, b) {
    let sum = 0;
    if (a === b) {
        return a;
    } else {
        for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
            sum += i;
        }
        return sum;
    }

}

console.log(getSum(0, -1));


//отфильтровать список только с именами, где не больше 4 букв

function friend(friends) {
    return friends.filter((name) => {
        return name.length === 4 && !/[0-9]+/.test(name)
    })

}

console.log(friend(["Ryan", "Jimmy", "M1rk"]));

//Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

//2 строки - из них составить одну с расставленными по алфавиту буквами, добавленными разово
//соединить >>> отфильтровать по алфавиту >>> убрать дубли

function longest(s1, s2) {
    let newAr = s1.concat(s2).split('');
    let obj = {};

    for (let i = 0; i < newAr.length; i++) {
        let letter = newAr[i];
        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }
    return Object.keys(obj).sort().join('');

}

//2 вариант

function longest2(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('');
}

console.log(longest2("aretheyhere", "yestheyarehere"));


//

function openOrSenior(data) {
    let result = [];

    for (let i = 0; i < data.length; i++) {
        let el = data[i];
        if (el[0] >= 55 && el[1] > 7) {
            result.push('Senior');
        } else {
            result.push('Open');
        }
    }
    return result;
}

function openOrSenior1(data) {
    let res = [];

    data.forEach((arr) => {
        if (arr[0] >= 55 && arr[1] > 7) {
            res.push('Senior');
        } else {
            res.push('Open');
        }
    })
    return res;
}

//3 вариант To be a senior, a member must be at least 55 years old and have a handicap greater than 7.
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.

function openOrSenior2(data) {
    return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
}

console.log(openOrSenior2([[3, 12], [55, 1], [91, -2], [53, 23]]));


//Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter.

function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? ((Math.sqrt(sq)) + 1) ** 2 : -1;
}

console.log(findNextSquare(144));

// проверить, что каждая буква в строке в диапазоне от а до m, если не в этом диапазоне, то +1 к кол-ву ошибок
// посчитать длину строки
// вернуть `${кол-во ошибок} / ${ общ длина строки}`

function printerError(s) {
    let numOfErrors = 0;

    for (let i = 0; i < s.length; i++) {
        if (!/[a-m]/.test(s[i])) {
            numOfErrors++;
        }
    }
    return `${numOfErrors}/${s.length}`;
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));

//2 вариант

function printerError1(s) {
    let numOfErrors = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] > 'm') {
            numOfErrors++;
        }
    }
    return `${numOfErrors}/${s.length}`;
}

console.log(printerError1("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));


//Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
    //1 вариант
    // if (ending.length === 0) {
    //   return true;
    // } else {
    //   return str.split('').splice(-ending.length).join('') === ending;
    // }

    //2 вариант
    // return ending.length === 0 ? true : str.split('').splice(-ending.length).join('') === ending;

    //3 вариант
    return str.endsWith(ending);

}

console.log(solution('abc', ''));


//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

function validatePIN(pin) {
    return pin.split('').every((num) => /[0-9]+/.test(num)) && (pin.length === 4 || pin.length === 6);

    //function validatePIN (pin) {
    //   var reg = new RegExp('^([0-9]{4}|[0-9]{6})$');
    //   return reg.test(pin);
    // }
}

console.log('проверка пин-кода', validatePIN('00a02'));


//Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

function addBinary(a, b) {
    let num = a + b;
    let arr = [];

    while (num > 0) {

        if (num % 2 === 0) {
            arr.push(0);
            num = num / 2;
        } else {
            arr.push(1);
            num = Math.floor(num / 2);
        }

    }
    return arr.reverse().join('');
}

console.log(addBinary(1, 1));


///In a small town the population is p0 = 1000 at the beginning of a year.
// The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town.
// How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

function nbYear(p0, percent, aug, p) {
    let res = Math.floor(p0 + p0 * percent / 100 + aug);
    let count = 1;

    while (res < p) {
        p0 = res;
        res = Math.floor(p0 + p0 * percent / 100 + aug);
        count++;

    }
    return count;
}

//2 вариант
function nbYear2(p0, percent, aug, p) {
    let year = 0;

    for (year; p0 < p; year++) {
        p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return year;
}

console.log(`кол-во лет2 `, nbYear2(1500000, 2.5, 10000, 2000000));


//как проверить, что это трецгольник

function isTriangle(a, b, c) {
    return (a + b) > c && (a + c) > b && (b + c) > a;
}

//

function rowSumOddNumbers(n) {
    let start = n ** 2 - n + 1;
    let end = n ** 2 + n + 1;
    let sum = 0;

    for (let i = start; i < end; i += 2) {
        sum += i;
    }
    return sum;

}


// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

console.log(rowSumOddNumbers(42));

//из бинарного в обычное число

const binaryArrayToNumber = arr => {
    return arr.reverse().map((num, i) => num * 2 ** i).reduce((a, b) => a + b);
};

console.log(binaryArrayToNumber([0, 1, 1, 0]));


///вывести оставшееся кол-во людей в автобусе
// в каждом массиве первый элемент -кол-во зашедших, второй - вышедших

var number = function (busStops) {
    return busStops.map((el) => el[0] - el[1]).reduce((a, b) => a + b);
}

console.log(`осталось людей в автобусе:`, number([[10, 0], [3, 5], [5, 8]]));

///

function oddOrEven(array) {
    const sum = array.reduce((acc, el) => acc + el, 0);

    return sum % 2 === 0 ? 'even' : 'odd';
}

console.log(oddOrEven([]));

//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.


function reverseWords(str) {
    let reversedArr = str.split(' ').map((word) => word.split('').reverse().join(''));
    return reversedArr.join(' ');
}


console.log(reverseWords('double  spaced  words'));


//You need to round the answer to 2 decimal places and return it as String.
// If the given value is 0 then it should return "0.00".
//5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

function SeriesSum(n) {
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += 1 / (1 + 3 * i);
    }

    return sum.toFixed(2);
}

console.log(SeriesSum(1));


//найти первый самый маленький элемент и убрать из массива
// 1 найти наим элемент 2 пройти по массиву и убрать один самый маленький элемент

function removeSmallest(numbers) {
    let smallestNum = Math.min(...numbers);
    let indexOfSmall = numbers.indexOf(smallestNum);

    return numbers.filter((el, i) => i !== indexOfSmall);
}

console.log(removeSmallest([5, 3, 1, 4, 3]));


//The numbering starts at 1. The format is n: string. Notice the colon and space in between.
//["a", "b", "c"] --> ["1: a", "2: b", "3: c"]


var number = function (array) {
    // let arr = [];

    // for (let i = 0; i , i < array.length; i++) {
    //   let index = i+1;
    //   arr.push(`${index}: ${array[i]}`);
    // }

    return array.map((el, i) => {
        return (i + 1) + ': ' + el;
    });

}

console.log(number(["a", "b", "c"]));


//Write a function that returns both the minimum and maximum number of the given list/array.

function minMax(arr) {
    // let min = Math.min(...arr);
    // let max = Math.max(...arr);
    //
    //  return [min, max];

    return [Math.min(...arr), Math.max(...arr)];
}

console.log(minMax([1, 2, 3, 4, 5]));

//You are given an odd-length array of integers, in which all of them are the same, except for one single number.

function stray(numbers) {
    let obj = {};

    for (let i = 0; i < numbers.length; i++) {
        let el = numbers[i];

        if (obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    let newEl = Object.keys(obj).find((key) => obj[key] === 1);
    return Number(newEl);

}

console.log(stray([2, 1, 1]));


////

function likes(names) {
    let length = names.length;

    switch (length) {
        case 0:
            return `no one likes this`;
            break;
        case 1:
            return `${names[0]} likes this`;
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`;
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`;
            break;
        default:
            return `${names[0]}, ${names[1]} and ${length - 2} others like this`;

    }
}

console.log(likes(['Peter', 'James']));


/// вывести то число, которое повторяется нечетное кол-во раз в массиве

function findOdd(A) {
    let obj = {};

    for (let i = 0; i < A.length; i++) {
        let letter = A[i];

        if (obj[letter]) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }

    let oddQuantity = Object.keys(obj).find((keys) => {
        return obj[keys] % 2 !== 0
    });

    return Number(oddQuantity);
}

console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));

function findOdd1(A) {
    return A.reduce((a, b) => a ^ b);
}

console.log(findOdd1([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));


//Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
//удалить из первого массива все элементы, которые есть во втором массиве

function arrayDiff(a, b) {
    return a.filter((num) => {
        return !b.includes(num)
    });
}

console.log(arrayDiff([1, 2, 3], [1, 2]));

//2 вариант

function arrayDiff1(a, b) {
    let obj = {};

    b.forEach((num) => {
        obj[num] = true;
    })

    return a.filter((num) => {
        return !obj[num];
    })
}

console.log(arrayDiff1([1, 2, 3], [1, 2]));


//вывести кол-во букв, которые дублируются

function duplicateCount(text) {
    let obj = {};

    text.toLowerCase().split('').map((el) => {
        if (obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    })

    let objArr = Object.values(obj);
    return objArr.filter((num) => num > 1).length;

}

console.log(duplicateCount("aabBcde"));

//2 вариант

function duplicateCount2(text) {
    return text.toLowerCase().split('').filter((val, i, arr) => {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;

}

console.log(duplicateCount2("aabBcde"));


///содержит только буквы из массива  ['n', 's', 'w', 'e'] и кол-во букв в массиве рвно 10

function isValidWalk(walk) {
    let arr = ['n', 's', 'w', 'e'];
    let obj = {};

    for (let i = 0; i < walk.length; i++) {
        let el = walk[i];

        if (obj[el]) {
            obj[el] += 1;
        } else {
            obj[el] = 1;
        }
    }
    let arrOfVal = Object.values(obj);

    return arrOfVal.every((num) => num === arrOfVal[0]) &&
        arrOfVal.reduce((a, b) => a + b) === 10 &&
        walk.every((letter) => {
            return arr.includes(letter);
        })


}

console.log(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']));


//n this kata you are required to, given a string, replace every letter with its position in the alphabet.

function alphabetPosition(text) {
    let alphabetStr = ' abcdefghijklmnopqrstuvwxyz';

    let newArr = text.toLowerCase().split('').map((letter) => {
        return alphabetStr.indexOf(letter);
    });

    return newArr.filter((num) => {
        return num > 0;
    }).join(' ');

}


console.log(alphabetPosition("The sunset sets at twelve o' clock."));


//For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
// 4 --> 0 (because 4 is already a one-digit number, there is no multiplication)

function persistence(num) {
    let strNum = num.toString().split('');
    let count = 0;

    while (strNum.length > 1) {
        let result = strNum.reduce((acc, val) => acc * val);
        strNum = result.toString().split('');
        count++;
    }
    return count;

}

console.log(persistence(999));


///Your task is to sort a given string. Each word in the string will contain a single number.
// This number is the position the word should have in the result.

// function order(words) {
//   let wordsArr = words.split(' ');
//
//   let findNum = (str) => {
//     return str.replace(/[^0-9]/g, '');
//   }
//   return wordsArr.sort((a, b) => findNum(a) - findNum(b)).join(' ');
//
// }

function order(words) {
    return words.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/)).join(' ')

}

console.log(order("is2 Thi1s T4est 3a"));


///

function tribonacci(signature, n) {
    if (n < 3) {
        return signature.slice(0, n);
    }

    while (signature.length < n) {
        let num = signature.slice(-3).reduce((a, b) => a + b);
        signature.push(num);

    }
    return signature;
}


console.log(tribonacci([100, 3, 11], 0));

//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']

var uniqueInOrder = function (iterable) {
    return [...iterable].filter((el, i, arr) => arr[i] !== arr[i + 1]);
}

console.log(uniqueInOrder('ABBCcAD'));


//Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string){
//   let arr = string.toLowerCase().split(' ');
//
//   let check = (el) => {
//     return el.split('').every((letter, i, array) => {
//       return array.indexOf(letter) == i && array.lastIndexOf(letter) == i;
//     })
//   }
//   return arr.every((word) => {return check(word)});
//
// }


function isPangram(string) {
    let sentence = string.toLowerCase().replace(/[^a-z]/g, '').split('');
    let alphabet = Array.from('abcdefghijklmnopqrstuvwxyz');

    return alphabet.every((letter) => sentence.includes(letter));

}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'));


//Given two positive integers n and p, we want to find a positive integer k, if it exists,
// such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.

function digPow(n, p) {
    let sum = n.toString().split('').reduce((acc, num, i) => acc + num ** (p + i), 0);

    return sum % n === 0 ? sum / n : -1;
}

console.log(digPow(46288, 3))


//Your job is to take that array and find an index N where
// the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

function findEvenIndex(arr) {
    let index = -1;

    for (let i = 0; i < arr.length; i++) {
        let sum1 = arr.slice(0, i).reduce((acc, val) => acc + val, 0);
        let sum2 = arr.slice((i + 1), (arr.length)).reduce((acc, val) => acc + val, 0);

        if (sum1 === sum2) {
            index = i;
            break
        }
    }
    return index;
}

console.log(findEvenIndex([0, 0, 0, 0, 0]));

function findEvenIndex1(arr) {
    let left = 0;
    let right = arr.reduce((acc, val) => acc + val, 0);

    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            left += arr[i - 1]
        }
        right -= arr[i];

        if (left === right) {
            return i
        }
    }

    return -1;
}

console.log(findEvenIndex1([1, 2, 3, 2, 1]));


//найти число без дубля

function findUniq(arr) {
    let num = arr.filter((el) => {
        return arr.indexOf(el) === arr.lastIndexOf(el);
    });
    return Number(num);

}

console.log(findUniq([1, 0, 0]));


//You will be given an array of numbers.
// You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    for (let first = 0; first < array.length; first++) {
        for (let second = first; second < array.length; second++) {

            if (Math.abs(array[first] % 2) === 1 && Math.abs(array[second] % 2) === 1 && array[first] > array[second]) {
                [array[first], array[second]] = [array[second], array[first]];

            }
        }
    }
    return array;

}

console.log(sortArray([5, 3, -3, 8, 1, 4]));


//2 вариант

function sortArray1(array) {
    const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
    return odd;
    // return array.map((x) => x % 2 ? odd.shift() : x);
}

console.log(sortArray1([5, 3, -3, 8, 1, 4]));


///

function towerBuilder(nFloors) {
    let arr = [];
    let maxLength = 2 * nFloors - 1;

    for (let i = 1; i <= nFloors; i++) {
        let starCount = 2 * i - 1;
        let el1 = ' '.repeat((maxLength - starCount) / 2);
        let el2 = '*'.repeat(starCount);

        arr.push(el1 + el2 + el1);

    }
    return arr;

}

console.log(towerBuilder(3));


//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//You need to return the highest scoring word as a string.

function high(x) {
    let alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    let xArr = x.split(' ');
    let maxCount = 0;
    let maxWord = '';

    for (let i = 0; i < xArr.length; i++) {
        let word = xArr[i];
        let wordCount = word.split('').reduce((acc, letter) => acc + alphabetStr.indexOf(letter) + 1, 0);
        if (wordCount > maxCount) {
            maxCount = wordCount;
            maxWord = word;
        }

    }
    return maxWord;

}

console.log(high('aa bddssse'));


//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number) {
    let count = 0;

    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            count += i;
        }
    }
    return count;
}

console.log(solution(12));


//Write a function that takes in a string of one or more words, and returns the same string,
// but with all words that have five or more letters reversed
//если в слове больше или равно 5 букв, то реверсим


function spinWords(string) {

    return string.split(' ').map((word) => {
        return word.length < 5 ? word : word.split('').reverse().join('')
    }).join(' ');

}

console.log(spinWords("This is another test"));


// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6

function digitalRoot(n) {
    let num = [...n.toString()];

    while (num.length > 1) {
        let numSum = num.reduce((acc, val) => acc + Number(val), 0);
        num = numSum.toString().split('');
    }
    return Number(num);
}

// 2 вариант
// function digital_root(n) {
//   return (n - 1) % 9 + 1;
// }

console.log(digitalRoot(146));


//Write a function that accepts an array of 10 integers (between 0 and 9),
// that returns a string of those numbers in the form of a phone number.
//createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

function createPhoneNumber(numbers) {
    let tel = [];
    tel.push('(');
    for (let i = 0; i < numbers.length; i++) {
        if (i === 2) {
            tel.push(numbers[i] + ') ');
        } else if (i === 5) {
            tel.push(numbers[i] + '-');
        } else {
            tel.push(numbers[i]);
        }
    }

    return tel.join('');
}

//лучший вариант на codewars

function createPhoneNumberCW(numbers) {
    let format = '(xxx) xxx-xxxx';

    for (let i = 0; i < numbers.length; i++) {
        format = format.replace('x', numbers[i]);
    }
    return format;
}

console.log(createPhoneNumberCW([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));


//Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

var countBits = function (n) {
    let count = 0;

    while (n > 0) {
        if (n % 2 === 1) {
            count++;
            n = Math.floor(n / 2);
        } else {
            n = n / 2;
        }
    }
    return count;

};

console.log(countBits(7));


//[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)


function findOutlier(integers) {
    let even = integers.filter(n => n % 2 === 0);
    let odd = integers.filter(n => n % 2 !== 0);

    return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([-32950442, 71362664, -179997025, 125546430]));


///
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }
//
// loadJson('no-such-user.json') // (3)
//   .catch(alert); // Error: 404
//
// async function loadJson(url) {
//     let response = await fetch(url);
//     if (response.status === 200) {
//         let json = await response.json();
//         return json;
//     }
//
//     throw new Error(response.status.toString());
// }
//
// loadJson().catch(alert);

//"the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"
// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    if (str.length === 0) {
        return '';
    }
    let arr = str.split(/[^a-z,^A-Z]/g);

    return arr.map((word, i) => {
        return i > 0 ? word[0].toUpperCase() + word.slice(1, word.length) : word;
    }).join('');
}

console.log(toCamelCase("the_stealth_warrior"));


//A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits,
// each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
    let arr = [...value.toString()];
    let num = arr.map((number) => {
        return Number(number) ** arr.length
    });
    let sum = num.reduce((acc, val) => acc + val, 0);

    return sum === value;
}

console.log(narcissistic(153));


//Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

function solution(str) {
    let emptyArr = [];

    if (str.length % 2 === 1) {
        str += '_';
    }

    for (let i = 0; i < str.length; i += 2) {
        emptyArr.push(str[i] + str[i + 1]);
    }
    return emptyArr;

}

console.log(solution('abcde'));


//

function isPrime(num) {
    if (num < 2) {
        return false
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
    }
    return  true;
}

console.log(isPrime(73));