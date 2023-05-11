import cloths from "../assets/cloths/structure.json" assert { type: "json" };
let filter = document.querySelector("#cloth-list");
let acessories = [];
let coats = [];
let shirts = [];
let shoes = [];
let under = [];
cloths.forEach(element => {
  if(element[0] === "accessory") { acessories.push(element); }
});
cloths.forEach(element => {
  if(element[0] === "coat") { coats.push(element); }
});
cloths.forEach(element => {
  if(element[0] === "shirt") { shirts.push(element); }
});
cloths.forEach(element => {
  if(element[0] === "shoe") { shoes.push(element); }
});
cloths.forEach(element => {
  if(element[0] === "under") { under.push(element); }
});
document.querySelector("#apply-filter").onclick = function applyFilter() {
  let clothList = document.querySelector('#cloth-list-grid  ');
  let selectedItem = filter.value.toString();
  if (selectedItem === "cloths") {
    clothList.innerHTML = '';
    for(let i = 0; i < cloths.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', cloths[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
    console.log(clothList);
  } else if (selectedItem === "shirts") {
    clothList.innerHTML = '';
    for(let i = 0; i < shirts.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', shirts[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "under") {
    clothList.innerHTML = '';
    for(let i = 0; i < under.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', under[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "coats") {
    clothList.innerHTML = '';
    for(let i = 0; i < coats.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', coats[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "shoes") {
    clothList.innerHTML = '';
    for(let i = 0; i < shoes.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', shoes[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "acessories") {
    clothList.innerHTML = '';
    for(let i = 0; i < acessories.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', acessories[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  }
}
function applyFilter() {
  let clothList = document.querySelector('#cloth-list-grid  ');
  let selectedItem = filter.value.toString();
  if (selectedItem === "cloths") {
    clothList.innerHTML = '';
    for(let i = 0; i < cloths.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', cloths[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
    console.log(clothList);
  } else if (selectedItem === "shirts") {
    clothList.innerHTML = '';
    for(let i = 0; i < shirts.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', shirts[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "under") {
    clothList.innerHTML = '';
    for(let i = 0; i < under.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', under[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "coats") {
    clothList.innerHTML = '';
    for(let i = 0; i < coats.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', coats[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "shoes") {
    clothList.innerHTML = '';
    for(let i = 0; i < shoes.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', shoes[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  } else if (selectedItem === "acessories") {
    clothList.innerHTML = '';
    for(let i = 0; i < acessories.length; i++) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      div.setAttribute('class', "card");
      img.setAttribute('src', acessories[i][1]);
      img.setAttribute('class', "card-image");
      img.setAttribute('onclick', "window.location.replace('bag.html');");
      div.appendChild(img);
      clothList.appendChild(div);
    }
  }
}
applyFilter();