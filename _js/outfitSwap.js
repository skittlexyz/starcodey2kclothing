import outfits from "../assets/outfits/structure.json" assert { type: "json" };
const element = document.querySelector('.main-content.subdivider > .subdivider.right > .cloth');
const randomIndex = Math.floor(Math.random() * 16);
element.setAttribute('src', outfits[randomIndex]);