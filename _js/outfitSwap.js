import outfits from "../assets/outfits/structure.json" assert { type: "json" };

const elementDefault = document.querySelector('.main-content.subdivider > .subdivider.right > .clothDefault');
const randomIndexDefault = Math.floor(Math.random() * 15);
elementDefault.setAttribute('src', outfits[randomIndexDefault]);


const elementMobile = document.querySelector('#mobile > .header > .clothMobile');
const randomIndexMobile = Math.floor(Math.random() * 15);
elementMobile.setAttribute('src', outfits[randomIndexMobile]);