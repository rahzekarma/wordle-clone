let answer = "penis";
let attempt = 0

import {Dict5Letters} from "./modules/dict.js";
// const {Dict5Letters} = require("./modules/dict.js");

function checker(a){
    document.getElementById(attempt + a).innerHTML = document.getElementById("user").value[a].toUpperCase();
    if (document.getElementById("user").value[a].toUpperCase() == answer[a].toUpperCase()){
        document.getElementById(attempt + a).style = "background-color:green";
    }
}

function yellowChecker(){
    let free = [1, 1, 1, 1, 1];
    for(let i = 0; i < 5; i++){
        if (document.getElementById(attempt + i).style.backgroundColor == ""){
            for(let j = 0; j < 5; j++){
                if ((document.getElementById(attempt + j).style.backgroundColor != "green") && (free[j]) && (document.getElementById(attempt + i).innerHTML.toUpperCase() == answer[j].toUpperCase())){
                    free[j] = 0;
                    document.getElementById(attempt + i).style = "background-color:yellow";
                }
            }
        }
    }
}

function endChecker(){
    if ((document.getElementById(attempt).style.backgroundColor == "green") && (document.getElementById(attempt + 1).style.backgroundColor == "green") && (document.getElementById(attempt + 2).style.backgroundColor == "green") && (document.getElementById(attempt + 3).style.backgroundColor == "green") && (document.getElementById(attempt + 4).style.backgroundColor == "green")){
        document.getElementById("end").innerHTML = "YOU WIN DAWG!!!";
        document.getElementById("user").disabled = true;
    }
    else if(document.getElementById(29).innerHTML != ""){
        document.getElementById("end").innerHTML = "you losted";
    }
}

function myFunction() {

    if ((document.getElementById("user").value.length == 5) && Dict5Letters.includes(document.getElementById("user").value)){
        for (let i = 0; i < 5; i++){
            checker(i);
        }
        yellowChecker();
        endChecker();
    }

    else if ((document.getElementById("user").value.length != 5)){
        // document.getElementById(attempt).innerHTML = "5 LETTERS CANT YOU RAED";
        attempt -= 5;
        document.getElementById("end").innerHTML = "5 LETTERS CANT YOU RAED";
    }

    else {
        // document.getElementById(attempt).innerHTML = "That's not a wORD";
        attempt -= 5;
        document.getElementById("end").innerHTML = "That's not a wORD";
    }

    attempt+=5;
}

// document.getElementById("user").addEventListener('click', myFunction());

var input = document.getElementById("user");
input.addEventListener("keyup", (event) => {
    if(event.code === "Enter"){
        event.preventDefault();
        myFunction();
        document.getElementById("user").value = "";
        // document.getElementById("enter").click();
    }
});