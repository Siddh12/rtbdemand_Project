// For Ad
const add1 = document.getElementById("add1");
const add2 = document.getElementById("add2LeftSide");

const Crossbutton = document.getElementById("crossbutton").addEventListener(`click`, () => {
    add1.remove("id");
});
const crossbutton2 = document.getElementById("crossbutton2").addEventListener(`click`, () => {
    add2.remove("id");
});


// floating widget

const root = document.querySelector('#carousel')
let figure = root.querySelector('figure'),
    block = figure.children,
    n = block.length,
    theta = 2 * Math.PI / n,
    currImage = 0;

var apothem = block[0].clientWidth / (2 * Math.tan(Math.PI / n));

figure.style.transformOrigin = `50% 50% ${- apothem}px`;

for (i = 1; i < n; i++) {
    block[i].style.transformOrigin = `50% 50% ${- apothem}px`;
    block[i].style.transform = `rotateY(${i * theta}rad)`;
}
var check = true;

let blocka = document.getElementById("block1");
blocka.addEventListener(`mouseover`, () => {
    check = false;
});
blocka.addEventListener(`mouseout`, () => {
    check = true;
});
let blockb = document.getElementById("block2");
blockb.addEventListener(`mouseover`, () => {
    check = false;
});
blockb.addEventListener(`mouseout`, () => {
    check = true;
});
let blockc = document.getElementById("block3");
blockc.addEventListener(`mouseover`, () => {
    check = false;
});
blockc.addEventListener(`mouseout`, () => {
    check = true;
});

setInterval(() => {
    if (check) {
        figure.style.transform = `rotateY(${(currImage++) * -theta}rad)`;
    }
}, 1500);

// Weather Station

let loc = document.getElementById("loc");
let tem = document.getElementById("tem");
let cityName = ["Delhi", "Texas", "London", "Tokyo", "Moscow", "Paris"];
let index = 0;

setInterval(() => {
    if (index === 5) {
        index = 0;
    } else {
        index++;
    }
    apicallfun();
    loc.innerText = cityName[index];
}, 3000);

function apicallfun() {
    const xhr = new XMLHttpRequest();
    let apilink = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName[index] + "&appid=8ac0eb32574e90332b50915f8986f757"
    xhr.open('post', apilink, true);

    xhr.onload = function () {
        let obj = JSON.parse(this.responseText);
        let kelvin = obj.main.temp;
        let celsius = Math.round(kelvin - 273.15);
        tem.innerText = celsius + "°C";
    }
    xhr.send();
};

const Crossbutton3 = document.getElementById('crossbutton3');
Crossbutton3.addEventListener("click",()=>{
    Crossbutton3.remove("id");
    blocka.remove("id"); 
    blockb.remove("id"); 
    blockc.remove("id"); 
})