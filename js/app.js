'use strict'

let allOfProduct =[];
let firstProduct =document.querySelector('section img:first-child');
let secoProduct = document.querySelector('section img:nth-child(2)');
let thiProudect = document.querySelector('section img:nth-child(3)');
let section = document.querySelector('section');
let resultButton = document.getElementById('viewResults');
let clickedTime = 0;
let clickesAllow = 25;

function FavProduct(name , extention = 'jpg'){

this.name = name;
this.src= `img/${name}.${extention}`;
this.viewsNum =0;
this.clicksNum =0;
allOfProduct.push(this);

}

console.log(allOfProduct);

new FavProduct('usb', 'gif');
new FavProduct('water-can');
new FavProduct('wine-glass');
new FavProduct('dog-duck');
new FavProduct('dragon');
new FavProduct('pen');
new FavProduct('pet-sweep');
new FavProduct('scissors');
new FavProduct('shark');
new FavProduct('sweep', 'png');
new FavProduct('tauntaun');
new FavProduct('unicorn');
new FavProduct('bag');
new FavProduct('banana');
new FavProduct('bathroom');
new FavProduct('boots');
new FavProduct('breakfast');
new FavProduct('bubblegum');
new FavProduct('chair');
new FavProduct('cthulhu');


function ranProudect(){

    return Math.floor(Math.random() * allOfProduct.length);

}


console.log(ranProudect());

function productsRun(){

    let inputArray = [];
    inputArray[0] = ranProudect();
    inputArray[1] = ranProudect();
    inputArray[2] = ranProudect();

    while(inputArray[0] === inputArray [1]){
        inputArray[1]=ranProudect();
    }
    while(inputArray[1] === inputArray [2]){
        inputArray[2]=ranProudect();
    }
    while(inputArray[2] === inputArray [0]){
        inputArray[0]=ranProudect();
    }

firstProduct.src = allOfProduct[inputArray[0]].src;
firstProduct.title = allOfProduct[inputArray[0]].name;
allOfProduct[inputArray[0]].viewsNum++;

secoProduct.src = allOfProduct[inputArray[1]].src;
secoProduct.title = allOfProduct[inputArray[1]].name;
allOfProduct[inputArray[1]].viewsNum++;

thiProudect.src = allOfProduct[inputArray[2]].src;
thiProudect.title = allOfProduct[inputArray[2]].name;
allOfProduct[inputArray[2]].viewsNum++;

}
console.log(productsRun());

function voutRenderResults (){

let click = document.querySelector('ul');
for ( let i = 0; i<allOfProduct.length; i++){
let list = document.createElement('li');
list.textContent = `${allOfProduct[i].name} recive ${allOfProduct[i].clicksNum} clicks, and was seen ${allOfProduct[i].viewsNum} times`;
click.appendChild(list);

}

}

function ckickOage (event){
if (event.target === section){
alert('please click on the the img');

}clickedTime++;
let clickonTheItem = event.target.title;
for (let i = 0;i<allOfProduct;i++){
    if(clickonTheItem === allOfProduct[i].name){
        allOfProduct[i].clicksNum++;
    }
}
productsRun();
if(clickedTime === clickesAllow){
    section.removeEventListener('click', ckickOage);
}

}
function clickBut(event){

    if(clickedTime === clickesAllow){
        voutRenderResults();
    }
}

productsRun();
section.addEventListener('click',ckickOage);
resultButton.addEventListener('click',voutRenderResults );


