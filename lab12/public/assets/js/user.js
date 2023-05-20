const password_input = document.querySelector("#password_input");

let loweruppercase = document.querySelector(".loweruppercase i");
let loweruppercasetext = document.querySelector(".loweruppercase span");

let numbercase = document.querySelector(".numbercase i");
let numbercasetext = document.querySelector(".numbercase span");

let specialcase = document.querySelector(".specialcase i");
let specialcasetext = document.querySelector(".specialcase span");

let numcharacter = document.querySelector(".numcharacter i");
let numcharactertext = document.querySelector(".numcharacter span");

password_input.addEventListener('keyup', function () {

    let pass = document.getElementById("password_input").value;
    passStrength(pass);
});

function passStrength(pass) {

    if (pass.length > 9) {

        numcharacter.classList.remove("fa-circle");
        numcharacter.classList.add("fa-check");
        numcharacter.classList.add("green-color");
        numcharactertext.classList.add("green-color");
    } else {

        numcharacter.classList.remove("fa-check");
        numcharacter.classList.add("fa-circle");
        numcharacter.classList.remove("green-color");
        numcharactertext.classList.remove("green-color");
    }
    
    if (pass.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        loweruppercase.classList.remove("fa-circle");
        loweruppercase.classList.add("fa-check");
        loweruppercase.classList.add("green-color");
        loweruppercasetext.classList.add("green-color");
    } else {

        loweruppercase.classList.remove("fa-check");
        loweruppercase.classList.add("fa-circle");
        loweruppercase.classList.remove("green-color");
        loweruppercasetext.classList.remove("green-color");
    }


    if (pass.match(".*\\d.*")) {

        numbercase.classList.remove("fa-circle");
        numbercase.classList.add("fa-check");
        numbercase.classList.add("green-color");
        numbercasetext.classList.add("green-color");
    } else {

        numbercase.classList.remove("fa-check");
        numbercase.classList.add("fa-circle");
        numbercase.classList.remove("green-color");
        numbercasetext.classList.remove("green-color");
    }


    if (pass.match(/[`!@#$%^&*()_+\-=\[\]{};':\\|,.<>\/?~]/)) {

        specialcase.classList.remove("fa-circle");
        specialcase.classList.add("fa-check");
        specialcase.classList.add("green-color");
        specialcasetext.classList.add("green-color");
    } else {

        specialcase.classList.remove("fa-check");
        specialcase.classList.add("fa-circle");
        specialcase.classList.remove("green-color");
        specialcasetext.classList.remove("green-color");
    }


}

