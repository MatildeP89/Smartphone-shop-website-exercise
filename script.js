let newH1 = document.getElementsByTagName("h1")[0]
let modified=false;
function changeTitle() {
    if(modified){newH1.textContent = "My shop";
        modified= false;
    }
    else {newH1.textContent = "My smartphones shop"
        modified=true;
    }
}



function changeBackground(colore)
{    document.body.style.backgroundColor=colore;
}



let newAddress=document.getElementById("myFooter")
let modifiedAddress=false;
function changeAddress(){
    if(modifiedAddress){newAddress.textContent='The phone warehouse, Via Roma, Torino.';
        modifiedAddress=false;
        }
    else {newAddress.textContent='Here Smartphones shop. Via Torino 25, Roma.';
modifiedAddress=true;
    }
}




function newClass () {
    let newClass=document.getElementsByClassName("link")

    for (i=0; i<newClass.length; i++) {
newClass[i].classList.toggle("newlink")
    }
}



function changeimgstyle(){
    let stileImg = document.getElementsByClassName("imgStyle")
    for(i=0; i<stileImg.length; i++) {
        stileImg[i].classList.toggle("newImg")
            }
}



function changePriceColor (){
    let newPriceColor= document.getElementsByClassName("price")
    for (i=0; i<newPriceColor.length; i++){
newPriceColor[i].classList.toggle("newPriceColor")
    }
}

