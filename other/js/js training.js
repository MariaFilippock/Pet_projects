let firstNameId = "first-name";
let firstNameEl = document.getElementById(firstNameId);
let lastNameId = "last-name";
let lastNameEl = document.getElementById(lastNameId);
let adressId = "adress";
let adressEl = document.getElementById(adressId);
let cityId = "city-id";
let cityEl = document.getElementById(cityId);
let hobbyId = "hobbies";
let hobbiesEl = document.getElementById(hobbyId);
let avatarId = "avatar-container";
let avatarEl = document.getElementById(avatarId);
let pictureId = "picture-link";
let pictureEl = document.getElementById(pictureId);
let buttonEl = document.querySelector(".break-button");
let largeEl = document.querySelector(".important-item");
let buttonAddEl = document.querySelector(".comment-add");
let buttonFirstN = document.getElementById("send-first-name");

buttonAddEl.onclick = function () {
    hobbiesEl.classList.toggle("hidden");
    console.log("кнопка активна!");
}


// firstNameEl.value = "Diana";
// // lastNameEl.setAttribute("value","Kamasutra");
//
//
// lastNameEl.className = "last-name error-input";
// lastNameEl.title = "Wrong last name";
//
// pictureEl.src = "https://cdn.tripster.ru/thumbs2/0e740074-4786-11ee-88db-962feabb4efb.1220x600.jpeg";
// pictureEl.title = "Абу-Даби";
//
//
// avatarEl.innerHTML = "<ul id=\'list\'><li>1</li><li>2</li></ul>";
// let listEl = document.getElementById('list');
// console.log(listEl.innerHTML);

// function alertValue() {
//     console.log(firstNameEl.value);
//     console.log(lastNameEl.value);
//     console.log(adressEl.value);
// }
//
// alertValue();
// alertValue();
// alertValue();


buttonEl.onclick = function () {
    largeEl.classList.toggle("large");
    console.log("работает");
}

// function greetings() {
//     let nameVisitor ="Приветствую, " + firstNameEl.value;
//     alert(nameVisitor);
// }
//
// greetings();

buttonFirstN.onclick = function () {
    let login = firstNameEl.value
    alert(login);
}

//написать кнопку, при клике на которую будет выводиться сообщение hello + сообщние из соседнего импута
// у каждого элемента должно быть объявлено id

function addErrorClass(elementId) {
    let element = document.getElementById(elementId);
    element.className = 'error-input';

}

function addErrorClassAll() {
    addErrorClass("first-name");
    addErrorClass("last-name");
    addErrorClass("adress");

}

let switchButton = document.getElementById("switch-button");
switchButton.addEventListener("click", addErrorClassAll);



function calculateSquareCircle(r) {
    return 3.14 * Math.pow(r,2);
}
 // console.log('Площадь круга: ' + calculateSquareCircle(5));


function createHTMLElement(tag = 'button', text = 'Отправить', id) {
    let element = document.createElement(tag);
    element.id = id;
    element.innerText = text;
    return element;
}

let newElement = createHTMLElement('h1', 'header1', 'создание заголовка 1');
//console.log(newElement);
document.body.append(newElement)

let h1Element = createHTMLElement();
document.body.append(h1Element)



// let fruits = ["Яблоки", "Груша", "Апельсин"];
//
// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");
//
// // что в fruits?
// alert( fruits.length);


let styles = ['Джаз', 'Блюз'];
//2 Добавьте «Рок-н-ролл» в конец.
styles.push('Рок-н-ролл');
alert(styles.length);
let median = 'Классика';

//3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
if (styles.length / 2 !== 0) {
  let Index = (styles.length - 1) / 2;
  styles[Index]= median;
}
console.log(styles);

//4 убрать первый элемент
styles.shift();
console.log(styles);

//5 Вставьте Рэп и Регги в начало массива.
styles.unshift('Регги', 'Рэп');
console.log(styles);


let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2]();



