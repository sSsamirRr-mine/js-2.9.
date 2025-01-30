'use strict';

let input = document.querySelector("input")

const products = [
    { img: "./Img/Rug.svg", name: "Mars rug", count: 24, coin: 100, },
    { img: "./Img/Stiker.svg", name: "Keyboard sticker", count: 11, coin: 49, },
    { img: "./Img/Watch.svg", name: "Smart watch", count: 4, coin: 899 },
    { img: "./Img/Keyboard.svg", name: "Wireless keyboard", count: 0, coin: 350 },
    { img: "./Img/Mouse.svg", name: "Mouse", count: 24, coin: 359 },
    { img: "./Img/Air pods.svg", name: "AirPods", count: 11, coin: 499 },
    { img: "./Img/Power bank.svg", name: "Powerbank", count: 5, coin: 899 },
    { img: "./Img/USB.svg", name: "USB flash drive", count: 21, coin: 299 },
    { img: "./Img/Smart phone.svg", name: "Smartphone", count: 2, coin: 3699 },
    { img: "./Img/PLS 5.svg", name: "Playstation 5", count: 0, coin: 7449 },
    { img: "./Img/II Station.svg", name: "Yandex Station", count: 3, coin: 1999 },
    { img: "./Img/Ipad samsung.svg", name: "Planshet Samsung", count: 24, coin: 4999, },
];

let core = document.querySelector("#core")

function prod(params) {

    let card = document.createElement("div")
    let imges = document.createElement("img")
    let h3 = document.createElement("h3")
    let divp = document.createElement("p")
    let divpimg = document.createElement("img")
    let divp_p = document.createElement("p")
    let span = document.createElement("span")

    card.classList = "card"
    divp.classList = "divp"



    divpimg.src = "./img/coin.svg"
    imges.src = params?.img
    h3.innerHTML = params?.name
    divp_p.innerHTML = params?.coin + " Coin"
    span.innerHTML = params?.count + " dona bor"



    divp.appendChild(divpimg)
    divp.appendChild(divp_p)

    card.appendChild(imges)
    card.appendChild(h3)
    card.appendChild(divp)
    card.appendChild(span)

    core.appendChild(card)

}

products.forEach(Item => {
    prod(Item)
});


input.addEventListener("input", () => {
    core.innerHTML = ''
    let filterse = products.filter((item) =>
        item?.name.toLowerCase().trim().includes(input.value.toLowerCase().trim())
    );

    filterse.forEach(items => {
        prod(items)

    });

}); 