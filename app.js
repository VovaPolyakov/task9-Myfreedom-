// 1) Сделать код таск-менеджера из прошлого урока более читаемым, разбив его на отдельные функции. 

// По сабмиту формы послe preventDefault должна вызываться одна функция - addLi(text) и очищаться input. Все остальные действия - внутри функций.


// let ul = document.querySelector('ul');

// let tasks = [];
// if (localStorage.tasks) {
//     tasks = JSON.parse(localStorage.tasks);
//     for (let task of tasks) {
//         addLi(task);
//     }
// }
// function createLi(text) {
//     let li = document.createElement('li');
//     li.textContent = text;
//     return li;
// }

// function addLi(text) {
//     let ul = document.querySelector('ul');
//     let li = createLi(text);
//     ul.appendChild(li);
// }

// let input = document.querySelector('.text');
// let button = document.querySelector('.button')
// let form = document.querySelector('form');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     addLi(input.value);
//     tasks.push(input.value)
//     localStorage.tasks = JSON.stringify(tasks);
//     input.value = '';
// })


//Exercise 1.1
// let tasks = [];
// if (localStorage.tasks) {
//     tasks = JSON.parse(localStorage.tasks);
//     for (let task of tasks) {
//         addLi(task);
//     }
// }
// function createLi(text) {
//     let li = document.createElement('li');
//     li.textContent = text;
//     return li;
// }

// function addLi(text) {
//     let ul = document.querySelector('ul');
//     let li = createLi(text);
//     ul.appendChild(li);
// }

// let input = document.querySelector('.text');
// let button = document.querySelector('.button')
// let form = document.querySelector('form');
// let mark = document.querySelector('.mark');

// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     addLi(input.value);
//     tasks.push(input.value)
//     localStorage.tasks = JSON.stringify(tasks);
//     input.value = '';
// })
// mark.addEventListener('click', function (event) {
//     let allLi = document.querySelectorAll('li');

//     for (let i = 0; i < allLi.length; i++) {
//         allLi[i].style.textDecoration = 'line-through';
//     }
// })
//Задание 2.1


// let men = { name: 'Vova' };
// let jsonMen = JSON.stringify(men);
// let parseMen = JSON.parse(jsonMen);
// console.log(parseMen);
//Задание 2.2

// let user = { name: 'Vova' }
// localStorage.name = JSON.stringify(user);
// newUser = JSON.parse(localStorage.name);
// console.log(newUser)


//Задание 3


let imgs = document.querySelectorAll('img');
let body = document.querySelector('body')
let imgSrc = [];
if (localStorage.imgSrc) {
    imgSrc = localStorage.imgSrc;
    body.style.backgroundImage = `url(${imgSrc})`;
}
imgs.forEach((img, index) => {
    img.addEventListener('click', function (event) {
        for (let img of imgs) {
            if (img != event.target) {
                img.classList.remove('active');
            }
        }
        img.classList.add("active");
        let src = img.getAttribute('src');
        localStorage.imgSrc = src;
        body.style.backgroundImage = `url(${src})`;
    });
});
