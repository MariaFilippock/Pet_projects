//от 03.07

// Дана некоторая строка:
// 'a bc def ghij'
// Переведите в верхний регистр все подстроки, в которых количество букв меньше или равно трем. В нашем случае должно получится следующее:
// 'A BC DEF ghij'

let strExample = 'a bc def ghij';


function analyseArr(str) {
    let arr = str.split(' ');
    let doSmth = arr.map(function (el) {
        if (el.length <= 3) {
            return el.toUpperCase();
        } else {
            return el;
        }
    })
    return doSmth;
}

console.log('Задача 1.' ,analyseArr(strExample));



//Дан символ. Узнайте, в каком регистре этот символ - в верхнем или нижнем.
let symbol = 'В';

if (symbol[0] === symbol[0].toUpperCase()) {
    console.log('Задача 2. Символ в верхнем регистре');
} else {
    console.log('Задача 2. Символ в нижнем регистре');
}



//Дано некоторое число, например, такое:
// 123789
// Удалите из этого числа все нечетные цифры. В нашем случае получится такой результат:
// 28

let numb = 123789;

function clearStr(e) {
    let arrOfNumb = Array.from(e.toString());
    let clearArr = arrOfNumb.filter(function (element) {
        if (element % 2 === 0) {
            return Number(element);
        }
    })
    return Number(clearArr.join(''));
}

console.log(clearStr(numb));

//найдем упоминание слова "жопа" среди элементов объекта

let obj = [
    {
        id: 1,
        name: 'Хрюня',
        text: 'подскажите, какой размер у футболки',
    },
    {
        id: 2,
        name: 'Маня',
        text: 'кажется, что размер xs',
    },
    {
        id: 3,
        name: 'Веня',
        text: 'покупал похожую, мне подошла M',
    },
    {
        id: 4,
        name: 'Степа',
        text:'тоже хотел приобрести, но сомневался между xs и s',
    }]

// function findText() {
//      let findedWord = obj.filter((comment) => comment.text.match(/xs/));
//     return findedWord;
// }
// console.log(findText());

function filterText() {
    let text = obj.filter((element) => element.name.startsWith('М'))
    return text;
}

console.log('filterText', filterText());


let ser = obj.map((element, index) => {
    if (element.name.startsWith('М')) {
        element.name = 'test';
        return element
    } else {
        return element
    }
});
console.log('mapText', ser);

//
let arr3 = [4, 5, 1, 43, 21];
let res = arr3.reduce((acc, val) => acc + val, 100
);
console.log(res);


//Дана строка с буквами. Проверьте, что в этой строке не более двух заглавных букв.
str = 'lvruXDbS';

function tesrt() {
    let newAr = str.split('');
    let fg = newAr.filter((element) => element == element.toUpperCase());
    if (fg.length <= 2) {
        console.log('все ок')
    } else {
        console.log('больше 2-х заглавных букв')
    }
}

console.log(tesrt());

//Дана некоторая строка:
// '1 22 333 4444 22 5555 1'
// Удалите из этой строки все подстроки, в которых количество символов больше трех. В нашем случае должно получится следующее:
// '1 22 333 22 1'

let testStr = '1 22 333 4444 22 5555 1';


function filterString() {
    let mapArr = testStr.split(' ').filter((element) => {
        return element.length < 4
            // if (element.length < 4) {
            //     return true;
            // } else {
            //     return false;
            // }
        }
    )
    return mapArr.join(' ');
}


console.log(filterString());

//
// function filterString() {
//     let emptyArr = [];
//     let mapArr = testStr.split(' ');
//     for (let i = 0; i < mapArr.length; i++) {
//         if (mapArr[i].length < 4) {
//             emptyArr.push(Number(mapArr[i]));
//         }
//     }
//     return emptyArr;
// }
//
// console.log(filterString());

