let konto = 100;
document.querySelector("#konto").innerHTML = konto + "€";

function run(){
    const random = Math.round(Math.random() * 5 + 1);
    const random2 = Math.round(Math.random() * 5 + 1);
    const random3 = Math.round(Math.random() * 5 + 1);
    switch(random){
        case 1: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-one"; break;
        case 2: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-two"; break;
        case 3: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-three"; break;
        case 4: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-four"; break;
        case 5: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-five"; break;
        case 6: document.querySelector(".fa-solid").classList = "fa-solid fa-dice-six"; break;
    }
    switch(random2){
        case 1: document.querySelector(".second").classList = "second fa-solid fa-dice-one"; break;
        case 2: document.querySelector(".second").classList = "second fa-solid fa-dice-two"; break;
        case 3: document.querySelector(".second").classList = "second fa-solid fa-dice-three"; break;
        case 4: document.querySelector(".second").classList = "second fa-solid fa-dice-four"; break;
        case 5: document.querySelector(".second").classList = "second fa-solid fa-dice-five"; break;
        case 6: document.querySelector(".second").classList = "second fa-solid fa-dice-six"; break;
    }
    switch(random3){
        case 1: document.querySelector(".third").classList = "third fa-solid fa-dice-one"; break;
        case 2: document.querySelector(".third").classList = "third fa-solid fa-dice-two"; break;
        case 3: document.querySelector(".third").classList = "third fa-solid fa-dice-three"; break;
        case 4: document.querySelector(".third").classList = "third fa-solid fa-dice-four"; break;
        case 5: document.querySelector(".third").classList = "third fa-solid fa-dice-five"; break;
        case 6: document.querySelector(".third").classList = "third fa-solid fa-dice-six"; break;
    }
    if(random == random2 && random2 == random3){
        konto+=35;
    } else {
        konto -=1;
    };

    document.querySelector("#konto").innerHTML = konto + "€";
};

function revert(){
    konto = 100;
    document.querySelector("#konto").innerHTML = konto + "€";
}