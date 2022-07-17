let konto = 100;
document.querySelector("#konto").innerHTML = konto + "€";

function run(){
    const random = Math.round(Math.random() * 5 + 1);
    document.querySelector("#zahl").innerHTML = random;
    if(random == 6){
        konto+=5;
    } else {
        konto -=1;
    };

    document.querySelector("#konto").innerHTML = konto + "€";
};

function revert(){
    konto = 100;
    document.querySelector("#konto").innerHTML = konto + "€";
}